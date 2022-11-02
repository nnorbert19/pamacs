import React from "react";
import Hero from "../components/Home/Hero.js";
import News from "../components/Home/News.js";

function Main() {
  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <Hero />
        <News />
      </div>
    </>
  );
}

export default Main;
