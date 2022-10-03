const { NftExcludeFilters, Alchemy } = require("alchemy-sdk");

const alchemy = new Alchemy();

//Get how many NFTs an address owns
alchemy.nft.getNftsForOwner("vitalik.eth").then(nfts => {
    console.log(nfts.totalCount);
});

//Get all the image urls for all the NFTs an address owns
async function main(){
    for await (const nft of alchemy.nft.getNftsForOwnerIterator("vitalik.eth")) {
        console.log(nft.media);
    }
}

main();

//FIlter out spam NFTs
alchemy.nft.getNftsForOwner("vitalik.eth", {
    excludeFilters: [NftExcludeFilters.SPAM]
}).then(console.log)

//Get all outbound transfers to a provided address
alchemy.core.getTokenBalances('0x994b342dd87fc825f66e51ffa3ef71ad818b6893').then(console.log);