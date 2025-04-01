import styles from "./Mission.module.css";
import React from "react";

function Mission() {
  return (
    <>
      <div id={styles.missionDiv}>
        <h1>Our Mission</h1>
        <p>
          Create a reliable solution for detecting strokes in children on life
          support. We aim to support clinicians in making informed decisions and
          secure a healthier future for the next generation
        </p>
      </div>
    </>
  );
}

export default Mission;
