import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBlockchain from "../blockchain/useBlockchain";

const Register = () => {
  const navigate = useNavigate();

  const {
    account,
    connectWallet,
    registerStudent,
    isStudentRegistered,
  } = useBlockchain();

  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const checkRegistration = async () => {
      if (account) {
        const registered = await isStudentRegistered(account);
        if (registered) {
          navigate("/student/dashboard");
        }
      }
    };
    checkRegistration();
  }, [account, isStudentRegistered, navigate]);

  const handleRegister = async () => {
    if (!roll) {
      alert("Please enter roll number");
      return;
    }

    try {
      setLoading(true);
      await registerStudent(roll);
      alert("Student registered successfully!");
      navigate("/student/dashboard");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Student Registration</h2>

      {!account && (
        <button
          onClick={connectWallet}
          style={btnStyle}
        >
          Connect Wallet
        </button>
      )}

      {account && (
        <>
          <p style={{ fontSize: "14px" }}>
            Wallet: <b>{account}</b>
          </p>

          <input
            type="number"
            placeholder="Enter Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            style={inputStyle}
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            style={btnStyle}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </>
      )}
    </main>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  borderRadius: "6px",
  backgroundColor: "#4B66F0",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

export default Register;
