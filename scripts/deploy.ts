import { ethers } from "hardhat";
import { Spender__factory, Token__factory } from "../typechain";

async function main() {
  const Token: Token__factory = await ethers.getContractFactory("Token");
  const token = await Token.deploy("Token", "TST");

  const Spender: Spender__factory = await ethers.getContractFactory("Spender");
  const spender = await Spender.deploy();

  await token.deployed();
  await spender.deployed();

  console.log("Token deployed to:", token.address);
  console.log("Spender deployed to:", spender.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
