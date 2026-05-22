import React from "react";

function SavedJobs() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Hyderabad",
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      company: "Microsoft",
      location: "Bangalore",
    },
  ];

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
        Saved Jobs 
      </h1>

      {jobs.map((job) => (
        <div
          key={job.id}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>{job.title}</h2>

          <p> {job.company}</p>

          <p> {job.location}</p>

          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
}

export default SavedJobs;