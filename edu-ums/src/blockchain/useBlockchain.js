import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contractABI.json";
import { CONTRACT_ADDRESS } from "./config";


export default function useBlockchain() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  async function connectWallet() {
    if (!window.ethereum) {
      return alert("MetaMask not installed!");
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const instance = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      signer
    );

    setContract(instance);
    console.log("Connected to contract:", instance);

    return instance;
  }

  async function registerStudent(roll) {
    if (!contract) return alert("Please connect your wallet first!");

    if (!roll) return alert("Enter roll number!");

    const hash = ethers.keccak256(ethers.toUtf8Bytes(roll));

    const tx = await contract.registerStudent(hash);
    await tx.wait();

    alert("Student Registered on Blockchain!");
  }

  async function markAttendanceStudent(classId) {
    if (!contract) return alert("Please connect your wallet first!");

    const tx = await contract.markAttendanceByStudent(classId);
    await tx.wait();

    alert("Attendance Marked Successfully!");
  }

  return {
    account,
    connectWallet,
    registerStudent,
    markAttendanceStudent,
  };
}
