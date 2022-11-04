import React, { useContext, useState, useEffect } from "react";

const ContentfulContext = React.createContext();

export function useContenful() {
  return useContext(ContentfulContext);
}

export function ContentfulProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [homeCarouselImages, setHomeCarouselImages] = useState([]);
  var contentful = require("contentful");

  var client = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESSTOKEN,
  });

  async function getNews() {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "news",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const news = item.fields;
        return {
          ...item.fields,
          news,
        };
      });
      setLoading(false);
      return sanitizedEntries;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  async function getHomeCarouselImages() {
    try {
      setLoading(true);
      const entries = await client.getEntries({
        content_type: "homeImageSlider",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const images = item.fields;
        return {
          ...item.fields,
          images,
        };
      });
      setLoading(false);
      return sanitizedEntries;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    getNews().then((response) => setNews(response));
    getHomeCarouselImages().then((response) => setHomeCarouselImages(response));
    console.log(homeCarouselImages);
  }, []);

  const value = {
    news,
    homeCarouselImages,
    loading,
  };
  return (
    <ContentfulContext.Provider value={value}>
      {!loading && children}
    </ContentfulContext.Provider>
  );
}
