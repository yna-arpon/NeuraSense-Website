import React from "react";
import styles from "./Problem.module.css";

function Problem() {
  return (
    <>
      <div id={styles.problemDiv}>
        <h2>The Problem</h2>
        <div id={styles.problemPoints}></div>
      </div>
    </>
  );
}

export default Problem;
