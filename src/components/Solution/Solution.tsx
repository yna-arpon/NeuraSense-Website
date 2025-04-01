import React from "react";
import ProdBranch from "../ProdBranch/ProdBranch";
import styles from "./Solution.module.css";

function Solution() {
  return (
    <>
      <div id={styles.solutionDiv}>
        <h2>Our Product</h2>
        <ProdBranch
          heading="Headset"
          description="Continuously records electrical and oxygenation signals from the brain"
          imageSrc="jello"
        ></ProdBranch>
        <ProdBranch
          heading="Algorithm"
          description="Analyzes incoming brain signals and assesses the risk of stroke"
          imageSrc="hi"
        ></ProdBranch>
        <ProdBranch
          heading="Application"
          description="Visualizes brain signals and displays to algorithm results"
          imageSrc="bonjour"
        ></ProdBranch>
      </div>
    </>
  );
}

export default Solution;
