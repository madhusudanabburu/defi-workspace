require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
    },
  ropsten: {
      url: "https://ropsten.infura.io/v3/f8c70563a9a7437689567e8651cebe90",
      accounts: [`0x1a649b7ec046935baf5a47a3feb9a2a62493b2e6c590e20e6a8c0e30bcdad010`]
  }
 }
};
