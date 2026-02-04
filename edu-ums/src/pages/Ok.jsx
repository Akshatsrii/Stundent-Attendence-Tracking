import React from "react";
import "../styles/ok.css";

const Ok = () => {
  return (
    <main className="ok-page">

      <section className="ok-header">
        <h1>Form Submitted Successfully</h1>
        <p>Your registration has been recorded. We will contact you soon.</p>
      </section>

      <div className="ok-success-icon">
        <i className="fas fa-check-circle"></i>
      </div>

      <div className="ok-actions">
        <a href="/" className="btn primary-btn">Go to Home</a>
        <a href="/studentlogin.html" className="btn secondary-btn">Login Now</a>
      </div>

    </main>
  );
};

export default Ok;
