import React from "react";

const Alumni = () => {
  return (
    <main className="alumni-page">

      <section className="alumni-header">
        <h1>Our Alumni</h1>
        <p>Meet our successful graduates who are shining across industries.</p>
      </section>

      <section className="alumni-grid-section">
        <div className="alumni-grid">

          <div className="alumni-card">
            <img src="/pages/icons8-linkedin-48.png" alt="Alumni 1" />
            <h3>Rahul Singh</h3>
            <p>Software Engineer – Google</p>
          </div>

          <div className="alumni-card">
            <img src="/pages/icons8-amazon-48.png" alt="Alumni 2" />
            <h3>Pooja Gupta</h3>
            <p>Data Analyst – Amazon</p>
          </div>

          <div className="alumni-card">
            <img src="/pages/meta.png" alt="Alumni 3" />
            <h3>Aarav Mehta</h3>
            <p>AI Engineer – Meta</p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Alumni;
