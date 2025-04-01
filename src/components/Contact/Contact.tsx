import React from "react";
import styles from "./Contact.module.css";

import wave from "../../assets/Wave.png";

function Contact() {
  return (
    <>
      <div className={styles.contactDiv}>
        <h2 className={styles.heading}>Interested?</h2>
        <p className={styles.subtext}>
          Book a demo or contact us at info@neurasense.ca
        </p>
        <p className={styles.subtext}>
          Check out our poster{" "}
          <a
            href="https://drive.google.com/file/d/1mzC9FmbzjSA2InahvD3Vo6S7AWJtFQfb/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          to learn more about our product.
        </p>
      </div>
      <img src={wave} className={styles.wave}></img>
    </>
  );
}

export default Contact;
