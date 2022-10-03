const { Alchemy } = require("alchemy-sdk");

const alchemy = new Alchemy();

//Bored Ape Yacht contract address
const baycAddress = '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D';

async function main() {
    for await (const nft of alchemy.nft.getNftsForContractIterator(baycAddress, {
        //Omit the NFT metadata from smaller payloads
        omitMetadata: true, //Fetching the BAseNFT
    })) {
        await alchemy.nft.getOwnersForNft(nft.contract.address, nft.tokenId).then((response) => 
            console.log("Owners:", response.owners, "tokenId:", nft.tokenId)
        );
    }
}

main();