require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TShhhh5YHKAAjsoPYbn7ZjapKDQnG4DP",
      accounts: [
        "54c6bca635aa8c787cc6b02d89eaca98a5c9931c016836cad51a3f66128f193a",
      ],
    },
  },
  solidity: {
    version: "0.8.4",
    // settings: {
    //   optimizer: {
    //     enabled: true,
    //     runs: 200,
    //   },
    // },
  },
};