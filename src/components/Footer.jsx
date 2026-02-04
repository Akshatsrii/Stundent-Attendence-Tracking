import React from "react";
import "../styles/footer.css"; // <-- Correct path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>About University</h3>
          <p>
            Our university is committed to excellence in education, 
            research, and innovation. Providing students with the best 
            academic environment.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Admissions</li>
            <li>Academics</li>
            <li>Research</li>
            <li>Library</li>
            <li>Career Services</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>University Portals</h3>
          <ul>
            <li>Student Portal</li>
            <li>Faculty Portal</li>
            <li>Alumni Portal</li>
            <li>Health & Wellness</li>
            <li>Hostel & Accommodation</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>📍 123 University Road, City, Country</p>
          <p>📞 +123-456-7890</p>
          <p>📧 contact@university.edu</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 University Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
