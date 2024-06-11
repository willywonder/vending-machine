require("@nomicfoundation/hardhat-toolbox");

// NEVER record important private keys in your code - this is for demo purposes
const NAUTILUS_TESTSNET_PRIVATE_KEY = "";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337
    },
    NautilusTestnet: {
      url: "https://triton.api.nautchain.xyz",
      chainId: 91002,
      accounts: [NAUTILUS_TESTSNET_PRIVATE_KEY]
    },
  }
};
// ...
const TESTNET_PRIVATE_KEY = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // <- this should **not** begin with "0x"
// ...
accounts: [TESTNET_PRIVATE_KEY] // <- uncomment this line
// ...