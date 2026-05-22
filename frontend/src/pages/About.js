import React from "react";

function About() {
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
        About CareerNest AI
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          lineHeight: "1.8",
        }}
      >
        <p>
          CareerNest AI is an AI Powered Job Portal
          developed using MERN Stack.
        </p>

        <p>
          This platform helps users search jobs,
          apply for companies, analyze resumes,
          and manage applications easily.
        </p>

        <p>
          Technologies Used:
        </p>

        <ul>
          <li>React JS</li>
          <li>Node JS</li>
          <li>Express JS</li>
          <li>MongoDB</li>
        </ul>

        <p>
          Developed by Praveen
        </p>
      </div>
    </div>
  );
}

export default About;