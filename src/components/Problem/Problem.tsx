import React from "react";
import styles from "./Problem.module.css";
import PainPoint from "../PainPoint/PainPoint";

function Problem() {
  return (
    <>
      <div id={styles.problemDiv}>
        <h2>The Problem</h2>
        <div id={styles.problemPoints}>
          <PainPoint
            iconClass="bi bi-graph-up-arrow"
            paintPointHeader="High Stroke Risk"
            paintPointDescrip="Children on extracorporeal membrane oxygenation (ECMO) are at an increased risk of stroke by 30-40%"
          ></PainPoint>
          <PainPoint
            iconClass="bi bi-ban"
            paintPointHeader="Inaccurate Monitoring"
            paintPointDescrip="Current methods are reliant on periodic physical measurements that may not be accurate"
          ></PainPoint>
          <PainPoint
            iconClass="bi bi-hourglass-split"
            paintPointHeader="Delayed Detection"
            paintPointDescrip="Strokes are often left undetected and untreated on ECMO"
          ></PainPoint>
        </div>
      </div>
    </>
  );
}

export default Problem;
