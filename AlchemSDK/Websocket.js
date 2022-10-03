const { Alchemy } = require("alchemy-sdk")

const alchemy = new Alchemy();

//Listening to all pending transactions
alchemy.ws.on({
    method: "alchemy_pendingTransactions"
 },
 res => console.log(res) 
);

//Listen to only the next transaction on the USDC contract
alchemy.ws.once({
    method: "alchemy_pendingTransactions",
    toAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
},
    res => console.log(res)
)

//Remove all listeners
alchemy.ws.removeAllListeners();