import React from "react";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";
import Team from "./components/Team/Team";

const App = () => {
  return (
    <>
      <div className={styles.firstDiv}>
        <Header></Header>
        <Hero></Hero>
        <Mission></Mission>
      </div>
      <div className={styles.secondDiv}>
        <Problem></Problem>
        <Solution></Solution>
      </div>
      <div className={styles.thirdDiv}>
        <Team></Team>
      </div>
    </>
  );
};

export default App;
