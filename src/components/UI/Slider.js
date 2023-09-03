import React from "react";
import CardContainer from "./CardContainer";
import { useRef } from "react";
import LeftArrow from "../../assets/chevron-left.png";
import RightArrow from "../../assets/chevron-right.png";
import { NavLink } from "react-router-dom";
import styles from "./Slider.module.css";
const Slider = (props) => {
  const cardsInFrame = props.window.width > 600 ? 5 : 2;
  const elementRef = useRef(null);
  const sliderNavigationHandler = (element, step) => {
    step === -1
      ? element.children[0].scrollTo({
          left:
            element.children[0].scrollLeft -
            element.children[0].clientWidth / cardsInFrame,
          behavior: "smooth",
        })
      : element.children[0].scrollTo({
          left:
            element.children[0].scrollLeft +
            element.children[0].clientWidth / cardsInFrame,
          behavior: "smooth",
        });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.sliderHeader}>
        <span className="sliderHeading">{props.title}</span>
        {props.data.length > cardsInFrame && (
          <div className="navIcons">
            <NavLink className="link" to={`/${props.title}`}>
              See All
            </NavLink>
            <button
              className="navButton"
              onClick={() => {
                sliderNavigationHandler(elementRef.current, -1);
              }}
            >
              <img className="navIcon" src={LeftArrow} alt="LeftArrow"></img>
            </button>
            <button
              className="navButton"
              onClick={() => {
                sliderNavigationHandler(elementRef.current, +1);
              }}
            >
              <img className="navIcon" src={RightArrow} alt="RightArrow"></img>
            </button>
          </div>
        )}
      </h1>

      {props.data.length > 0 ? (
        <div ref={elementRef}>
          <CardContainer cards={props.data} showDetails={props.showDetails} />
        </div>
      ) : (
        <p className="message"> No matching {props.title} found.</p>
      )}
    </div>
  );
};

export default Slider;
