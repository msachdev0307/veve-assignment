import React from "react";
import Card from "./Card";
import styles from "./CardContainer.module.css";
const CardContainer = (props) => {
  return (
    <div onScroll={props.scrollHandler} className={styles.cardContainer}>
      {props.cards.map((card) => (
        <Card key={card.id} card={card} showDetails={props.showDetails} />
      ))}
    </div>
  );
};
export default CardContainer;
