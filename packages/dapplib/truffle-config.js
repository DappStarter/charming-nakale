require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remember slow hidden arena bone gaze'; 
let testAccounts = [
"0x4dde212d49637a1679f45f65c23da7436f51fed5308d9ba629870f7a8f4feb2e",
"0x72efabb6d2f869ac5b3a017af303e6180ac9f3c0e5cac87cd26fae5d671cd01c",
"0xa7a1bca6d4f2fd408c17ffc7ea60a2da21fa942a589cfa34e09a37e8b08155bb",
"0xe41b3145bb872defdadf490e6d3a95c1f2d0eebd879ea537b0bfb6af138789a8",
"0x4b92c31e0ef8497345f1a083a83271777f3e7c1ea33426e13718d91dc72c96aa",
"0x48af8497080f81301ac04b40a62b51179650b407ffc5fa260b26498a9454cdbc",
"0x71ce0ae28bee303717947281322e1ed0f9ee76691e16427b10b127fc79659c62",
"0xf7a996e28801d4f429a3b27afbb7848afe70903a90235ddc58d3d6648e34ccbe",
"0x4d9eefbee1f0ceadc7d7b30a1fbce2d58d66d12b72a2405107906408e7a09efe",
"0x9b63291d8a1aff3674165eae995ea51e8a719221cd558e2b08eb0c0059c96907"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
