import React from "react";
import { useContenful } from "../../ContentfulContext";
import NewsCardComponent from "./NewsCardComponent";

import Slider from "react-slick";

import "../styles/card.css";
import "../styles/slick.css";
import "../styles/slick-theme.css";

function PreviousBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <h1>
        <i className="bi bi-caret-left-fill" style={{ color: "black" }}></i>
      </h1>
    </div>
  );
}
function NextBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <h1>
        <i className="bi bi-caret-right-fill"></i>
      </h1>
    </div>
  );
}

function News() {
  const { news } = useContenful();
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    row: 0,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <div className="divider">
          <span />
          <h1>Hírek</h1>
          <span />
        </div>
        <Slider {...settings} className="my-2 py-3">
          {news.items.map((data, index) => (
            <NewsCardComponent key={index} data={data} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default News;
