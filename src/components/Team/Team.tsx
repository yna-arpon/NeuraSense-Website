import React from "react";
import styles from "./Team.module.css";
import MemberCard from "../MemberCard/MemberCard";

import Yna from "../../assets/Yna Arpon.png";
import Faye from "../../assets/Fionna Dela Cruz.png";
import Christine from "../../assets/Christine Dowling.png";
import Lily from "../../assets/Lily Gentile.png";
import Tania from "../../assets/Tania Rizwan.png";

function Team() {
  return (
    <>
      <h1 className={styles.heading}>Meet the Team</h1>
      <div className={styles.teamDiv}>
        <MemberCard
          name="Shekinah (Yna) Arpon"
          position="Project Manager and Software Lead"
          imageSrc={Yna}
        ></MemberCard>
        <MemberCard
          name="Fionna Dela Cruz"
          position="Electical Lead"
          imageSrc={Faye}
        ></MemberCard>
        <MemberCard
          name="Christine Dowling"
          position="Biomedical Lead"
          imageSrc={Christine}
        ></MemberCard>
        <MemberCard
          name="Lily Gentile"
          position="Mechanical Lead"
          imageSrc={Lily}
        ></MemberCard>
        <MemberCard
          name="Tania Rizwan"
          position="Algorithm Development Lead"
          imageSrc={Tania}
        ></MemberCard>
      </div>
    </>
  );
}

export default Team;
