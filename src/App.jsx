import { Routes, Route, useLocation } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Faculty from "./pages/Faculty";
import Contact from "./pages/Contact";
import Library from "./pages/Library";
import Transport from "./pages/Transport";
import StudentLogin from "./pages/StudentLogin";
import Register from "./pages/Register";
import Registration from "./pages/Registration";
import GG from "./pages/GG";
import Mer from "./pages/Mer";
import Ok from "./pages/Ok";
import Alumni from "./pages/Alumni";

import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import Attendance from "./pages/StudentDashboard/Attendance";
import Courses from "./pages/StudentDashboard/Courses";

function App() {
  const location = useLocation();

  // hide navbar/footer on login/register pages
  const hideLayout =
    location.pathname.startsWith("/student/login") ||
    location.pathname.startsWith("/student/register");

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/library" element={<Library />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/alumni" element={<Alumni />} />

        {/* STUDENT AUTH */}
        <Route
          path="/student/login"
          element={
            <>
              <SignedOut>
                <StudentLogin />
              </SignedOut>
              <SignedIn>
                <StudentDashboard />
              </SignedIn>
            </>
          }
        />

        <Route path="/student/register" element={<Register />} />
        <Route path="/student/registration" element={<Registration />} />

        {/* STUDENT DASHBOARD (PROTECTED) */}
        <Route
          path="/student/dashboard"
          element={
            <>
              <SignedIn>
                <StudentDashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/student/dashboard/attendance"
          element={
            <>
              <SignedIn>
                <Attendance />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        <Route
          path="/student/dashboard/courses"
          element={
            <>
              <SignedIn>
                <Courses />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* EXTRA PAGES */}
        <Route path="/gg" element={<GG />} />
        <Route path="/mer" element={<Mer />} />
        <Route path="/ok" element={<Ok />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
