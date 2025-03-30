import styles from "./Header.module.css";
import Button from "./Button";

import NeuraSenseLogo from "../assets/NeuraSense Logo.png";

const Header = () => {
  const handleAboutUsClick = () => {
    console.log("Clicked about us");
  };

  const handleTeamClick = () => {
    console.log("Clicked team");
  };

  const handleContactUsClick = () => {
    console.log("Clicked contact us");
  };

  return (
    <>
      <div id={styles.headerDiv}>
        <div id={styles.neurasenseDiv}>
          <img src={NeuraSenseLogo} id={styles.logo}></img>
          <h1 id={styles.logoLabel}>NeuraSense</h1>
        </div>
        <div id={styles.headerBtnDiv}>
          <Button
            innerText="About us"
            onClickButton={handleAboutUsClick}
            btnClass="headerBtn"
          ></Button>

          <Button
            innerText="Team"
            onClickButton={handleTeamClick}
            btnClass="headerBtn"
          ></Button>

          <Button
            innerText="Contact Us"
            onClickButton={handleContactUsClick}
            btnClass="headerBtn"
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Header;
