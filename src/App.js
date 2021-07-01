import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Button from 'react-bootstrap/Button';

function App() {

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
          <Route exact path="/"> <LoginButton/> </Route>
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
