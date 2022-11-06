import React from "react";
import CarouselComponent from "./CarouselComponent";
import Introduction from "./Introduction";
import { useContenful } from "../../ContentfulContext";

function Hero() {
  const { homeCarouselImages } = useContenful();
  return (
    <>
      <div className="w-100 ">
        <div className="row w-100 m-0  mb-4 ">
          <div className="col-12 col-md-8 p-0 m-0">
            <div className="d-flex">
              <CarouselComponent data={homeCarouselImages} />
            </div>
          </div>
          <div className="hero-text col-12 col-md-4 p-0  d-flex bg-dark text-white justify-content-center align-items-center">
            <h1 className="xl d-flex text-center">Üdvözlünk a weboldalunkon</h1>
          </div>
        </div>
      </div>
      <Introduction />
    </>
  );
}

export default Hero;
