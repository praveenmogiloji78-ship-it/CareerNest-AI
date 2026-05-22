import React from "react";

function Contact() {
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
                Contact Us
            </h1>

            <div
                style={{
                    background: "#1e293b",
                    padding: "30px",
                    borderRadius: "10px",
                    maxWidth: "600px",
                }}
            >
                <p style={{ marginBottom: "20px" }}>
                    Email: support@careernestai.com
                </p>

                <p style={{ marginBottom: "20px" }}>
                    Phone: +91 9876543210
                </p>

                <p style={{ marginBottom: "20px" }}>
                    Location: Hyderabad, India
                </p>

                <textarea
                    placeholder="Enter your message..."
                    rows="5"
                    style={{
                        width: "100%",
                        padding: "12px",
                        borderRadius: "5px",
                        border: "none",
                        marginBottom: "20px",
                    }}
                />

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
                    Send Message
                </button>
            </div>
        </div>
    );
}

export default Contact;