import React from "react";
import img from "../../images/d.jpg";

function Introduction() {
  return (
    <>
      <div className="Introduction d-flex justify-content-center flex-column align-items-center p-2 m-3">
        <h1>Bemutatkozás</h1>
        <div className="w-75 d-flex align-items-center justify-content-center flex-row">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            imperdiet massa nec ligula congue, in commodo augue maximus.
            Suspendisse in purus nec tellus convallis ultrices. Maecenas est
            nulla, luctus vitae elit ac, efficitur maximus quam. In iaculis
            mauris congue metus condimentum, sed porttitor ante interdum.
            Phasellus id eros et enim dapibus volutpat vel eget lacus. Integer
            faucibus finibus ante et cursus. Vivamus vulputate scelerisque orci.
          </p>
          <img src={img} className="w-25"></img>
        </div>
      </div>
    </>
  );
}

export default Introduction;
