import Brands from "../data/brands.json";

const getAllBrands = (searchString = "") => {
  return searchString !== undefined && searchString !== ""
    ? Brands.edges.filter((brand) =>
        brand.node.name.toLowerCase().includes(searchString.toLowerCase())
      )
    : Brands.edges;
};
export { getAllBrands };
