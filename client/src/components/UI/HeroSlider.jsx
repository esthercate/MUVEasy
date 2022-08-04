import React from "react";
import Slider from "react-slick";
import {Link} from "react-router-dom"
import { Container, Row, Col } from "reactstrap";
import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 6000,
    autoplaySpeed: 7000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="hero-container">
      <Container>
        <Row>
          <Col lg="6">
            <div className="slider_content">
              <h1 className="mb-3">
                Relocation made easy<span className="app">!</span>
              </h1>
              <h5 className="mb-4">
                Fast, easy and affordable way to relocate! It doesn’t need to be
                a hassle to make a moving plan. In just a few minutes, choose a
                mover here and request for relocation services!
              </h5>
              <button className="btn get_started_btn mt-4 py-3 px-5">
                <Link to="/register">Get Started</Link>
              </button>
            </div>
          </Col>

          <Col lg="6">
            <Slider {...settings} className="hero_slider">
              <div className="slider_item slider_item-01 mt-0"></div>

              <div className="slider_item slider_item-02 mt-0"></div>

              <div className="slider_item slider_item-03 mt-0"></div>

              <div className="slider_item slider_item-04 mt-0"></div>

              <div className="slider_item slider_item-05 mt-0"></div>

              <div className="slider_item slider_item-06 mt-0"></div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSlider;
