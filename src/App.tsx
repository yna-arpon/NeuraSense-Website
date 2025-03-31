import React from "react";

import styles from "./App.module.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Problem from "./components/Problem";

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
      </div>
    </>
  );
};

export default App;
