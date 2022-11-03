import React, { useEffect, useState } from "react";
import { useContenful } from "../ContentfulContext";
import NewsComponent from "../components/News/NewsComponent";
// main.js

function News() {
  const { news } = useContenful();
  return (
    <>
      <div className="d-flex justify-content-center ">
        <div className="divider">
          <span />
          <h1>Hírek</h1>
          <span />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((news, index) => (
            <NewsComponent key={index} news={news} />
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
/**/
