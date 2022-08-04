import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import ProfileForm from "./ProfileForm";
import "../../styles/dashboard.css";

const Dashboard = ({ user, setUser }) => {
  const [myRequests, setMyRequests] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    // fetch user profiles
    fetch("/requests")
      .then((res) => res.json())
      .then((req) => setMyRequests(req));
  }, []);

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
                <Link to="">
                  {" "}
                  <i class="ri-lock-line"></i> <span>Create Profile</span>
                </Link>
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
              <h2>Welcome {user ? user.username : "Jane Doe"}</h2>
            </div>

            <div className="subtitle mb-4">
              <h6>Manage your requests for transport services</h6>
            </div>

            <div className="dashboard-table">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Moving Date</th>
                    <th>Moving From</th>
                    <th>Moving To</th>
                    <th>Additional Info</th>
                    <th>Delete</th>
                  </tr>
                </thead>

                <tbody>
                  {myRequests.map((request) => (
                    <tr key={myRequests.id}>
                      <td>1</td>
                      <td>{request.moving_date}</td>
                      <td>{request.moving_from}</td>
                      <td>{request.moving_to}</td>
                      <td>{request.additional_info}</td>
                      <td>
                        <i class="ri-close-line"></i>
                        <i class="ri-check-double-line"></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="profileform hidden">
              <ProfileForm user={user} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
