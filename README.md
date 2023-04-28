# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

deploy logic contract:
https://goerli.etherscan.io/tx/0x79c1df0cccb7994a9fe24a44392b9ff8237ad965a77a8e13c76d269e730ba439
0x44ec1214c069d8b787216CD11655a9c77e917320

deloy ProxyAdmin
https://goerli.etherscan.io/tx/0x953dca2b575adf6f3737e6db4b9eeb135d649cf357332235944c19b9a857959e
0x992c63d3a6BB20A6CA2534878bd6a1a0C1777d13

deploy TransparentUpgradeableProxy
https://goerli.etherscan.io/tx/0x07b1f5e9b0a9a7121ec2a8fb910da8415ca0841aa7aea8d64c1febee131b6476
0x2158acd38929f02A2dC09c7520d2e1f957F77704

deploy logic v2
https://goerli.etherscan.io/tx/0xe91f2ea1b826eba32fb9d49ab6d9e0e18163153d47a2377647aa04a66d09ae80
0xA283b11923A39027246fd0310B59C7fB13664567

upgrade
https://goerli.etherscan.io/tx/0xc0947d62654b737a83d89278aaab0b61a51f3b9d689ae0dd48d94854fdab171d
change proxy's logic contract address  to the logic v2 in proxyadmin

tx to proxyadmin：
0x992c63d3a6BB20A6CA2534878bd6a1a0C1777d13

parameter1 proxy：
0x2158acd38929f02A2dC09c7520d2e1f957F77704

parameter2 logicv2：
0xA283b11923A39027246fd0310B59C7fB13664567