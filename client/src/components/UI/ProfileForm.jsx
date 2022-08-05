import React, {useState} from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../styles/profileform.css";

const ProfileForm = ({ user }) => {
  const nav = useNavigate();

  const [imgUrl, setImgUrl] = useState("");
  const [moverName, setMoverName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        imgUrl,
        moverName,
        title,
        price,
        location,
      }),
    })
      .then((r) => r.json())
      .then((profile) => console.log(profile));
    nav("/home");
    window.location.reload();
  }

  return (
    <>
      <Container>
        <Row className="mt-1 mb-1">
          <Col
            lg={9}
            md={6}
            sm={12}
            className="p-3 m-auto shadow-sm rounded-lg"
          >
            <h4 className="shadow-sm title p-3 mb-4 m-auto text-center rounded">
              Create Profile
            </h4>

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  placeholder="Enter vehicle image"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={moverName}
                  onChange={(e) => setMoverName(e.target.value)}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Description"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Charges per hr</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 5,000"
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  autoComplete="off"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
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
};

export default ProfileForm