import React, { useState } from "react";
import "../styles/studentDashboard.css";
import useBlockchain from "../blockchain/useBlockchain";

const StudentDashboard = () => {
  const {
    account,
    connectWallet,
    registerStudent,
    markAttendanceStudent
  } = useBlockchain();

  const [roll, setRoll] = useState("");

  return (
    <main className="student-dashboard-page">

      {/* Header */}
      <section className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p>Welcome back! Manage your academics here.</p>

        {/* Wallet Connect Button */}
        <button
          onClick={connectWallet}
          className="wallet-btn"
        >
          {account ? "Wallet Connected" : "Connect Wallet"}
        </button>

        {/* Show connected account */}
        {account && (
          <p className="connected-text">
            Connected: {account}
          </p>
        )}
      </section>



      {/* Dashboard Cards */}
      <section className="dashboard-grid">

        {/* Attendance Card */}
        <div className="dashboard-card">
          <h3>Attendance</h3>
          <p>Mark and register your attendance on blockchain.</p>

          {/* Register Student */}
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            className="input-box"
          />

          <button
            disabled={!account}
            onClick={() => roll.trim() !== "" ? registerStudent(roll) : alert("Please enter roll number")}
            className="action-btn"
          >
            Register Student
          </button>

          {/* Mark Attendance */}
          <button
            disabled={!account}
            onClick={() => markAttendanceStudent(1)}
            className="action-btn green"
          >
            Mark Attendance
          </button>

          {!account && (
            <p className="warning-text">⚠ Connect wallet to enable actions</p>
          )}
        </div>

        {/* Other Existing Cards */}
        <a href="/course.html" className="dashboard-card">
          <h3>Courses</h3>
          <p>View enrolled subjects.</p>
        </a>

        <a href="/library.html" className="dashboard-card">
          <h3>Library</h3>
          <p>Browse available books.</p>
        </a>

        <a href="/factuality.html" className="dashboard-card">
          <h3>Faculty</h3>
          <p>Meet your teachers.</p>
        </a>

      </section>

    </main>
  );
};

export default StudentDashboard;
