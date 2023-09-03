import React, { useState, useRef, useEffect } from "react";
import search from "../../assets/search.png";
import bell from "../../assets/bell.png";
import styles from "./NavIcons.module.css";
import SideDrawer from "../UI/SideDrawer";
const NavIcons = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const searchChangeHandler = (event) => {
    props.onSearch(event.currentTarget.value);
  };
  const navIconClickHandler = (event) => {
    if (event.currentTarget.id === "searchButton") {
      setShowSearch((prev) => {
        return !prev;
      });
    } else if (event.currentTarget.id === "bellButton") {
      setShowNotification((prev) => {
        return !prev;
      });
    }
  };
  const closeNotificationPanel = () => {
    setShowNotification(false);
  };

  const searchRef = useRef();
  useEffect(() => {
    if (showSearch) {
      searchRef.current.focus();
    }
  }, [showSearch]);
  return (
    <div className={styles.NavIcons}>
      <button
        id="bellButton"
        onClick={navIconClickHandler}
        className={styles.navButton}
      >
        <img className={styles.NavIcon} src={bell} alt="bell" />
      </button>
      <button
        id="searchButton"
        onClick={navIconClickHandler}
        className={styles.navButton}
      >
        <img className={styles.NavIcon} src={search} alt="search"></img>
      </button>
      {showSearch && (
        <input
          ref={searchRef}
          className={styles.searchBar}
          type="text"
          onChange={searchChangeHandler}
          value={props.searchTerm}
          placeholder="Search"
        ></input>
      )}
      <div
        id="notificationPanel"
        className={showNotification ? "activeSidePanel" : ""}
      >
        <SideDrawer closeNotificationPanel={closeNotificationPanel} />
      </div>
    </div>
  );
};

export default NavIcons;
