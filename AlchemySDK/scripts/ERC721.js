async function main(){
    const aurora = await ethers.getContractFactory("Aurora");

    const Aurora = await aurora.deploy("Hackathon Aurora")
    console.log("Contract deployed to address:", Aurora.address)
}

main().then(()=> process.exit(0)).catch((error)=> {
    console.error(error)
    process.exit(1)
})