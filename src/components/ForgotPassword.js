import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

import { useAuth } from "../contexts/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email for further instructions");
    } catch {
      setMessage("");
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div className="content-wrapper">
      <Card>
        <Card.Body>
          <h2 className="signup-title">Reset Password</h2>
          {/* {JSON.stringify(currentUser.uid )} */}
          {error && (
            <Alert className="sign-error" variant="danger">
              {error}
            </Alert>
          )}

          {message && <Alert className="sign-message">{message}</Alert>}

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

            <div style={{ fontSize: "20px" }}>
              <Link to="/login">Log In</Link>
            </div>

            <Button className="submit-button" disabled={loading} type="submit">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
