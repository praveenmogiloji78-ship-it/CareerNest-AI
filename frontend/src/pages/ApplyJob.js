import React from "react";
import { useNavigate } from "react-router-dom";

function ApplyJob() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Application Submitted Successfully ");

    navigate("/dashboard");
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
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Apply For Job 
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "500px",
        }}
      >
        <input
          type="text"
          placeholder="Enter Name"
          required
          style={inputStyle}
        />

        <input
          type="email"
          placeholder="Enter Email"
          required
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Skills"
          required
          style={inputStyle}
        />

        <input
          type="file"
          required
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "none",
};

export default ApplyJob;