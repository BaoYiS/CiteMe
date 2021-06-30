import React from "react";
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';
{/*import {BrowserRouter, Switch, Route} from 'react-router-dom'*/}


function clickMe(){
  alert("You clicked me!");
}

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
