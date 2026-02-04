import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="homepage">

      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Our University</h1>
          <p>Empowering students with knowledge and innovation.</p>
          <button className="explore-btn">Explore Programs</button>
        </div>
      </header>

      <h1 className="section-title">University Portals</h1>

      <div className="portal-grid">

        <div className="portal-card">
          <h2>Student Portal</h2>
         <p>Access courses, grades, attendance and activities.</p>
<Link to="/student/login">
  <button className="yellow-btn">Login</button>
</Link>
        </div>  

        <div className="portal-card">
          <h2>Faculty Portal</h2>
          <p>Manage courses, attendance and grading.</p>
          <Link to="/student/login">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Library Portal</h2>
          <p>Search books, research papers and resources.</p>
          <Link to="/library">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Placement & Career Portal</h2>
          <p>Explore internships and career opportunities.</p>
          <Link to="/mer">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Administration Portal</h2>
          <p>Manage admissions and student records.</p>
          <Link to="/admission-portal">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Alumni Portal</h2>
          <p>Connect with alumni and mentorship programs.</p>
          <Link to="/alumni">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Health & Wellness Portal</h2>
          <p>Medical appointments and wellness support.</p>
          <Link to="/contact">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        <div className="portal-card">
          <h2>Hostel & Accommodation Portal</h2>
          <p>Hostel rooms, maintenance and meals.</p>
          <Link to="/ok">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
