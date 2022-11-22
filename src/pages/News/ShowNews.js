import React from "react";
import { useContenful } from "../../ContentfulContext";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import NewsNotFound from "../../components/News/NewsNotFound";
import ImageLoader from "../../components/News/ImageLoader";
import "../../components/styles/news.css";

function ShowNews() {
  const { id } = useParams();
  const { news, slugify } = useContenful();

  const data = news.items.find((obj) => {
    return slugify(obj.title) === slugify(id);
  });

  if (!data) {
    return <NewsNotFound />;
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <div className="divider mb-0">
          <span />
          <h1>{data.title}</h1>
          <span />
        </div>
        <div className="container d-flex flex-column align-items-center">
          <h6 className="text-muted">{data.date.split("T")[0]}</h6>
          <div className=" m-2">
            {documentToReactComponents(data.text.json)}
          </div>
          <div className="container row m-3 justify-content-center">
            {data.imagesCollection && (
              <ImageLoader data={data.imagesCollection.items} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
/*              data.imagesCollection.items.map((images, index) => (
                <ImageLoader key={index} data={images} />
              ))}*/

export default ShowNews;
