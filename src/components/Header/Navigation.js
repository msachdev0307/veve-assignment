import React, { memo } from "react";
import storeImage from "../../assets/store.png";
import collectionImage from "../../assets/collection.png";
import feedImage from "../../assets/feed.png";
import marketImage from "../../assets/market.png";
import profileImage from "../../assets/profile.png";
import NavigationItem from "./NavigationItem";
import styles from "./Navigation.module.css";
const NAV_DATA = [
  { id: "n1", title: "store", imgLink: storeImage, url: "/" },
  { id: "n2", title: "collection", imgLink: collectionImage, url: "/Error" },
  { id: "n3", title: "feed", imgLink: feedImage, url: "/Error" },
  { id: "n4", title: "market", imgLink: marketImage, url: "/Error" },
  { id: "n5", title: "profile", imgLink: profileImage, url: "/Error" },
];

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      {NAV_DATA.map((nav) => (
        <NavigationItem key={nav.id} data={nav} />
      ))}
    </div>
  );
};

export default memo(Navigation);
