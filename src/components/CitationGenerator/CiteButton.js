
import {useState,useEffect} from "react";
import GoogleLogin from 'react-google-login';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

/*const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
}
verify().catch(console.error);*/


const CiteButton = () => {
  const [user, setUser] = useState({});
  const onSuccess = (res) => {
    setUser(res.profileObj);
    return(<Link to="/auth"><Button>Go Auth</Button></Link>)
    //lem_help: Instead of link, this should redirect to the smart contract transfer function
  }
  const onFailure = (res) =>{
    console.log("login failed! res:",res);
  }

  useEffect(() => {
    if(user.name !== undefined) {
      console.log('Success! currentUser:', user.givenName,", googleId:...",user.googleId);
      console.log(user)
    }
  },[user])

  return (

    /*{user.name ? (<h1>Welcome, {user.name}</h1>) : (<h1>Hi</h1>)} //HELP, this line is not working :()*/
    <div>

    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  </div>

  )
}

export default CiteButton
