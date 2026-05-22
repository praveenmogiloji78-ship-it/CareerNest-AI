import React from "react";

function Notifications() {
  const notifications = [
    "Google shortlisted your profile ",
    "Microsoft posted a new MERN job ",
    "Your application was submitted successfully ",
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
        Notifications 
      </h1>

      {notifications.map((note, index) => (
        <div
          key={index}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <p>{note}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;