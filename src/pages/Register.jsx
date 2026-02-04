import React from "react";
import "../styles/register.css";

const Register = () => {
  return (
    <main className="register-page">

      <section className="register-header">
        <h1>Create Account</h1>
        <p>Register to access student services and portal.</p>
      </section>

      <section className="register-section">
        <form className="register-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Create Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit" className="btn primary-btn">
            Register
          </button>
        </form>
      </section>

    </main>
  );
};

export default Register;
