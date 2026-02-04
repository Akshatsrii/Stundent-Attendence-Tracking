import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Attendance from "./pages/Attendance";
import Library from "./pages/Library";
import Transport from "./pages/Transport";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";
import Register from "./pages/Register";
import Registration from "./pages/Registration";
import GG from "./pages/GG";
import Mer from "./pages/Mer";
import Ok from "./pages/Ok";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about.html" element={<About />} />
        <Route path="/course.html" element={<Courses />} />
        <Route path="/factuality.html" element={<Faculty />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/attendence.html" element={<Attendance />} />
        <Route path="/library.html" element={<Library />} />
        <Route path="/transport.html" element={<Transport />} />
        <Route path="/studentlogin.html" element={<StudentLogin />} />
        <Route path="/studentdash.html" element={<StudentDashboard />} />
        <Route path="/register.html" element={<Register />} />
        <Route path="/registration.html" element={<Registration />} />
        <Route path="/gg.html" element={<GG />} />
        <Route path="/mer.html" element={<Mer />} />
        <Route path="/ok.html" element={<Ok />} />
        <Route path="/alumni.html" element={<Alumni />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
