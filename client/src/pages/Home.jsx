import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindMoverForm from "../components/UI/FindMoverForm";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ===================== hero section ====================== */}
      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_movers-left">
                  <h2>Find a mover here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindMoverForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
