require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      accounts: ["ce6cbd93848e391fa49e53dd6790f6a24ab3c19e3180caadc2204c7f5d97468b"], //Your private key starting with "0x" 
      //Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};