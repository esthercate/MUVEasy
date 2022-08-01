import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/login.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        role,
      }),
    })
    .then((r) => r.json())
    .then((user) => console.log(user))
  }

  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h1 className="shadow-sm title p-3 mb-5 m-auto text-center rounded">
              Register
            </h1>

            <Form onSubmit={handleSubmit}>
              <Form.Select
                aria-label="Default select example"
                value={role}
                className="mb-4"
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Role</option>
                <option value="user">
                  User - Looking for transport services
                </option>
                <option value="mover">Transport Service Provider</option>
              </Form.Select>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </Form.Group>

              <Button variant="btn-block" type="submit" className="px-4">
                Submit
              </Button>
            </Form>
            <h6 className="mt-4 p-2 text-center text-secondary ">
              Already registered? Login here.
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
