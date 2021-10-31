require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remind prosper inflict person forget tourist'; 
let testAccounts = [
"0x8e64d90bcbcf5055884d86021544264b7b86a03a629dee9ed97e6510cfcb316f",
"0x129b44ff2f8afb42dd75dd36d7489e9ded83494ea35bc2bac6affe66fe254ff9",
"0x84eb8c8fe8fe3c8ab40b297aacfd4719d13add7db6bdb339d2f1a18dc7625fe1",
"0x85111c04ed99512cb6b755ce3883c6127c8d6fbcb76ead9c985a03ae935a4360",
"0x618b3e849276cf8e5ca96d0a2b83f4b5c2d2f686e27bf4f4fe0c1a26eb829755",
"0x4f99fd31a3e1aab642938dc216bf8935dddce21d0dcf1fed8cfe15ff681bc0b2",
"0x2b4e3837f82a615ddec347548ae07ef36ad0493505c6bd6da4807a35f31a94d3",
"0x619c9ad650af4fc5d1f2e551b69c3c93e2850d830f924702faa7d23b20ef38df",
"0xbccf9c656a1f451f3771e0e5b79fadc0bac74c511d4965d6db9d3fab66787af8",
"0xbf3941982884ed8c1425b17cc4483e7e91c1ce7105b94519aa7aa2615854d533"
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
            version: '^0.8.0'
        }
    }
};

