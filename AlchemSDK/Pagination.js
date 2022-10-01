const { Alchemy } = require("alchemy-sdk");

const alchemy = new Alchemy();

async function main() {
    const ownerAddress = "vitalik.eth";
    for await (const nft of alchemy.nft.getNftsForOwnerIterator(ownerAddress)){
        console.log("ownedNft:", nft)
    }
}
main();