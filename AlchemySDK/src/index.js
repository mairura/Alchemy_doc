const { Network, Alchemy } = require("alchemy-sdk");
require("dotenv").config();

const api_key = process.env.API_KEY;

const settings = {
  apiKey: api_key,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

//Access standard Ethers.js JSON-RPC request
alchemy.core.getBlockNumber().then(console.log);

//Access Alchemy NFT API
alchemy.nft.getNftsForOwner("vitalik.eth").then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core
  .getTokenBalances("0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE")
  .then(console.log);

//Access websockets and alchemy-specific ws methods
alchemy.ws.on(
  {
    method: "alchemy_pendingTransactions",
  },
  (res) => console.log(res)
);

async function main() {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log("The latest block number is:", latestBlock);
}
main();
