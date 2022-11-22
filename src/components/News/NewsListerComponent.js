import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContenful } from "../../ContentfulContext";

function NewsListerComponent(data) {
  const { slugify } = useContenful();
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 align-item-stretch">
        <div className="mb-4 w-100 align-item-stretch">
          <h3 className="text-wrap">{data.news.title}</h3>
          <h6 className="text-muted">{data.news.date.split("T")[0]}</h6>
          <img
            className="w-100 rounded"
            src={data.news.smallImage.url}
            alt={data.news.smallImage.description}
            as={Link}
            to={`/hirek/${slugify(data.news.title)}`}
          />
          <p>{data.news.shortText}</p>
          <div className="d-flex justify-content-center w-100 align-item-end">
            <Button
              className="justify-content-center align-item-end d-flex"
              as={Link}
              to={`/hirek/${slugify(data.news.title)}`}
              variant="primary"
            >
              Hír megtekintése
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsListerComponent;
