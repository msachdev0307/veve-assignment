import React from "react";
import logo from "../../assets/logo.png";
import Navigation from "./Navigation";
import styles from "./Header.module.css";
import NavIcons from "./NavIcons";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div id="header" className={styles.headerItems}>
          <img
            onClick={() => {
              navigate("/");
            }}
            className={styles.logo}
            src={logo}
            alt="logo"
          ></img>
          <Navigation />
          <NavIcons onSearch={props.onSearch} searchTerm={props.searchTerm} />
        </div>
      </div>
    </header>
  );
};

export default Header;
