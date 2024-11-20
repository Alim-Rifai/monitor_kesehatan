import React from "react";
import styles from "../styles/InfoBox.module.css";

const InfoBox = ({ imageSrc, altText, buttonText, description, onClick }) => {
  return (
    <div className={styles.infoBox}>
      <img src={imageSrc} alt={altText} />
      <h3>{buttonText}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default InfoBox;
