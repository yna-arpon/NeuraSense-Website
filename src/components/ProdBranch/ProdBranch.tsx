import React from "react";
import styles from "./ProdBranch.module.css";

interface Props {
  heading: string;
  description: string;
  imageSrc?: string;
  divClass: string;
}

function ProdBranch({ heading, description, imageSrc, divClass }: Props) {
  const divType = divClass;

  return (
    <>
      <div className={`${styles[divClass]}`}>
        <div className={`${styles.descriptionDiv}`}>
          <h3 id={styles.heading}>{heading}</h3>
          <div className={styles.desciptionAndImage}>
            {imageSrc && (
              <img src={imageSrc} alt={heading} className={styles.image} />
            )}
            <p id={styles.description}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProdBranch;
