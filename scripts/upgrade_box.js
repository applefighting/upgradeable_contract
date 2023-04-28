// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  const BoxV3 = await ethers.getContractFactory('BoxV3');
  console.log('Upgrading Box...');
  await upgrades.upgradeProxy('0x2158acd38929f02A2dC09c7520d2e1f957F77704', BoxV2);
  console.log('Box upgraded');
}

main();