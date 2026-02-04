const fs = require("fs");
const path = require("path");
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with address:", deployer.address);

  // Deploy contract (NO constructor argument)
  const Attendance = await hre.ethers.getContractFactory("Attendance");
  const contract = await Attendance.deploy();

  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();

  console.log("Contract deployed at:", contractAddress);

  // ===== ABI PATH (Hardhat standard) =====
  const abiPath = path.join(
    __dirname,
    "../artifacts/contracts/Attendance.sol/Attendance.json"
  );

  if (!fs.existsSync(abiPath)) {
    throw new Error("ABI not found at: " + abiPath);
  }

  const abiJson = JSON.parse(fs.readFileSync(abiPath, "utf8"));

  // ===== FRONTEND BLOCKCHAIN FOLDER =====
  const frontendDir = path.join(
    __dirname,
    "../edu-ums/src/blockchain"
  );

  if (!fs.existsSync(frontendDir)) {
    fs.mkdirSync(frontendDir, { recursive: true });
  }

  // ===== WRITE ABI =====
  fs.writeFileSync(
    path.join(frontendDir, "contractABI.json"),
    JSON.stringify(abiJson.abi, null, 2)
  );

  // ===== WRITE CONTRACT ADDRESS =====
  fs.writeFileSync(
    path.join(frontendDir, "config.js"),
    `export const CONTRACT_ADDRESS = "${contractAddress}";\n`
  );

  console.log("✅ ABI & Contract address saved to frontend successfully");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
