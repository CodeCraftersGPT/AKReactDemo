// create a component named Register in akdemo/src/Components/Register.js include username, email, date of birth and phone numebr
// make it is vertical form and use bootstrap classes to make it look beautiful. include icons next to controls like email icon next email
// phone icon next to phone number etc.
// use bootstrap icons

import React from 'react';
import { Form, Button,Container } from 'react-bootstrap';

// define register component

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" />
                    <Form.Text className="text-muted">
                        We'll never share your username with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter date of birth" />
                    <Form.Text className="text-muted">
                        We'll never share your date of birth with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter phone number" />
                    <Form.Text className="text-muted">
                        We'll never share your phone number with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            </Container>
        </div>
    );
}

export default Register;    