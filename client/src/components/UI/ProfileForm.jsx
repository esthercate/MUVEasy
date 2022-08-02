import React, {useState} from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../../styles/profileform.css";

const ProfileForm = () => {

  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
  }


  return (
    <>
      <Container>
        <Row className="mt-5 mb-5">
          <Col
            lg={9}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <h4 className="shadow-sm title p-3 mb-5 m-auto text-center rounded">
              Create Profile
            </h4>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter vehicle image"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Charges per hr</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. 5,000"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your location"
                />
              </Form.Group>

              <Button variant="btn-block" type="submit" className="px-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileForm