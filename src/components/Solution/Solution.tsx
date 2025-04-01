import React from "react";
import ProdBranch from "../ProdBranch/ProdBranch";
import styles from "./Solution.module.css";

import mockup from "../../assets/NeuraSense Mockup.png";
import babyNeura from "../../assets/Baby Neura.png";

function Solution() {
  return (
    <>
      <div id={styles.solutionDiv}>
        <h2 id={styles.solutionHeading}>Our Product</h2>
        <ProdBranch
          heading="Headset"
          divClass="imgDiv"
          description="A multimodal device, optimized for life support environments, that records electrical signals and oxygenation levels in the brain."
          imageSrc={babyNeura}
        ></ProdBranch>
        <ProdBranch
          heading="Algorithm"
          divClass="noImg"
          description="Recorded signals are processed to identify stroke-related patterns, irregularities and asymmetry in electrical activity and blood oxygen saturation."
        ></ProdBranch>
        <ProdBranch
          heading="Application"
          divClass="imgDiv"
          description="Live brain signals are visualized and stroke assessments are communicated to guide critical care decisions."
          imageSrc={mockup}
        ></ProdBranch>
      </div>
    </>
  );
}

export default Solution;
