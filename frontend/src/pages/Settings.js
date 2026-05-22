import React from "react";

function Settings() {
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
        Settings 
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "600px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label>Dark Mode </label>

          <br />

          <input type="checkbox" />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Email Notifications</label>

          <br />

          <input type="checkbox" />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label>Job Alerts</label>

          <br />

          <input type="checkbox" />
        </div>

        <button
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;