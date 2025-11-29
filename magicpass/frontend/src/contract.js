import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0xDEe3d2E924AADa92567c9061ea67187cfCa3E93c";


const ABI = [
  "function issuePass(address user,string metadataURI) external returns (uint256)",
  "function verify(address user,uint256 tokenId) external view returns (bool)",
  "function ownerOf(uint256 tokenId) external view returns (address)"
];

export function getContract(providerOrSigner) {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
}
