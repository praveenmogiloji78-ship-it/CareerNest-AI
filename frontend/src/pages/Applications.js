import React from "react";

function Applications() {
  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Developer",
      status: "Pending",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "MERN Stack Developer",
      status: "Selected",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>
        My Applications 
      </h1>

      <div style={{ marginTop: "30px" }}>
        {applications.map((app) => (
          <div
            key={app.id}
            style={{
              background: "#1e293b",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h2>{app.company}</h2>

            <p style={{ marginTop: "10px" }}>
              Role: {app.role}
            </p>

            <p style={{ marginTop: "10px" }}>
              Status: {app.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Applications;