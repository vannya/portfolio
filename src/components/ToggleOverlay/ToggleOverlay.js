import React from 'react';
import styles from "./ToggleOverlay.module.css";

const ToggleOverlay = ({onClick, hidden}) => {
  return (
    <section hidden={hidden} className={styles.overlay} onClick={onClick} />
  );
}

export default ToggleOverlay;
