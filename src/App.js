import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Button from 'react-bootstrap/Button';
import CiteButton from './components/CitationGenerator/CiteButton'
//web3component
import React, {useState} from "react";
import Web3 from "web3";
import {simpleStorageAbi} from "./abi/abis";
//end web3component


const {OAuth2Client} = require('google-auth-library');
//web3component
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x72c6Dd09F9fC623fab138486Bea6c0ebeD78e4f5';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);
//end web3component

function App() {
  //web3component
  const [number, setNumber] = useState(0);
  const [getNumber, setGetNumber] = useState('0x00');
  const handleGet = async (e) => {
    e.preventDefault();
    const result = await SimpleContract.methods.get().call();
    setGetNumber(result);
    console.log(result);
  }
  const handleSet = async (e) => {
    e.preventDefault();
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.set(number)
                        .estimateGas();
    const result = await SimpleContract.methods.set(number).send({
      from: account,
      gas
    })
    console.log(result);
  }
  //end web3component

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*web3component*/}
        <form onSubmit={handleSet}>
          <label>
            Set Number:
            <input
              type="text"
              name="name"
              value={number}
              onChange={ e => setNumber(e.target.value) } />
          </label>
          <input type="submit" value="Set Number" />
        </form>
        <br/>
        <button
          onClick={handleGet}
          type="button" >
          Get Number
        </button>
        { getNumber }
        {/*end web3component*/}

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
