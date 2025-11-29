// require("@nomiclabs/hardhat-ethers");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.24",
// };


// require("@nomiclabs/hardhat-ethers");
// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     sepolia: {
//       url: process.env.SEPOLIA_RPC,     // set in .env
//       accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
//     }
//     // or polygonMumbai: { ... }
//   }
// };

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};