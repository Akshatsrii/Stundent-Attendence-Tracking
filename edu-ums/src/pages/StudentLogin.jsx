import React, { useState } from "react";
import "../styles/studentLogin.css";

const StudentLogin = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful (Frontend Only)");
  };

  return (
    <main className="student-login-page">

      {/* Header */}
      <section className="login-header">
        <h1>Student Login</h1>
        <p>Login to access your student dashboard.</p>
      </section>

      {/* Login Form */}
      <section className="login-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn primary-btn">
            Login
          </button>

          <p className="register-link">
            Don’t have an account? <a href="/register.html">Register</a>
          </p>
        </form>
      </section>

    </main>
  );
};

export default StudentLogin;
