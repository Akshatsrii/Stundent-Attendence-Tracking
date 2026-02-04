import React from "react";
import "../styles/mer.css";

const Mer = () => {
  return (
    <main className="mer-page">

      <section className="mer-header">
        <h1>Merit List</h1>
        <p>Download the latest academic merit lists.</p>
      </section>

      <section className="mer-list-section">

        <div className="mer-card">
          <h3>B.Tech CSE Merit List</h3>
          <p>Updated: 10 Dec 2025</p>
          <button className="btn primary-btn">Download PDF</button>
        </div>

        <div className="mer-card">
          <h3>BBA Merit List</h3>
          <p>Updated: 10 Dec 2025</p>
          <button className="btn primary-btn">Download PDF</button>
        </div>

        <div className="mer-card">
          <h3>B.Com Merit List</h3>
          <p>Updated: 10 Dec 2025</p>
          <button className="btn primary-btn">Download PDF</button>
        </div>

      </section>

    </main>
  );
};

export default Mer;
