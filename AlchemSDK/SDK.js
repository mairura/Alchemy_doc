import { Network, Alchemy } from 'alchemy-sdk'

const setting = {
    apiKey: '',//ALchemy API key
    network: Network.goerli, //Your network
}

const alchemy = new Alchemy(setting);