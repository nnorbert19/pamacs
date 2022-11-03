import React from "react";
import img from "../../images/d.jpg";

function Introduction() {
  return (
    <>
      <div className="Introduction d-flex justify-content-center flex-column align-items-center p-2 m-3">
        <div className="divider">
          <span />
          <h1>Bemutatkozás</h1>
          <span />
        </div>

        <div className="w-75 row d-flex align-items-center justify-content-center flex-row p-3 ">
          <p className="p-5 col-12 col-md-8 h-100 d-flex align-items-center justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet massa nec ligula congue, in commodo augue maximus. Vivamus
            vulputate scelerisque orci.
          </p>
          <img
            src={img}
            className="col-12 col-md-4 h-100"
            alt="bemutatkozó kép"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Introduction;
