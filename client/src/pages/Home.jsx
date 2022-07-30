import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import FindMoverForm from "../components/UI/FindMoverForm";
import moverData from '../assets/data/MoverData'
import MoverList from "../components/UI/MoverList";

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

      {/* ================ movers list =============== */}
      <section>
        <Container>
          <Row>
            {moverData.slice(0, 6).map((item) => (
              <MoverList item={item} key={item.id} />
            ))}
          </Row>
          <div className="find-more p-4 text-center">
            <button className="btn">
              Find More
              <span>
                <i class="ri-arrow-right-s-line"></i>
              </span>
            </button>
          </div>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
