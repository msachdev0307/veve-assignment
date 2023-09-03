import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
const Card = (props) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate(props.card.path + props.card.id);
  };

  return (
    <div onClick={navigateHandler} className={styles.card}>
      <img src={props.card.url} alt={props.card.name || "Image"} />
      <div className="card-content">
        {props.showDetails && (
          <div>
            <div className={styles.cardName}>{props.card.name}</div>

            <div className={styles.cardDetails}>
              <span>{props.card.startYear}</span>
              <span className={styles.price}>
                {props.card.totalAvailable > 0
                  ? props.card.storePrice
                  : "Sold Out"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
