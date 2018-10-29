import React from "react";
import styles from "./Button.module.css";

const Button = ({ coloration, text, onClick, type }) => {
  let buttonColorType;
  if (coloration === "white") {
    buttonColorType = styles.btn;
  } else if (coloration === "submit-btn") {
    buttonColorType = styles.submitBtn;
  } else {
    buttonColorType = styles.btnColor;
  }
  return (
    <button type={type} className={buttonColorType} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
