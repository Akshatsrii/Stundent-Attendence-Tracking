import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./contractABI.json";
import { CONTRACT_ADDRESS } from "./config";

export default function useBlockchain() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  /* =========================
     CONNECT WALLET
  ========================= */
  async function connectWallet() {
    if (!window.ethereum) {
      alert("MetaMask not installed!");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const selectedAccount = accounts[0];
    setAccount(selectedAccount);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const instance = new ethers.Contract(
      CONTRACT_ADDRESS,
      contractABI,
      signer
    );

    setContract(instance);
    console.log("Wallet connected:", selectedAccount);
    return instance;
  }

  /* =========================
     REGISTER STUDENT
  ========================= */
  async function registerStudent(roll) {
    if (!contract) {
      alert("Connect wallet first!");
      return;
    }

    if (!roll) {
      alert("Enter roll number!");
      return;
    }

    try {
      const rollHash = ethers.keccak256(
        ethers.toUtf8Bytes(roll.toString())
      );

      const tx = await contract.registerStudent(rollHash);
      await tx.wait();

      alert("Student Registered Successfully!");
    } catch (err) {
      console.error(err);
      alert("Student registration failed!");
    }
  }

  /* =========================
     MARK ATTENDANCE (STUDENT)
  ========================= */
  async function markAttendanceStudent(classId) {
    if (!contract) {
      alert("Connect wallet first!");
      return;
    }

    try {
      const tx = await contract.markAttendanceByStudent(classId);
      await tx.wait();

      alert("Attendance Marked!");
    } catch (err) {
      console.error(err);
      alert("Attendance failed!");
    }
  }

  /* =========================
     STUDENT LOGIN AUTH
     (ABI BASED)
  ========================= */
  async function checkStudentRegistered(address) {
    if (!contract) return false;

    try {
      const hash = await contract.studentHash(address);

      // If hash is not zero => registered
      return hash !== ethers.ZeroHash;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  /* =========================
     EXPORT
  ========================= */
  return {
    account,
    connectWallet,
    registerStudent,
    markAttendanceStudent,
    checkStudentRegistered,
  };
}
