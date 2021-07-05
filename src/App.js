import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Auth from "./components/Auth/Auth"
import Button from 'react-bootstrap/Button';
import CiteButton from './components/CitationGenerator/CiteButton'
//web3component
import React, {useState, useEffect} from "react";
import Web3 from "web3";
import {simpleStorageAbi} from "./abi/abis";
import {citeCoinAbi} from "./abi/citeCoinAbi";
//end web3component

import NavBar from "./components/Public/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import CitationForm from "./components/CitationGenerator/CitationForm"
import Home from "./components/Home/Home"
import * as userService from "./services/userService"

import GoogleLogin from 'react-google-login';


const {OAuth2Client} = require('google-auth-library');
//web3component
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x72c6Dd09F9fC623fab138486Bea6c0ebeD78e4f5';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);
const contractAddrCitecoin = "0xf1ca1e8a54E2988f778DC22aC553dFf2DEFD6579"
const CiteCoin = new web3.eth.Contract(citeCoinAbi, contractAddrCitecoin);

//end web3component

function App() {
    //web3component
    const [number, setNumber] = useState(0);
    const [getNumber, setGetNumber] = useState('0x00');
    const [getSupply, setGetSupply] = useState('0x00');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});
    const handleGet = async (e) => {
        e.preventDefault();
        const result = await SimpleContract.methods.get().call();
        setGetSupply(result);
        console.log(result);
    }
    const handleGetSupply = async (e) => {
        e.preventDefault();
        const result = await CiteCoin.methods.totalSupply().call();
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

    useEffect(() => {
        //for once we build back end
        // userService
        //     .getUser()
        //     .then(onGetUserSuccess)
        //     .catch(onGetUserFailure)

    }, [isLoggedIn])

    const onGetUserSuccess = (res) => {
        console.log(res.data.item)
        if (res.data.item) {
            setIsLoggedIn(true)
            setUserData({
                id: res.data.item.id,
                userName: res.data.item.userName,
                email: res.data.item.email,
                walletAddress: res.data.item.walletAddress

            })
        }
    }

    const onGetUserFailure = (err) => {
        console.log(err)
        if (err && userData === null) {
            setIsLoggedIn(false)
        }
    }

    //Hey Michael, I moved all your rendered/returned code into the home.jsx file so we can keep things
    //more organized. You can access it through the Navlink in Navbar. Also, I'm not sure what logic you
    //want to keep here in the app.js, or what you want to move over, so I passed everything that's needed
    //for home.jsx to work through props

    return (
        <div className="App">
            <Router>
                <NavBar/>
                <body
                    // className="App-header"
                >
                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                {/*web3component*/}


                <Switch>
                    {/*<Route exact path="/">*/}
                    {/*  <CiteButton />*/}
                    {/*</Route>*/}
                    <Route path="/auth"> <Auth/> </Route>
                    <Route exact path="/home" render={
                        (props) => <Home
                            {...props}
                            handleSet={handleSet}
                            setNumber={setNumber}
                            handleGet={handleGet}
                            getNumber={getNumber}
                            handleGetSupply={handleGetSupply}
                            getSupply={getSupply}
                        />}/>
                    <Route exact path="/citation" component={CitationForm}/>
                </Switch>

                </body>
            </Router>
        </div>
    );
}

export default App;
