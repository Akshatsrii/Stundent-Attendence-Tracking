import React from "react";
import "../styles/faculty.css";

const Faculty = () => {
  return (
    <main className="faculty-page">

      {/* Header */}
      <section className="faculty-header">
        <h1>Our Faculty</h1>
        <p>
          Meet our highly experienced and qualified faculty members dedicated to
          shaping the future of students.
        </p>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-grid-section">
        <div className="faculty-grid">

          <div className="faculty-card">
            <img src="/pages/teacher1.jpg" alt="Faculty 1" />
            <h3>Dr. Rohan Kumar</h3>
            <p>Professor — Computer Science</p>
            <span>Experience: 12 Years</span>
          </div>

          <div className="faculty-card">
            <img src="/pages/teacher2.jpg" alt="Faculty 2" />
            <h3>Dr. Meera Sharma</h3>
            <p>Associate Professor — Management</p>
            <span>Experience: 10 Years</span>
          </div>

          <div className="faculty-card">
            <img src="/pages/teacher3.jpg" alt="Faculty 3" />
            <h3>Prof. Anil Verma</h3>
            <p>Assistant Professor — Finance</p>
            <span>Experience: 8 Years</span>
          </div>

          <div className="faculty-card">
            <img src="/pages/teacher4.jpg" alt="Faculty 4" />
            <h3>Dr. Kavita Rao</h3>
            <p>Professor — Artificial Intelligence</p>
            <span>Experience: 15 Years</span>
          </div>

        </div>
      </section>

      {/* Departments */}
      <section className="dept-section">
        <h2>Departments</h2>

        <div className="dept-list">

          <div className="dept-card">
            <h3>Computer Science Department</h3>
            <p>
              AI, ML, Cybersecurity, Cloud Computing, Software Engineering,
              Data Science & more.
            </p>
          </div>

          <div className="dept-card">
            <h3>Management Department</h3>
            <p>
              Business Analytics, Finance, HR, Marketing and Entrepreneurship.
            </p>
          </div>

          <div className="dept-card">
            <h3>Commerce Department</h3>
            <p>
              Accounting, Taxation, Economics, Investment and Corporate Finance.
            </p>
          </div>

          <div className="dept-card">
            <h3>Arts & Humanities</h3>
            <p>
              Psychology, Sociology, English Literature, Journalism and Media Studies.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="faculty-cta-section">
        <h2>Want to Connect with Faculty?</h2>
        <p>Contact department heads for academic support and guidance.</p>

        <a href="/contact.html" className="btn primary-btn">
          Contact Now
        </a>
      </section>

    </main>
  );
};

export default Faculty;
