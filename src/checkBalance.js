/*
Testing code to get familiarized with ethereum blockchain
*/

const Web3=require("web3");
const url = "https://mainnet.infura.io/v3/2ed2e8bde302447ba05a1d52a336bfc4"; //url to the infura account with citeme project
var web3=new Web3(url); //Allows access to Ethereum blockchain

const address = "0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e";//random wallet address of the top ether owners
web3.eth.getBalance(address,(err,bal)=>{console.log(web3.utils.fromWei(bal,'ether'));});
