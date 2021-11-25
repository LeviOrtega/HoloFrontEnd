import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";
//import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../contexts/AuthContext";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/character-create");
    } catch {
      setError("Failed to log into account");
    }
    setLoading(false);
  }

  return (
    <div className="content-wrapper">
      <Card>
        <Card.Body>
          <h2 className="signup-title">Log In</h2>
          {/* {JSON.stringify(currentUser.uid )} */}

          {error && (
            <Alert className="sign-error" variant="danger">
              {error}
            </Alert>
          )}

          <Form className="form" onSubmit={handleSubmit}>
            <Form.Group className="form-group" id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="char-title"
                type="email"
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className="form-group" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="char-title"
                type="password"
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Button className="submit-button" disabled={loading} type="submit">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="login-suggestion">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
