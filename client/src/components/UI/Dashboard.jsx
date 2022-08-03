import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Table from "react-bootstrap/Table";
import ProfileForm from "./ProfileForm";
import "../../styles/dashboard.css";


const Dashboard = ({ user, setUser }) => {
  const nav = useNavigate();
  
  function handleLogout() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        nav("/home")
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
                <h6>{user ? user.username : "Jane Doe"}</h6>
                <p>@{user ? user.username : "Jane Doe"}</p>
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
              <h2>Customer Requests</h2>
            </div>

            <div className="subtitle">
              <h5>Pending Customer Requests</h5>
              <p>
                Manage customer requests by accepting or rejecting offers here.
              </p>
            </div>

            <div className="dashboard-table">
              <Table hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>From - To</th>
                    <th>Reject</th>
                    <th>Accept</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Oct,01,2022</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <i class="ri-close-line"></i>
                    </td>
                    <td>
                      <i class="ri-check-line"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Oct,01,2022</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                      <i class="ri-close-line"></i>
                    </td>
                    <td>
                      <i class="ri-check-line"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Oct,01,2022</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>
                      <i class="ri-close-line"></i>
                    </td>
                    <td>
                      <i class="ri-check-line"></i>
                    </td>
                  </tr>
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
