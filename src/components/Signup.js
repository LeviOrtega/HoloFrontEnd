import React, {useRef }from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import './Signup.css'
//import "bootstrap/dist/css/bootstrap.min.css"
export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    return (
        <div className="content-wrapper">
        <Card>
            <Card.Body>
                <h2 className="signup-title">Sign Up</h2>
                
                <Form className="form">
                   <Form.Group className="form-group" id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="char-title" type="email" ref={emailRef} required />
                   </Form.Group>
                   <Form.Group className="form-group" id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="char-title" type="password" ref={passwordRef} required />
                   </Form.Group>
                   <Form.Group className="form-group" id="password-confirm">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control className="char-title" type="password" ref={passwordConfirmationRef} required />
                   </Form.Group>    
                   <Button className="submit-button" type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
        <div classname= "login-suggestion">
            Already have an account? Log In
        </div>
        </div>
    )
}
