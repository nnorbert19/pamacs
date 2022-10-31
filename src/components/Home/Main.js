import React from "react";
import Hero from "./Hero";
import News from "./News";

function Main() {
  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <Hero />
        <hr className="w-75 "></hr>
        <News />
      </div>
    </>
  );
}

export default Main;
