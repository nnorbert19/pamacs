import React, { useContext, useState, useEffect } from "react";

const ContentfulContext = React.createContext();

export function useContenful() {
  return useContext(ContentfulContext);
}

const query = `query {
  homeImageSliderCollection {
    items {
      image {
        url
      }
    }
  }
  newsCollection {
    items {
      title
      smallImage {
        url
      }
      date
      shortText
      text {
        json
      }
      imagesCollection {
        items {
          url
        }
      }
    }
  }
}

`;

export function ContentfulProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [news, setNews] = useState();
  const [homeCarouselImages, setHomeCarouselImages] = useState();

  async function fetchData() {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE}/environments/master`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ query }),
      }
    );
    const body = await response.json();
    setLoading(false);
    setHomeCarouselImages(body.data.homeImageSliderCollection);
    setNews(body.data.newsCollection);
    return body.data;
  }

  useEffect(() => {
    setLoading(true);
    fetchData().then((response) => setData(response));
  }, []);

  const slugify = (str) =>
    str
      .replace(/[öÖ]/g, "o")
      .replace(/[üÜ]/g, "u")
      .replace(/[óÓ]/g, "o")
      .replace(/[őŐ]/g, "o")
      .replace(/[úÚ]/g, "u")
      .replace(/[éÉ]/g, "e")
      .replace(/[áÁ]/g, "a")
      .replace(/[űŰ]/g, "u")
      .replace(/[íÍ]/g, "i")
      .toLowerCase()
      .trim()
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  const value = {
    news,
    homeCarouselImages,
    loading,
    slugify,
  };
  return (
    <ContentfulContext.Provider value={value}>
      {!loading && children}
    </ContentfulContext.Provider>
  );
}
