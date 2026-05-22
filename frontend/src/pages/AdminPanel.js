import React from "react";

function AdminPanel() {
  const users = [
    {
      id: 1,
      name: "Praveen",
      email: "praveen@gmail.com",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
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
        Admin Panel 
      </h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete User
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;