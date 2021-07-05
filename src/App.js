import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Button from 'react-bootstrap/Button';
import CiteButton from './components/CitationGenerator/CiteButton'
const {OAuth2Client} = require('google-auth-library');

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
          <Link to={{pathname:"http://www.google.com"}}>
            <Button>Google!</Button>
          </Link>
          </nav>


        <Switch>
          <Route exact path="/">
            <CiteButton />
          </Route>
          <Route path="/auth"> <Auth/> </Route>
        </Switch>
        </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
