const CiteCoin = artifacts.require("CiteCoin");

module.exports = function(deployer) {
  deployer.deploy(CiteCoin);
};
