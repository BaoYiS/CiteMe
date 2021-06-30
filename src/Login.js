import './App.css';
import GoogleLogin from 'react-google-login';

function Login(){

  const handleLogin = (response) => {
  console.log(response);}
  
  <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={handleLogin}
    onFailure={handleLogin}
    cookiePolicy={'single_host_origin'}
  />

}

export default Login;
