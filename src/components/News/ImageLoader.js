import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function ImageLoader(data) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mb-3">
        <img
          className="d-block w-100 news-image"
          src={data.data.url}
          onClick={handleShow}
        />
      </div>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mh-100"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <img className="w-100" src={data.data.url} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ImageLoader;
