import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function Navbar() {
  const { logout, currentUser } = useAuth();

  

  async function handleLogOut() {
    await logout();
  }

  return (
    <nav className="navbar">
      
      <div className="navbar-container">

        <Link
          className="link site-title"
          to="/"
          style={{ textDecoration: "none" }}
        >
          Holocron Resume
        </Link>
        <Link
          className="link"
          to="/character-create"
          style={{ textDecoration: "none" }}
        >
          Character Create
        </Link>
        <Link
          className="link"
          to="/my-creations"
          style={{ textDecoration: "none" }}
        >
          Creations
        </Link>
        <Link className="link" to="/about" style={{ textDecoration: "none" }}>
          About
        </Link>
      </div>
      {currentUser ? (
        <button className="log-button" onClick={() => handleLogOut()}>
          Log Out
        </button>
      ) : (
        <Link className="log-button" to="/login">
          Log In
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
