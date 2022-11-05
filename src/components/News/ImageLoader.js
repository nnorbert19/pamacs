import React from "react";

function ImageLoader(data) {
  console.log(data);
  return (
    <>
      <div className="d-flex col-4 m-1">
        <img className="d-block w-100" src={data.data.url}></img>
      </div>
    </>
  );
}

export default ImageLoader;
