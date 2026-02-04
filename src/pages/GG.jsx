import React from "react";
import "../styles/gg.css";

const GG = () => {
  return (
    <main className="gg-page">

      <section className="gg-header">
        <h1>Admin Panel</h1>
        <p>Manage university updates, notices and important announcements.</p>
      </section>

      {/* Post Notice Section */}
      <section className="gg-form-section">
        <form className="gg-form">
          <input type="text" placeholder="Notice Title" required />
          <textarea placeholder="Write notice details..." rows="5" required></textarea>

          <button className="btn primary-btn" type="submit">
            Post Notice
          </button>
        </form>
      </section>

    </main>
  );
};

export default GG;
