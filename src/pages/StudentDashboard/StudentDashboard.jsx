import {
  useUser,
  RedirectToSignIn,
  UserButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import "../../styles/studentDashboard.css";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, user } = useUser();

  // ⏳ Wait until Clerk finishes loading
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // 🔒 Block access if not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <main className="student-dashboard-page">
      <section className="dashboard-header">
        <div>
          <h1>Student Dashboard</h1>
          <p>
            Welcome back,{" "}
            <strong>
              {user.firstName || user.username || "Student"}
            </strong>{" "}
            👋
          </p>
        </div>

        {/* Logout */}
        <UserButton afterSignOutUrl="/" />
      </section>

      <section className="dashboard-grid">
        <div
          className="dashboard-card"
          onClick={() => navigate("/student/dashboard/attendance")}
        >
          <h3>Attendance</h3>
          <p>View your attendance records.</p>
        </div>

        <div
          className="dashboard-card"
          onClick={() => navigate("/student/dashboard/courses")}
        >
          <h3>Courses</h3>
          <p>View enrolled subjects.</p>
        </div>
      </section>
    </main>
  );
};

export default StudentDashboard;
