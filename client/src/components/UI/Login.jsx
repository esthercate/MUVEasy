import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

const Login = ({ onLogin }) => {
  const nav = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
          nav("/mydashboard");
          window.location.reload();
        } else {
          alert("Incorrect Login Details");
        }
      })
     
  }

  return (
    <>
      <Container>
        <Row className="mt-5 mb-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h1 className="shadow-sm title p-3 mb-5 m-auto text-center rounded">
              Login
            </h1>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) =>
                    setUsername(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1).toLowerCase()
                    )
                  }
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

              <Button variant="btn-block" type="submit" className="px-4">
                Login
              </Button>
            </Form>
            <h6 className="mt-4 p-2 mb-5 text-center text-secondary ">
              Don't have an account yet? Register{" "}
              <span>
                <Link to="/register">here</Link>
              </span>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
