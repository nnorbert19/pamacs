import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(data) {
  return (
    <>
      <Carousel className="d-flex w-100">
        {data.data.items.map((data, index) => (
          <Carousel.Item interval={5000} key={index}>
            <img
              className="d-block w-100"
              src={data.image.url}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
export default CarouselComponent;
