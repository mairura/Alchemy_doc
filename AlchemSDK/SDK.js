const { Network, Alchemy } = require('alchemy-sdk')

//If you want to specify your network
// const setting = {
//     apiKey: "ALCHEM_API_KEY",
//     network: Network.goerli //you can specifty your network to use
// }

//Using the default setting
const alchemy = new Alchemy();

//Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

//Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances("0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE").then(console.log);

//Access the Alchemy NFT API
alchemy.nft.getNftsForOwner("vitalik.eth").then(console.log);

//Access websockets and Alchemy-specific WS methods
alchemy.ws.on({
    method: 'alchemy_pendingTransactions'
},
 res => console.log(res)
);