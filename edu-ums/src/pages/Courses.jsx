import React from "react";
import "../styles/courses.css";
const Courses = () => {
  return (
    <main className="courses-page">

      {/* Header Section */}
      <section className="courses-header">
        <h1>Our Courses</h1>
        <p>
          Explore a wide range of professional, technical, and academic courses 
          designed to prepare students for real-world success.
        </p>
      </section>

      {/* Course Categories Section */}
      <section className="course-category-section">
        <h2>Popular Categories</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="/pages/cp.jpg" alt="Computer Science" />
            <h3>Computer Science</h3>
            <p>
              Learn programming, data structures, databases, AI, ML, and more with 
              a strong technical foundation.
            </p>
            <a href="#cs" className="btn primary-btn">View Courses</a>
          </div>

          <div className="category-card">
            <img src="/pages/marketing.jpg" alt="Marketing" />
            <h3>Marketing</h3>
            <p>
              Digital marketing, branding, consumer behavior and advertising 
              concepts to build your business skills.
            </p>
            <a href="#marketing" className="btn primary-btn">View Courses</a>
          </div>

          <div className="category-card">
            <img src="/pages/finance.jpeg" alt="Finance" />
            <h3>Finance</h3>
            <p>
              Gain knowledge in banking, investments, taxation, accounting, and 
              financial planning.
            </p>
            <a href="#finance" className="btn primary-btn">View Courses</a>
          </div>
        </div>
      </section>

      {/* Detailed Course List */}
      <section id="cs" className="course-list-section">
        <h2>Computer Science Courses</h2>

        <div className="course-list">
          <div className="course-card">
            <h3>B.Tech in Computer Science</h3>
            <p>
              A 4-year undergraduate program covering programming, networks, OS,
              databases, and AI.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>

          <div className="course-card">
            <h3>BCA (Bachelor of Computer Applications)</h3>
            <p>
              Learn software development, cloud computing, OOP, and modern technologies.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>

          <div className="course-card">
            <h3>MCA (Master of Computer Applications)</h3>
            <p>
              Advanced programming, cybersecurity, AI/ML, and full-stack development.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Marketing Courses */}
      <section id="marketing" className="course-list-section">
        <h2>Marketing Courses</h2>

        <div className="course-list">
          <div className="course-card">
            <h3>BBA in Marketing</h3>
            <p>
              Introduction to business management, marketing strategies, and digital branding.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>

          <div className="course-card">
            <h3>MBA in Marketing</h3>
            <p>
              Leadership-based program focusing on advanced marketing and business analytics.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Finance Courses */}
      <section id="finance" className="course-list-section">
        <h2>Finance Courses</h2>

        <div className="course-list">
          <div className="course-card">
            <h3>B.Com (Finance)</h3>
            <p>
              Concepts of accounting, taxation, investment banking, and portfolio analysis.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>

          <div className="course-card">
            <h3>M.Com (Finance)</h3>
            <p>
              Deep understanding of financial systems, reports, and financial modeling.
            </p>
            <a href="/registration.html" className="btn secondary-btn">
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="courses-cta-section">
        <h2>Ready to Start Your Course?</h2>
        <p>Apply today and join our world-class learning community.</p>

        <a href="/registration.html" className="btn primary-btn">
          Apply Now
        </a>
      </section>

    </main>
  );
};

export default Courses;
