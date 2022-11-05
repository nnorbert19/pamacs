import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function NewsCardComponent(data) {
  return (
    <div className="d-flex w-100 h-100 justify-content-center">
      <Card className="card d-flex" style={{ width: "90%" }}>
        <Card.Img variant="top" src={data.data.smallImage.url} />
        <Card.Body>
          <Card.Title>
            <h3>{data.data.title}</h3>
            <h6 className="text-muted">{data.data.date}</h6>
          </Card.Title>
          <Card.Text>{data.data.shortText}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center align-self-end mb-auto">
          <Button variant="primary">Go somewhere</Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default NewsCardComponent;
