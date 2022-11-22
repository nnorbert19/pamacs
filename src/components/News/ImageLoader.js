import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function ImageLoader(data) {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClose = () => setShow(false);

  const handleShow = (index) => {
    setShow(true);
    setActiveIndex(index);
  };

  return (
    <>
      {data.data.map((images, index) => (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 mb-3">
          <img
            className="d-block w-100 news-image"
            src={images.url}
            key={index}
            onClick={() => handleShow(index)}
          />
        </div>
      ))}

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mh-100"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <Carousel defaultActiveIndex={activeIndex}>
            {data.data.map((images, index) => (
              <Carousel.Item>
                <img className="w-100" src={images.url} key={index} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}
/*<img className="w-100" src={data.data.url} />*/
export default ImageLoader;
