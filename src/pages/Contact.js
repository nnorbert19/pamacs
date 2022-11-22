import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import image from "../images/a.jpg";
import paw from "../images/dog-paw.svg";

function Contact() {
  return (
    <>
      <div className="d-flex justify-content-center w-100 my-4">
        <div className="divider">
          <span />
          <h1>Kapcsolat</h1>
          <span />
        </div>
      </div>
      <div className="container">
        <div className="row align-self-center mb-5">
          <div className="col-lg-5 col-md-10">
            <h3>Czinege Boglárka</h3>
            <p className="ps-3">
              <img src={paw} style={{ width: "1rem" }} alt="paw-placeholder" />{" "}
              5000 - Szolnok
            </p>
            <p className="ps-3">
              <img src={paw} style={{ width: "1rem" }} alt="paw-placeholder" />{" "}
              telefon
            </p>
            <p className="ps-3 mb-4">
              <img src={paw} style={{ width: "1rem" }} alt="paw-placeholder" />{" "}
              email
            </p>
            <div className="">
              <div>
                <h3>Írjon nekünk!</h3>
                <ContactForm />
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 align-items-center align-self-center order-first mb-4">
            <img className="w-100" src={image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
