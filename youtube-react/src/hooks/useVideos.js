import { useState, useEffect } from "react";
import Youtube from "../APIs/youtube";

const KEY = "AIzaSyBEjU_vd4nncN3o8CnqseCXjiRk6Rj_oCs";
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        key: KEY,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
