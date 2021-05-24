const dStorage = artifacts.require("DStorage");

module.exports = function(deployer) {
	//Deploy Contract
     deployer.deploy(dStorage);
};
