import { NavLink } from "react-router-dom";
import "../styles/styles.css";  // FORCE IMPORT CSS HERE

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/jj.png.png" alt="Logo" />
        <span>EDUFLOW</span>
      </div>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about.html">About</NavLink></li>
          <li><NavLink to="/course.html">Courses</NavLink></li>
          <li><NavLink to="/factuality.html">Faculty</NavLink></li>
          <li><NavLink to="/contact.html">Contact</NavLink></li>
        </ul>
      </nav>

      <NavLink to="/studentlogin.html" className="btn-login">Login</NavLink>
    </header>
  );
}
