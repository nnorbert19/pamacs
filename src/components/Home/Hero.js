import React from "react";
import Carousel from "./CarouselComponent";
import Introduction from "./Introduction";

function Hero() {
  return (
    <>
      <div className="w-100 ">
        <div className="row w-100 m-0 ">
          <div className="col-12 col-md-8 p-0 mb-4 m-0">
            <Carousel />
          </div>
          <div className="col-12 col-md-4 p-0 mb-4 d-flex bg-dark text-white justify-content-center align-items-center">
            <h1 className="xl d-flex text-center">Üdvözlünk a weboldalunkon</h1>
          </div>
        </div>
      </div>
      <Introduction />
    </>
  );
}

export default Hero;
