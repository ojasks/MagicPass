import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0x4c6651bE2fdf3303440e7bD1cf6E44B08E45DCf8";



const ABI = [
  "function issuePass(address user) external returns (uint256)",
  "function markUsed(uint256 id) external",
  "function isValid(uint256 id, address user) view returns (bool)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function logScan(address user, uint256 tokenId) external",
  "event PassScanned(address indexed user, uint256 indexed tokenId, uint256 time)"
];


export function getContract(providerOrSigner) {
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, providerOrSigner);
}
