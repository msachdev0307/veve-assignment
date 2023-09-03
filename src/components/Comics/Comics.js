import React from "react";
import Slider from "../UI/Slider";
import useResize from "../../hooks/use-resize";
import { getAllComics } from "../../api/comic";

const Comics = (props) => {
  const size = useResize();
  const comics = getAllComics(props.searchTerm);
  const items = comics.map((item) => {
    return {
      id: item.node.id,
      name: item.node.name,
      url: item.node.cover.image.url,
      totalAvailable: item.node.totalAvailable,
      startYear: item.node.startYear,
      storePrice: item.node.storePrice,
      path: "/comic/",
    };
  });
  return (
    <Slider window={size} data={items} showDetails={true} title="Comics" />
  );
};

export default Comics;
