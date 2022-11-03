import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Slider from "react-slick";

import "../styles/card.css";
import "../styles/slick.css";
import "../styles/slick-theme.css";

function PreviousBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <h1>
        <i class="bi bi-caret-left-fill" style={{ color: "black" }}></i>
      </h1>
    </div>
  );
}
function NextBtn(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <h1>
        <i class="bi bi-caret-right-fill"></i>
      </h1>
    </div>
  );
}

function News() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100 p-4">
        <div className="divider">
          <span />
          <h1>Hírek</h1>
          <span />
        </div>
        <Slider {...settings} className="p-3">
          <div className="d-flex justify-content-center align-items-center">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </div>{" "}
          <div className="d-flex justify-content-center align-items-center">
            <Card className=" text-center">
              <Card.Img
                variant="top"
                src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Card className=" text-center">
              <Card.Img
                variant="top"
                src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <Card className=" text-center">
              <Card.Img
                variant="top"
                src="https://1.bp.blogspot.com/-Bii3S69BdjQ/VtdOpIi4aoI/AAAAAAAABlk/F0z23Yr59f0/s640/cover.jpg"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary">Go somewhere</Button>
              </Card.Footer>
            </Card>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default News;
