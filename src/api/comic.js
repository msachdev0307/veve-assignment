import Comics from "../data/comics.json";

const getComic = (comicId) => {
  return Comics.edges.find((comic) => comic.node.id === comicId);
};
const getAllComics = (searchString = "") => {
  return searchString !== undefined && searchString !== ""
    ? Comics.edges.filter((comic) =>
        comic.node.name.toLowerCase().includes(searchString.toLowerCase())
      )
    : Comics.edges;
};
export { getComic, getAllComics };
