import React from "react";
import "../styles/registration.css";

const Registration = () => {
  return (
    <main className="registration-page">

      <section className="registration-header">
        <h1>Student Registration</h1>
        <p>Fill the form carefully to complete your admission process.</p>
      </section>

      <form className="registration-form">

        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Father's Name" required />
        <input type="text" placeholder="Mother's Name" required />
        <input type="email" placeholder="Email ID" required />
        <input type="text" placeholder="Phone Number" required />
        <input type="date" placeholder="Date of Birth" required />
        <input type="text" placeholder="Address" required />

        <select required>
          <option>Select Course</option>
          <option>B.Tech CSE</option>
          <option>BBA</option>
          <option>B.Com</option>
          <option>MCA</option>
          <option>MBA</option>
        </select>

        <button className="btn primary-btn" type="submit">
          Submit Registration
        </button>

      </form>

    </main>
  );
};

export default Registration;
