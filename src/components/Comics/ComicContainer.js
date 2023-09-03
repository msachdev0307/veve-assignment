import React, { Fragment } from "react";
import ComicImageSection from "./ComicImageSection";
import ComicDescriptionSection from "./ComicDescriptionSection";

const ComicContainer = (props) => {
  return (
    <Fragment>
      <ComicImageSection comic={props.comic} />
      <ComicDescriptionSection comic={props.comic} />
    </Fragment>
  );
};

export default ComicContainer;
