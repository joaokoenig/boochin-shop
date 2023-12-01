// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract MyMultiToken is ERC1155 {
    //tokens
    uint256 public constant GREEN = 0;
    uint256 public constant GOLD = 1;
    uint256 public constant PLATINUM = 2;

    //events
    event TokensMinted(address indexed account, uint256 id, uint256 amount);
    event TokensBurned(address indexed account, uint256 id, uint256 amount);

    constructor() ERC1155("https://yourdomain.com/api/token/{id}.json") {
        // Initial minting, if required
        _mint(msg.sender, GREEN, 1000, "");   // Mint 1000 GREEN tokens
        _mint(msg.sender, GOLD, 500, "");     // Mint 500 GOLD tokens
        _mint(msg.sender, PLATINUM, 200, ""); // Mint 200 PLATINUM tokens
    }

    function mint_with_barcode(address account, uint256 barcode, uint256 price) public {
        uint256 tokenType = get_token_type(barcode);
        uint256 amount = price / 10;
        _mint(account, tokenType, amount, "");
        emit TokensMinted(account, tokenType, amount);
    }

    function get_token_type(uint256 barcode) internal pure returns (uint256) {
        require(barcode >= 1000000000 && barcode <= 9999999999, "Barcode must be 10 digits");

        uint256 lastDigit = barcode % 10;
        if (lastDigit == 0) {
            return GREEN;
        } else if (lastDigit == 1) {
            return GOLD;
        } else {
            return PLATINUM;
        }
    }

    function burn(uint256 id, uint256 amount) public {
        require(balanceOf(msg.sender, id) >= amount, "Insufficient balance to burn");
        _burn(msg.sender, id, amount);
        emit TokensBurned(msg.sender, id, amount);
    }




}