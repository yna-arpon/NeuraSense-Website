import React from "react";

import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Mission from "./components/Mission/Mission";
import Problem from "./components/Problem/Problem";
import Solution from "./components/Solution/Solution";

const App = () => {
  return (
    <>
      <div id={styles.firstDiv}>
        <Header></Header>
        <Hero></Hero>
        <Mission></Mission>
      </div>
      <div id={styles.secondDiv}>
        <Problem></Problem>
        <Solution></Solution>
      </div>
    </>
  );
};

export default App;
