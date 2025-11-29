// async function main() {
//   const MagicPass = await ethers.getContractFactory("MagicPass");
//   const contract = await MagicPass.deploy();
//   await contract.deployed();

//   console.log("MagicPass deployed at:", contract.address);
// }
// main().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });



async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with address:", deployer.address);

  const MagicPass = await ethers.getContractFactory("MagicPass");
  const contract = await MagicPass.deploy();
  await contract.deployed();

  console.log("MagicPass deployed at:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
