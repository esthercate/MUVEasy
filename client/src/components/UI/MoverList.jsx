import React, { useState } from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../styles/mover-list.css";

const MoverList = ({ profile }) => {
  const { imgUrl, title, price, moverName, location } = profile;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="mover_item px-5 py-4">
        <div className="imgurl">
          <img src={imgUrl} alt="" className="w-100 imgurl" />
        </div>

        <div className="mover_item-content mt-4">
          <h5 className="section__title text-center">{title}</h5>
          <h6 className="transport__price text-center">
            Ksh {price}00 <span>/ hr</span>
          </h6>

          <div className="mover_item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-user-fill"></i> {moverName}
            </span>

            <span className=" d-flex align-items-center gap-1">
              <i class="ri-map-pin-line"></i> {location}
            </span>
          </div>

          <Button
            variant="primary"
            onClick={handleShow}
            className=" w-50 mover_item-btn mover_btn-transport"
          >
            Contact
          </Button>

          <Button
            variant="primary"
            onClick={handleShow}
            className=" w-50 mover_item-btn mover_btn-details"
          >
            Details
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Request for Transport</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Moving From</Form.Label>
                  <Form.Control type="text" placeholder="ruiru" autoFocus />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Moving To</Form.Label>
                  <Form.Control type="text" placeholder="kilimani" autoFocus />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" placeholder="Date" autoFocus />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Additional Information</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Col>
  );
};

export default MoverList;
