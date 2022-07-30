import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ===================== hero section ====================== */}
      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container></Container>
        </div>
      </section>
    </Helmet>
  );
};

export default Home;
