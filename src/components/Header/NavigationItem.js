import React from "react";
import styles from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <NavLink
      to={props.data.url}
      className={({ isActive }) =>
        isActive ? styles.navItemActive : styles.navItem
      }
      id={`navItem${props.data.id}`}
    >
      <img
        className={styles.navImg}
        src={props.data.imgLink}
        alt={props.data.title}
      ></img>
      <span className={styles.navTitle}>{props.data.title}</span>
    </NavLink>
  );
};

export default NavigationItem;
