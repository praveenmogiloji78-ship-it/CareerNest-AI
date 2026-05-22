import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const cardStyle = {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div>
          <h1>CareerNest AI </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            AI Powered Job Portal
          </p>
        </div>

        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 20px",
            background: "#ef4444",
            border: "none",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          onClick={() => navigate("/jobs")}
          style={cardStyle}
        >
          <h2> Jobs</h2>
          <p>Browse available jobs</p>
        </div>

        <div
          onClick={() => navigate("/apply")}
          style={cardStyle}
        >
          <h2> Apply Job</h2>
          <p>Apply for companies</p>
        </div>

        <div
          onClick={() => navigate("/savedjobs")}
          style={cardStyle}
        >
          <h2> Saved Jobs</h2>
          <p>Manage saved jobs</p>
        </div>

        <div
          onClick={() => navigate("/profile")}
          style={cardStyle}
        >
          <h2> Profile</h2>
          <p>View profile details</p>
        </div>

        <div
          onClick={() => navigate("/notifications")}
          style={cardStyle}
        >
          <h2> Notifications</h2>
          <p>Check latest updates</p>
        </div>

        <div
          onClick={() => navigate("/resume-analyzer")}
          style={cardStyle}
        >
          <h2> Resume Analyzer</h2>
          <p>Analyze your resume using AI</p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        <p>CareerNest AI 2026</p>
      </div>
    </div>
  );
}

export default Dashboard;