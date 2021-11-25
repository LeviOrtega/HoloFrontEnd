import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
//import "bootstrap/dist/css/bootstrap.min.css"
import { useAuth } from "../contexts/AuthContext";
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords did not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/character-create");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div className="content-wrapper">
      <Card>
        <Card.Body>
          <h2 className="signup-title">Sign Up</h2>
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
            <Form.Group className="form-group" id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className="char-title"
                type="password"
                ref={passwordConfirmationRef}
                required
              />
            </Form.Group>
            <Button className="submit-button" disabled={loading} type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="login-suggestion">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}
