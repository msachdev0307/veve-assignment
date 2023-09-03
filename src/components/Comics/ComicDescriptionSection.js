import React, { useState } from "react";
import styles from "./ComicDescriptionSection.module.css";
const ComicDescriptionSection = (props) => {
  const scrollToBottom = (target) => {
    target.scrollIntoView({ behavior: "smooth" });
  };

  const [isExpanded, setIsexpanded] = useState(false);
  const toggleDescriptionView = (event) => {
    setIsexpanded((expanded) => {
      return !expanded;
    });
    setTimeout(scrollToBottom, 500, event.currentTarget);
  };
  return (
    <div className={styles.descriptionWrapper}>
      <h1>{props.comic.name}</h1>
      <div className={styles.description}>
        <div
          className={
            isExpanded
              ? `${styles.descriptionText} ${styles.expanded}`
              : styles.descriptionText
          }
        >
          {props.comic.description}

          <span></span>
        </div>
        <button className={styles.readmoreText} onClick={toggleDescriptionView}>
          {isExpanded ? "Show Less" : "Show More..."}
        </button>
      </div>
    </div>
  );
};

export default ComicDescriptionSection;
