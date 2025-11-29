import { ethers } from "ethers";

const ABI = [
  "function issuePass(address user,string metadataURI) external returns (uint256)",
  "function verify(address user,uint256 tokenId) external view returns (bool)",
  "function ownerOf(uint256 tokenId) external view returns (address)"
];

const CONTRACT_ADDRESS = "0x938FE2363f9B76858d450185eEA674b175BaB06C";

export function getContract(providerOrSigner) {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
}
