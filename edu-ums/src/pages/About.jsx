import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <main className="about-page">

      {/* Banner Section */}
      <section className="about-banner">
        <h1>About EDUFULOW University</h1>
        <p>
          A premier institution dedicated to excellence in education, research,
          innovation and student success.
        </p>
      </section>

      {/* About Description */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-left">
            <img
              src="/pages/cp.jpg"
              alt="Campus"
              className="about-image"
            />
          </div>

          <div className="about-right">
            <h2>Who We Are</h2>
            <p>
              EDUFULOW University is committed to shaping the future of students
              through world-class education, advanced learning resources, and 
              an inclusive academic environment. With a skilled faculty team,
              modern labs, library facilities and an innovative learning culture,
              we prepare students to meet global challenges.
            </p>

            <p>
              Our mission is to empower individuals with knowledge, skills,
              leadership qualities and a strong sense of responsibility towards
              society.
            </p>

            <a href="/course.html" className="btn primary-btn">
              Explore Courses
            </a>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <h2>Our Vision & Mission</h2>

        <div className="vm-container">
          <div className="vm-card">
            <h3>Vision</h3>
            <p>
              To be a globally recognized institution that excels in education,
              research, creativity, and innovation.
            </p>
          </div>

          <div className="vm-card">
            <h3>Mission</h3>
            <p>
              To develop competent professionals through quality education and
              industry-driven learning that leads to societal growth.
            </p>
          </div>
        </div>
      </section>

      {/* University Stats */}
      <section className="about-stats">
        <div className="stats-grid">
          <div className="stat-box">
            <h2>10k+</h2>
            <p>Students Enrolled</p>
          </div>
          <div className="stat-box">
            <h2>150+</h2>
            <p>Courses Offered</p>
          </div>
          <div className="stat-box">
            <h2>500+</h2>
            <p>Faculty Members</p>
          </div>
          <div className="stat-box">
            <h2>95%</h2>
            <p>Placement Rate</p>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section className="campus-life">
        <h2>Campus Life</h2>
        <p>
          Our vibrant campus is filled with opportunities — clubs, events, 
          workshops, hackathons, seminars, and recreational activities that 
          help students grow personally and professionally.
        </p>

        <div className="campus-gallery">
          <img src="/pages/it.jpg" alt="Campus 1" />
          <img src="/pages/marketing.jpg" alt="Campus 2" />
          <img src="/pages/finance.jpeg" alt="Campus 3" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Want to Join EDUFULOW?</h2>
          <p>Apply now and start your academic journey with excellence.</p>
        </div>

        <div className="cta-actions">
          <a href="/registration.html" className="btn primary-btn">
            Apply Now
          </a>
          <a href="/contact.html" className="btn secondary-btn">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;
