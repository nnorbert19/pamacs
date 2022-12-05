import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContenful } from "../../ContentfulContext";

function NewsCardComponent(data) {
  const { slugify } = useContenful();
  return (
    <div className="d-flex w-100 h-100 justify-content-center align-item-stretch">
      <Card
        className="card d-flex"
        as={Link}
        to={`/hirek/${slugify(data.data.title)}`}
        style={{ width: "90%" }}
      >
        <Card.Img variant="top" src={data.data.smallImage.url} />
        <Card.Body>
          <Card.Title>
            <h3>{data.data.title}</h3>
            <h6 className="text-muted">{data.data.date?.split("T")[0]}</h6>
          </Card.Title>
          <Card.Text>{data.data.shortText}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NewsCardComponent;
