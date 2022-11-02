import React from "react";
import Carousel from "./CarouselComponent";
import Introduction from "./Introduction";

function Hero() {
  return (
    <>
      <div className="w-100 container">
        <div className="row w-100 m-0 p-4">
          <div className="col-12 col-md-8 p-0 m-0">
            <Carousel />
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <h1 className="xl d-flex text-center">Üdvözlünk a weboldalunkon</h1>
          </div>
        </div>
      </div>
      <hr className="w-75" />
      <Introduction />
    </>
  );
}

export default Hero;
