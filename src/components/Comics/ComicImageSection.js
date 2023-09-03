import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ComicImageSection.module.css";
import LeftArrow from "../../assets/chevron-left.png";
import RightArrow from "../../assets/chevron-right.png";
import heart from "../../assets/heart.png";
import comment from "../../assets/comment.png";
import save from "../../assets/save.png";
import share from "../../assets/share.png";

const ComicImageSection = (props) => {
  const [likeDetails, setLikeDetails] = useState({
    liked: false,
    likeCount: props.comic.likeCount,
  });
  const likeComic = () => {
    setLikeDetails((prev) => {
      return {
        liked: !prev.liked,
        likeCount: prev.liked ? prev.likeCount - 1 : prev.likeCount + 1,
      };
    });
  };
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <img
        className={styles.comicImage}
        src={props.comic.cover.image.url}
        alt={props.comic.cover.image.id}
      ></img>
      <div className={styles.navButtons}>
        <button
          onClick={() => {
            navigate(-1);
          }}
          aria-label="back"
          className={styles.button}
        >
          <img src={LeftArrow} alt="back"></img>
        </button>
        <a className={styles.previewComic} href="/Error" target="_blank">
          <span className={styles.previewLinkText}>Comic Preview</span>
          <img src={RightArrow} alt="preview"></img>
        </a>
      </div>
      <div className={styles.bottomLinks}>
        <div className={styles.links}>
          <button onClick={likeComic} className={styles.btnWide}>
            <img
              src={heart}
              alt="likeButton"
              className={likeDetails.liked ? styles.active : ""}
            ></img>
            <span className={styles.btnLabel}> {likeDetails.likeCount}</span>
          </button>
          <button className={styles.btnWide}>
            <img src={comment} alt="commentButton"></img>
            <span className={styles.btnLabel}> {props.comic.commentCount}</span>
          </button>
          <button className={styles.button}>
            <img src={save} alt="saveButton"></img>
          </button>
          <button className={styles.button}>
            <img src={share} alt="shareButton"></img>
          </button>
        </div>
      </div>
    </header>
  );
};

export default ComicImageSection;
