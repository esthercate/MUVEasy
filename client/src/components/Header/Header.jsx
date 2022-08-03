import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import '../../styles/header.css'

const Header = ({user}) => {
  return (
    <header className="header">
      <div className="header_top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header_top_left">
                <span className="logo">
                  <i class="ri-truck-line"></i>
                </span>
                <span className="site_name">MUVEasy</span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header_top_right d-flex align-items-center justify-content-end gap-3">
                <Link to="/home" className="d-flex align-items-center gap-1">
                  Home
                </Link>
                {user ? (
                  <Link
                    to="/mydashboard"
                    className="d-flex align-items-center gap-1"
                  >
                    {user.username}
                  </Link>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="d-flex align-items-center gap-1"
                    >
                      Login
                    </Link>
                    <Link
                      to="/Register"
                      className="d-flex align-items-center gap-1"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
