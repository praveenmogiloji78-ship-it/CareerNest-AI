import React from "react";

function Profile() {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        My Profile 
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <h2>Praveen</h2>

        <p style={{ marginTop: "15px" }}>
           praveen@gmail.com
        </p>

        <p style={{ marginTop: "15px" }}>
           MERN Stack Developer
        </p>

        <p style={{ marginTop: "15px" }}>
           Hyderabad
        </p>

        <p style={{ marginTop: "15px" }}>
           B.Tech Graduate
        </p>

        <button
          style={{
            marginTop: "25px",
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;