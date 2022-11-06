import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import image from "../images/a.jpg";

function Contact() {
  return (
    <>
      <div>
        <div className="d-flex justify-content-center mx-5">
          <div className="divider">
            <span />
            <h1>Kapcsolat</h1>
            <span />
          </div>
        </div>
      </div>
      <div className="container w-75">
        <div className="row align-self-center">
          <div className="col-lg-5 col-md-10">
            <h3>Czinege Boglárka</h3>
            <p className="ps-3">cím</p>
            <p className="ps-3">telefon</p>
            <p className="ps-3 mb-4">email</p>
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
