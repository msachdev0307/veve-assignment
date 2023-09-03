import React from "react";
import { useParams } from "react-router-dom";
import { getComic } from "../api/comic";
import ComicContainer from "../components/Comics/ComicContainer";
const ComicPage = () => {
  const params = useParams();
  const data = getComic(params.comicId);

  return <ComicContainer comic={data.node} />;
};

export default ComicPage;
