import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div
            style={{
                background: "#020617",
                padding: "15px 30px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2
                style={{
                    color: "white",
                }}
            >
                CareerNest AI
            </h2>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                }}
            >
                <Link to="/dashboard" style={linkStyle}>
                    Dashboard
                </Link>

                <Link to="/jobs" style={linkStyle}>
                    Jobs
                </Link>

                <Link to="/profile" style={linkStyle}>
                    Profile
                </Link>

                <Link to="/about" style={linkStyle}>
                    About
                </Link>

                <Link to="/contact" style={linkStyle}>
                    Contact
                </Link>
            </div>
        </div>
    );
}

const linkStyle = {
    color: "white",
    textDecoration: "none",
};

export default Navbar;