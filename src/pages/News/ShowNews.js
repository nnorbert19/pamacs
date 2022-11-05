import React from "react";
import { useContenful } from "../../ContentfulContext";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsNotFound from "../../components/News/NewsNotFound";
import ImageLoader from "../../components/News/ImageLoader";

function ShowNews() {
  const { id } = useParams();
  const { news, slugify } = useContenful();

  const data = news.items.find((obj) => {
    return slugify(obj.title) === slugify(id);
  });

  if (!data) {
    return <NewsNotFound />;
  } else {
  }
  return (
    <>
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="divider mb-0">
          <span />
          <h1>{data.title}</h1>
          <span />
        </div>
        <h6 className="text-muted">{data.date}</h6>
        <div className="w-75 m-2">
          {documentToReactComponents(data.text.json)}
        </div>
        <div className="w-75 d-flex flex-row justify-content-center">
          {data.imagesCollection &&
            data.imagesCollection.items.map((images, index) => (
              <ImageLoader key={index} data={images} />
            ))}
        </div>
      </div>
    </>
  );
}

export default ShowNews;
