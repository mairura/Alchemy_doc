const { Network, Alchemy } = require("alchemy-sdk");
const { parseEther } = require("alchemy-sdk/dist/src/api/utils");
const dotenv = require("dotenv");
dotenv.config();

const api_key = process.env.API_KEY

const setting = {
    apiKey: api_key,
    network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(setting);

async function main() {
    const latestBlock = await alchemy.core.getBlockNumber();
    console.log("The latest block number is", latestBlock);
}


//Get Block by its Hash/Block Number on Ethereum
async function main() {
    const block = await alchemy.core.getBlock(5221026);
    console.log(block);
}

//Getting Logs for an Ethereum Transaction
async function main() {
    const getLogs = await alchemy.core.getLogs({
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        topics: ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"],
        blockHash: "0x49664d1de6b3915d7e6fa297ff4b3d1c5328b8ecf2ff0eefb912a4dc5f6ad4a0"
    });
    console.log(getLogs);
}

//Making an Eth_Call on Ethereum
async function main() {
    const call = await alchemy.core.call({
        to: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
        gas: "0x76c0",
        gasPrice: "0x9184e72a000",
        data: "0x3b3b57debf074faa138b72c65adbdcfb329847e4f2c04bde7f7dd7fcad5a52d2f395a558"
    });
    console.log(call);
}

// Get transaction/transaction Count by its Hash on Ethereum
async function main() {
    const tx = await alchemy.core.getTransaction("0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b");
    console.log(tx);
}

//How to get Transaction Receipt
async function main() {
    const txReceipt = await alchemy.core.getTransactionReceipt("0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b");
    console.log(txReceipt);
}

//How to Fetch Historical Transaction on Ethereum
async function main(){
    const getTransfers = alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toBlock: "latest",
        contractAddresses: ["0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"],
        excludeZeroValue: true,
        category: ["erc721"]
    });

    console.log(getTransfers);
}

main();

//How to Subscribe to new Blocks on the Ethereum Blockchain
alchemy.ws.on("block", (blockNumber) => console.log("The latest block number is:", blockNumber));

// How to subscribe to pending transactions on the ethereum
alchemy.ws.on({
    method: "alchemy_pendingTransactions",
},
(tx) => console.log(tx)
)

//How to estimate Gas for a transaction
async function main() {
    const gasEstimate = await alchemy.core.estimateGas({
    // Wrapped ETH address
    to: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    // `function deposit() payable`
    data: "0xd0e30db0",
    // 1 ether
    value: parseEther("1.0"),
  });
  console.log(gasEstimate);
}

//How to get current gas price in Ethereum
async function main(){
    const gasPrice = await alchemy.core.getGasPrice();
    console.log(gasPrice);
}

//Check for Owner of NFT
async function main(){
    //TIMEPIECES CONTRACT ADDRESS
    const address = "0xDd69da9a83ceDc730bc4d3C56E96D29Acc05eCDE";

    //Safe Haven Token ID
    const tokenId  = 4254;

    //Get owner of NFT
    const owner = await alchemy.nft.getOwnersForNft(address, tokenId);
    console.log(owner.owners);
}

//Print All NFTs in a collection
async function main(){
    //Contract Address
    const address = "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D";

    //Flag to omit metadata
    const omitMetadata = false;

    //Get all NFTs
    const { nfts } = await alchemy.nft.getNftsForContract(address, {
        omitMetadata: omitMetadata,
    });

    let i = 1;

    for (let nft of nfts){
        console.log(`${i}. ${nft.rawMetadata.image}`);
        i++;
    }
}

//Get All NFTs Owned by an Address
async function main(){
    //Get All NFTs
    const nfts = await alchemy.nft.getNftsForOwner("elanhalpern.eth");
    //Print the NFTs
    console.log(nfts)
}

main()
.then((result) => {
    process.exit(0)
    console.log(result);
}).catch((err) => {
    console.log(err)
});