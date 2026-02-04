import { NavLink } from "react-router-dom";
import "../styles/styles.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/jj.png.png" alt="Logo" />
        <span>EDUFLOW</span>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/student/dashboard/courses">Courses</NavLink>
          </li>

          <li>
            <NavLink to="/faculty">Faculty</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <NavLink to="/student/login" className="btn-login">
        Login
      </NavLink>
    </header>
  );
}
