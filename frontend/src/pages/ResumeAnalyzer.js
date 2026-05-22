import React, { useState } from "react";

function ResumeAnalyzer() {
  const [result, setResult] = useState("");

  const analyzeResume = () => {
    setResult(
      "✅ Resume Score: 85/100\n" +
      "✅ Skills Detected: React, Node.js, MongoDB\n" +
      "✅ Recommended Role: MERN Stack Developer"
    );
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
        Resume Analyzer 
      </h1>

      <div
        style={{
          background: "#1e293b",
          padding: "30px",
          borderRadius: "10px",
          maxWidth: "600px",
        }}
      >
        <input
          type="file"
          style={{
            marginBottom: "20px",
            color: "white",
          }}
        />

        <button
          onClick={analyzeResume}
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Analyze Resume
        </button>

        {result && (
          <div
            style={{
              marginTop: "30px",
              background: "#0f172a",
              padding: "20px",
              borderRadius: "10px",
              whiteSpace: "pre-line",
            }}
          >
            {result}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumeAnalyzer;