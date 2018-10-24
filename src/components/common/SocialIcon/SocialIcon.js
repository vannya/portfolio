import React from "react";
import styles from "./SocialIcon.module.css";

const SocialIcon = ({ icon, text, pathname }) => {
  return (
    <a className={styles.link} href={pathname} target="_blank" rel="noopener noreferrer">
        <span className={styles.icon}>
          <i className={icon} />
        </span>
    </a>
  );
};

export default SocialIcon;
