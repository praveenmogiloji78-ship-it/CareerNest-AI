import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function PostJob() {

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
  });

  // Handle Change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // Handle Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://careernest-ai-1.onrender.com/api/jobs/add",
        formData
      );

      alert("Job Posted Successfully ");

      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed to Post Job ");

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
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

          <h1
            style={{
              fontSize: "45px",
              color: "#f59e0b",
            }}
          >
            Post New Job
          </h1>

          <p style={{ color: "#cbd5e1" }}>
            Create and publish new job opportunities
          </p>

        </div>

        <Link to="/dashboard">

          <button
            style={{
              padding: "10px 20px",
              background: "#8b5cf6",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Dashboard
          </button>

        </Link>

      </div>

      {/* Form Card */}
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
        }}
      >

        <form onSubmit={handleSubmit}>

          {/* Job Title */}
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              background: "#334155",
              color: "white",
              fontSize: "16px",
            }}
          />

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              background: "#334155",
              color: "white",
              fontSize: "16px",
            }}
          />

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              background: "#334155",
              color: "white",
              fontSize: "16px",
            }}
          />

          {/* Salary */}
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "none",
              background: "#334155",
              color: "white",
              fontSize: "16px",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              background: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Post Job
          </button>

        </form>

      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
        }}
      >

        <h2>CareerNest AI </h2>

        <p>AI Powered Job Portal using MERN Stack</p>

        <p style={{ color: "#94a3b8" }}>
          Developed by Praveen 2026
        </p>

      </div>

    </div>

  );
}

export default PostJob;