import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import ProfileForm from "./ProfileForm";
import "../../styles/dashboard.css";
import RequestTable from "./RequestTable";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Dashboard = ({ user, setUser }) => {
  const nav = useNavigate();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        nav("/home");
      }
    });
  }

  return (
    <div className="my-dashboard">
      <Container>
        {/*================== left menu ================ */}
        <Row>
          <Col lg="3" className="left-col p-5">
            <div className="avatar d-flex">
              <div className="user_image"></div>
              <div className="user_details">
                <h6>{user ? user.username : " "}</h6>
                <p>@{user ? user.username : " "}</p>
              </div>
            </div>

            <div className="dashboard_links mt-3 mb-5">
              <div className="links mb-3">
                <Link to="#">
                  {" "}
                  <i class="ri-home-7-line"></i> <span>General</span>
                </Link>
              </div>
              <div className="links mb-3">
                <Link to="" onClick={handleShow}>
                  {" "}
                  <i class="ri-lock-line"></i> <span>Create Profile</span>
                </Link>

                {/*================== profile form modal ================ */}

                <Modal size="lg" show={show} onHide={handleClose}>
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>
                    <div className="profileform hidden">
                      <ProfileForm user={user} />
                    </div>
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
              <div className="links mb-3">
                <Link to="#">
                  {" "}
                  <i class="ri-message-line"></i> <span>Messages</span>
                </Link>
              </div>
              <div className="links mb-3">
                <Link to="#">
                  {" "}
                  <i class="ri-mail-download-line"></i>{" "}
                  <span>Pending Requests</span>
                </Link>
              </div>
              <div className="links mb-3">
                <Link to="#">
                  {" "}
                  <i class="ri-check-double-line"></i>{" "}
                  <span>Completed Jobs</span>
                </Link>
              </div>
            </div>

            <div className="logout">
              <Link to="#" onClick={handleLogout}>
                {" "}
                <i class="ri-logout-box-r-line"></i> <span>Log out</span>
              </Link>
            </div>
          </Col>

          <Col lg="9" className="right-col p-4">
            <div className="dashboard-title mb-4">
              <h2>Welcome {user ? user.username : " "}</h2>
            </div>

            <div>
              <RequestTable />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
