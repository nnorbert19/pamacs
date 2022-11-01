import React from "react";
//import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import img_a from "../../images/a.jpg";
import img_b from "../../images/b.jpg";
import img_c from "../../images/c.jpg";

function CarouselComponent() {
  return (
    <>
      <div className="d-flex">
        <Carousel className="d-flex ">
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img_a} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img_b} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img className="d-block w-100" src={img_c} alt="Thir slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselComponent;
