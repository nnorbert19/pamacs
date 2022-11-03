import React from "react";

function NewsCardComponent(data) {
  console.log();
  return (
    <>
      <div className=" col-md-4 col-sm-6">
        <div className="mb-4">
          <h1>{data.news.title}</h1>
          <h6 className="text-muted">{data.news.date}</h6>
          <img
            className="w-100 rounded"
            src={data.news.smallImage.fields.file.url}
            alt={data.news.smallImage.fields.file.description}
          />
          <p>{data.news.shortText}</p>
        </div>
      </div>
    </>
  );
}

export default NewsCardComponent;
