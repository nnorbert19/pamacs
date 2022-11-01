import React from "react";
import "./Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

function News() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <div classNameName="">
        <h2> Multiple items </h2>
        <Slider {...settings} className="">
          <div>
            <h1>1</h1>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default News;
