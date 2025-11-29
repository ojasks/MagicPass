// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MagicPass is ERC721, Ownable {

    uint256 public passId;
    mapping(uint256 => bool) public used;

    constructor() ERC721("MagicPass", "MPASS") Ownable() {}

    function issuePass(address visitor) public onlyOwner returns (uint256) {
        passId++;
        _mint(visitor, passId);
        return passId;
    }

    function markUsed(uint256 id) public onlyOwner {
        used[id] = true;
    }

    function isValid(uint256 id, address user) public view returns (bool) {
        return ownerOf(id) == user && used[id] == false;
    }
}
