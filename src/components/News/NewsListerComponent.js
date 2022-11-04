import React from "react";
import Button from "react-bootstrap/Button";

function NewsListerComponent(data) {
  console.log();
  return (
    <>
      <div className=" col-lg-3   col-md-4 col-sm-6">
        <div className="mb-4">
          <h3 className="text-wrap">{data.news.title}</h3>
          <h6 className="text-muted">{data.news.date}</h6>
          <img
            className="w-100 rounded"
            src={data.news.smallImage.fields.file.url}
            alt={data.news.smallImage.fields.file.description}
          />
          <p>{data.news.shortText}</p>
          <div className="d-flex justify-content-center">
            <Button className="justify-content-center d-flex" variant="primary">
              Hír megtekintése
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsListerComponent;
