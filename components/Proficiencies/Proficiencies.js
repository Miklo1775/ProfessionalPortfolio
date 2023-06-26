import { useState } from "react";

import classes from "./Proficiencies.module.css";
import { motion } from "framer-motion";

import ParticleProficiency from "./ParticleJS";

import Javascript from "./Javascript";
import Html5 from "./Html5";
import Css from "./Css";
import React from "./React";
import Postgres from "./Postgres";
import Next from "./Next";
import Node from "./Node";
import Express from "./Express";
const Proficienies = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={classes.container}>
      <div className={classes.heading}>
        <h1 className={classes.title}>Proficiencies</h1>
      </div>
      <div className={classes.body}>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            delay: 2,
          }}
          className={classes.borderTop}
        />

        <div className={classes.iconContainer}>
          <Javascript />
          <Html5 />
          <Css />
          <Postgres />
          <Express />
          <React />
          <Node />
          <Next />
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            delay: 2,
          }}
          className={classes.borderBottom}
        />
      </div>
    </motion.div>
  );
};

export default Proficienies;
