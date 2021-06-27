const TestContracts = artifacts.require("Migrations");

module.exports = function (deployer) {
  deployer.deploy(TestContracts);
};
