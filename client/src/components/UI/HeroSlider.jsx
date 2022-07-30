import React from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import '../../styles/hero-slider.css'

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 3000,
    autoplaySpeed: 4000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt-0">
        <Container>
          <div className="slider_content">
            <h1 className="mb-3">Relocation made easy!</h1>
            <h5 className="mb-4">
              Fast, easy and affordable way to relocate! It doesn’t need to be a
              hassle to make a moving plan. In just a few minutes, choose a
              mover here and request for relocation services!
            </h5>
            <button className="btn get_started_btn mt-4 py-3 px-5">
              Get Started{" "}
              <span className="btn_i">
                <i class="ri-arrow-down-s-line"></i>
              </span>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt-0">
        <Container>
          <div className="slider_content">
            <h1 className="mb-3">Relocation made easy!</h1>
            <h5 className="mb-4">
              Fast, easy and affordable way to relocate! It doesn’t need to be a
              hassle to make a moving plan. In just a few minutes, choose a
              mover here and request for relocation services!
            </h5>
            <button className="btn get_started_btn mt-4 py-3 px-5">
              Get Started{" "}
              <span className="btn_i">
                <i class="ri-arrow-down-s-line"></i>
              </span>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt-0">
        <Container>
          <div className="slider_content">
            <h1 className="mb-3">Relocation made easy!</h1>
            <h5 className="mb-4">
              Fast, easy and affordable way to relocate! It doesn’t need to be a
              hassle to make a moving plan. In just a few minutes, choose a
              mover here and request for relocation services!
            </h5>
            <button className="btn get_started_btn mt-4 py-3 px-5">
              Get Started{" "}
              <span className="btn_i">
                <i class="ri-arrow-down-s-line"></i>
              </span>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
