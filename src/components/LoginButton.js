import React from "react";
import GoogleLogin from 'react-google-login';



function LoginButton(){
  const onSuccess = (res) => {
    console.log('Success! currentUser:', res.profileObj.givenName);
  }
  const onFailure = (res) =>{
    console.log("login failed! res:",res);
  }
  return (
  <div>
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  </div>)
}


export default LoginButton;
