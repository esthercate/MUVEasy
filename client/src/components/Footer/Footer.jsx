import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/home",
    display: "About us",
  },
  {
    path: "/home",
    display: "Contact us",
  },
  {
    path: "/home",
    display: "Privacy Policy",
  },
  {
    path: "/home",
    display: "Terms & Conditions",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container className="footer_container">
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="footer_logo d-flex gap-3">
              <span className="bottom_logo">
                <i class="ri-truck-line"></i>
              </span>
              <span className="footer_site_name">
                <h5>MUVEasy</h5>
              </span>
            </div>
            <p className="footer_logo_content">
              Anim Lorem pariatur occaecat elit duis cillum reprehenderit
              deserunt dolore laboris voluptate. Sunt aliqua dolor occaecat quis
              velit consectetur consequat labore ut cupidatat ex aliqua
              voluptate.
            </p>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link_title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 quick_link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="4" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer_link-title mb-2">Head Office</h5>
              <p className="office_info">
                2nd Floor, Kenyatta Ave, Nairobi, Kenya
              </p>
              <p className="office_info">Phone: +254 2222 22222</p>
              <p className="office_info">Email: muveasyKenya.co.ke</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <div className="footer_bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}, Developed by
                Catherine. All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
