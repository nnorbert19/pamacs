import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent(props) {
  console.log(props.data.image);
  return (
    <>
      <Carousel className="d-flex w-100">
        {props.data.map((data, index) => (
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100"
              src={data.image.fields.file.url}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
} /*<img
                className="d-block w-100"
                src={data.image.fields.file.url}
                alt="First slide"
              />*/

export default CarouselComponent;
