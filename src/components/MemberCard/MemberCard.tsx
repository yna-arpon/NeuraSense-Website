import React from "react";
import styles from "./MemberCard.module.css";

interface Props {
  name: string;
  position: string;
  imageSrc: string;
}

function MemberCard({ name, position, imageSrc }: Props) {
  return (
    <>
      <div className={styles.cardDiv}>
        {imageSrc && (
          <img src={imageSrc} alt={name} className={styles.profilePhoto} />
        )}
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.position}>{position}</p>
      </div>
    </>
  );
}

export default MemberCard;
