import React from "react";
import Slider from "../UI/Slider";
import { getAllBrands } from "../../api/brand";
import useResize from "../../hooks/use-resize";

const Brand = (props) => {
  const size = useResize();
  const brands = getAllBrands(props.searchTerm);

  const items = brands.map((item) => {
    return {
      id: item.node.id,
      name: item.node.name,
      url: item.node.image.url,
      path: "/brand/",
    };
  });
  return (
    <Slider
      window={size}
      data={items}
      showDetails={false}
      title="Brands"
    ></Slider>
  );
};

export default Brand;
