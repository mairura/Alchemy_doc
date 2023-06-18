// // scripts/withdraw.ts

// const hre = require("hardhat");
// const abi = require("../artifacts/contracts/BuyMeACoffee.sol/BuyMeACoffee.json");
// require("dotenv").config();
// const ethers = require('ethers');

// const key = process.env.PRIVATE_KEY;
// console.log("key==>>",key)
// const sepoliaKey = process.env.SEPOLIA_API_KEY
// console.log("apiS==>>", sepoliaKey)

// async function getBalance(provider: any, address: any) {
//   const balanceBigInt = await provider.getBalance(address);
//   console.log("Balance==>>", provider)
//   return ethers.utils.formatEther(balanceBigInt);
// }

// async function main() {
//   // Get the contract that has been deployed to Sepolia.
//   const contractAddress = "0x70750D85620e21F6AEbECe49Abe80B4444b80FaC";
//   const contractABI = abi.abi;

//   // Get the node connection and wallet connection.
//   const provider = new ethers.providers.AlchemyProvider(
//     "sepolia",
//     process.env.SEPOLIA_API_KEY
//   );
//   console.log("==>Provider", provider)
//   // Ensure that signer is the SAME address as the original contract deployer,
//   // or else this script will fail with an error.
//   const signer = new ethers.Wallet(key, provider);
//   console.log("***==>", signer)

//   // Instantiate connected contract.
//   const buyMeACoffee = new ethers.Contract(
//     contractAddress,
//     contractABI,
//     signer
//   );

//   // Check starting balances.
//   console.log(
//     "current balance of owner: ",
//     await getBalance(provider, signer.address),
//     "ETH"
//   );
//   const contractBalance = await getBalance(provider, buyMeACoffee.address);
//   console.log(
//     "current balance of contract: ",
//     await getBalance(provider, buyMeACoffee.address),
//     "ETH"
//   );

//   // Withdraw funds if there are funds to withdraw.
//   if (contractBalance !== "0.0") {
//     console.log("withdrawing funds..");
//     const withdrawTxn = await buyMeACoffee.withdrawTips();
//     await withdrawTxn.wait();
//   } else {
//     console.log("no funds to withdraw!");
//   }

//   // Check ending balance.
//   console.log(
//     "current balance of owner: ",
//     await getBalance(provider, signer.address),
//     "ETH"
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error.message);
//     process.exit(1);
//   });
