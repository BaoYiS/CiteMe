import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";
import LoginButton from './components/LoginButton'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';
const {OAuth2Client} = require('google-auth-library');

function App() {
  const [user, setUser] = useState({name:""});
  const onSuccess = (res) => {
    setUser(prevState=>{return{...prevState,name:res.Ys.Ve}})
    console.log(res.Ys.Ve)
    console.log("datatype:",typeof res.Ys.Ve)
    console.log('Success! currentUser:', user);
  }
  const onFailure = (res) =>{
    console.log("login failed! res:",res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
        <div>
          <nav>
          <Link to="/">
            <Button>Generate Citation!</Button>
          </Link>
          <Link to="/auth">
            Auth
          </Link>
          <Link to={{pathname:"http://www.google.com"}}>
            <Button>Google!</Button>
          </Link>
          </nav>
        <Switch>
          <Route exact path="/">
            {user && (
              <h1>Welcome, {user.Bd}</h1>
            )}
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              buttonText="Log in with Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
            {/*}<LoginButton/>*/}
          </Route>
          <Route path="/auth"> <Auth/> </Route>
        </Switch>
        </div>
        </Router>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
