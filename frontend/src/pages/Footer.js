import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        background: "#020617",
        color: "white",
        padding: "20px",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h2>CareerNest AI </h2>

          <p>AI Powered Job Portal</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <p>
            <Link
              to="/dashboard"
              style={linkStyle}
            >
              Dashboard
            </Link>
          </p>

          <p>
            <Link
              to="/jobs"
              style={linkStyle}
            >
              Jobs
            </Link>
          </p>

          <p>
            <Link
              to="/about"
              style={linkStyle}
            >
              About
            </Link>
          </p>

          <p>
            <Link
              to="/contact"
              style={linkStyle}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "20px 0",
          borderColor: "#334155",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#94a3b8",
        }}
      >
        © 2026 CareerNest AI. All rights reserved.
      </p>
    </div>
  );
}

const linkStyle = {
  color: "#94a3b8",
  textDecoration: "none",
};

export default Footer;