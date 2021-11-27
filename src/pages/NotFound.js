import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
