//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract PulpaToken is ERC20, ERC20Burnable, AccessControl, ERC20Permit {
	bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

	constructor(
		string memory tokenName_,
		string memory tokenSymbol_,
		address defaultAdmin_,
		address minter_
	) ERC20(tokenName_, tokenSymbol_) ERC20Permit(tokenName_) {
		_grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin_);
		_grantRole(MINTER_ROLE, minter_);
	}

	function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
		_mint(to, amount);
	}

	function burn(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
		_burn(to, amount);
	}
}
