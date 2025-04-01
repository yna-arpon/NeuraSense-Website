import React from "react";
import styles from "./ProdBranch.module.css";

interface Props {
  heading: string;
  description: string;
  imageSrc: string;
}

function ProdBranch({ heading, description, imageSrc }: Props) {
  return (
    <>
      <div>
        <div id={styles.descriptionDiv}>
          <h3 id={styles.heading}>{heading}</h3>
          <p id={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProdBranch;
