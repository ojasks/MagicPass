// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MagicPass is ERC721, Ownable {
    
    uint256 public passId;
    mapping(uint256 => bool) public used;

    event PassScanned(address indexed user, uint256 indexed tokenId, uint256 time);

    constructor() ERC721("MagicPass", "MPASS") Ownable() {}

    function issuePass(address visitor) external onlyOwner returns (uint256) {
        passId++;
        _mint(visitor, passId);
        return passId;
    }

    function markUsed(uint256 id) external onlyOwner {
        used[id] = true;
    }

    function isValid(uint256 id, address user) public view returns (bool) {
        return ownerOf(id) == user && used[id] == false;
    }

    function logScan(address user, uint256 tokenId) external onlyOwner {
        require(isValid(tokenId, user), "Invalid pass");
        emit PassScanned(user, tokenId, block.timestamp);
    }
}
