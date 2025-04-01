import React from "react";
import styles from "./PainPoint.module.css";

interface Props {
  iconClass: string;
  paintPointHeader: string;
  paintPointDescrip: string;
}

function PainPoint({ iconClass, paintPointHeader, paintPointDescrip }: Props) {
  return (
    <>
      <div id={styles.painPointDiv}>
        <div id={styles.iconFrame}>
          <i className={`${iconClass} ${styles.icon}`}></i>
        </div>
        <h3 id={styles.painPointHeader}>{paintPointHeader}</h3>
        <p id={styles.paintPointDescrip}>{paintPointDescrip}</p>
      </div>
    </>
  );
}

export default PainPoint;
