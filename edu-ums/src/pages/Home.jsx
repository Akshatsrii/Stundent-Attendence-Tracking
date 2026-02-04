import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">

      {/* ================= HERO SECTION ================= */}
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Our University</h1>
          <p>Empowering students with knowledge and innovation.</p>
          <button className="explore-btn">Explore Programs</button>
        </div>
      </header>

      {/* ================= UNIVERSITY PORTALS ================= */}
      <h1 className="section-title">University Portals</h1>

      <div className="portal-grid">

        {/* Student Portal */}
        <div className="portal-card">
          <h2>Student Portal</h2>
          <p>
            Access courses, assignments, grades, and attendance 
            and other activities.
          </p>
          <Link to="/studentlogin.html">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Faculty Portal */}
        <div className="portal-card">
          <h2>Faculty Portal</h2>
          <p>
            Manage courses, student attendance, and grading system 
            of each student.
          </p>
          <Link to="/factuality.html">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Library Portal */}
        <div className="portal-card">
          <h2>Library Portal</h2>
          <p>
            Search books, access research papers, and borrow 
            resources and explore the books.
          </p>
          <Link to="/library.html">
            <button className="yellow-btn">Login</button>
          </Link>
        </div>

        {/* Placement Portal */}
        <div className="portal-card">
          <h2>Placement &amp; Career Portal</h2>
          <p>Explore internships and career opportunities.</p>
          <Link to="/mer.html">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Administration Portal */}
        <div className="portal-card">
          <h2>Administration Portal</h2>
          <p>Manage student records, admissions and financial details.</p>
          <Link to="/admissionportal.html">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Alumni Portal */}
        <div className="portal-card">
          <h2>Alumni Portal</h2>
          <p>
            Connect with past graduates, mentorship programs 
            and events/workshops.
          </p>
          <Link to="/alumni.html">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Health Portal */}
        <div className="portal-card">
          <h2>Health &amp; Wellness Portal</h2>
          <p>
            Book medical appointments and access mental 
            health resources.
          </p>
          <Link to="/contact.html">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>

        {/* Hostel Portal */}
        <div className="portal-card">
          <h2>Hostel &amp; Accommodation Portal</h2>
          <p>Manage hostel rooms, maintenance and meal plans.</p>
          <Link to="/ok.html">
            <button className="yellow-btn">Click</button>
          </Link>
        </div>
      </div>

      {/* ================= LATEST ANNOUNCEMENTS ================= */}
      <h1 className="section-title">Latest Announcements</h1>

      <div className="announcement-list">
        <div className="announcement-card">
          <h2>Mid-Semester Exam Schedule Released</h2>
          <p>
            The exam schedule for the mid-semester exams is now available.
            Click below to view the details.
          </p>
          <p className="date">March 27, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="announcement-card">
          <h2>Guest Lecture on AI &amp; Machine Learning</h2>
          <p>
            Join us for a guest lecture by industry expert Dr. John Doe on
            March 30, 2025.
          </p>
          <p className="date">March 25, 2025</p>
          <button className="yellow-btn">Register Now</button>
        </div>
      </div>

      {/* ================= LATEST NEWS ================= */}
      <h1 className="section-title">Latest News</h1>

      <div className="news-grid">
        <div className="news-card">
          <img
            src="https://source.unsplash.com/900x400/?ai,lab"
            alt="AI Lab"
          />
          <h2>AI Lab Inauguration</h2>
          <p>
            A new state-of-the-art Artificial Intelligence Lab was inaugurated.
          </p>
          <p className="date">March 25, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="news-card">
          <img
            src="https://source.unsplash.com/900x400/?scholarship,education"
            alt="Scholarship"
          />
          <h2>Scholarship Program for Students</h2>
          <p>
            The university announces a new scholarship program 
            to support students.
          </p>
          <p className="date">March 22, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>

        <div className="news-card">
          <img
            src="https://source.unsplash.com/900x400/?sports,ground"
            alt="Sports Complex"
          />
          <h2>New Sports Complex Opening</h2>
          <p>
            A brand-new sports complex with modern facilities 
            is set to open this summer.
          </p>
          <p className="date">March 18, 2025</p>
          <button className="yellow-btn">Read More</button>
        </div>
      </div>

      {/* ================= UPCOMING EVENTS ================= */}
      <h1 className="section-title">Upcoming Events</h1>

      <div className="calendar-box">
        <div className="calendar-header">
          <span>{`<`}</span>
          <h2>December 2025</h2>
          <span>{`>`}</span>
        </div>

        <table className="calendar">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>30</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
            <tr><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td></tr>
            <tr><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td></tr>
            <tr><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr>
            <tr><td>28</td><td>29</td><td>30</td><td>31</td><td>1</td><td>2</td><td>3</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Home;
