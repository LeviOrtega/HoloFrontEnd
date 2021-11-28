import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        textAlign:"center",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>404 - Page Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
