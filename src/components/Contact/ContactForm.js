import React from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  emailjs.init("ldBfeHIx0I1k8M-GM");
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_md4by0i",
        "template_5y20e0a",
        e.target,
        "ldBfeHIx0I1k8M-GM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <>
      <Form onSubmit={handleSubmit} className="m-3">
        <Form.Group className="mb-3">
          <Form.Label>Név* </Form.Label>
          <Form.Control type="text" name="from_name" id="from_name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>E-mail cím*</Form.Label>
          <Form.Control
            type="email"
            name="from_email"
            id="from_email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Üzenet</Form.Label>
          <Form.Control type="textarea" name="message" id="message" />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center align-items-center">
          <Button type="submit" value="Send">
            Küldés
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default ContactForm;
