import styles from "./Hero.module.css";

import hero from "../../assets/hero.png";

const Hero = () => {
  return (
    <>
      <div id={styles.heroContainer}>
        <h1 id={styles.heroText}>
          Revolutionizing Stroke Detection for Children on Life Support
        </h1>
        <img src={hero} id={styles.heroImg}></img>
      </div>
    </>
  );
};

export default Hero;
