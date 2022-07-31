import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/login.css";

const Register = () => {
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

            <Form>
              <Form.Select aria-label="Default select example" className="mb-4">
                <option>Role</option>
                <option value="1">User - Looking for transport services</option>
                <option value="2">Transport Service Provider</option>
              </Form.Select>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
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
