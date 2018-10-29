import React from "react";
import styles from "./ProjectCard.module.css";

const Card = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox}>
        <img className={styles.image} alt={title} src={image} />
      </div>
      <div className={styles.caption}>{title}</div>
    </div>
  );
};

export default Card;
