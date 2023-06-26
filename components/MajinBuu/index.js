import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import ParticleOrb from "./ParticleBuu";

import classes from "./MajinBuu.module.css";

const MajinBuu = () => {
  return (
    <motion.div className={classes.buuContainer}>
      <ParticleOrb />
      <img src={"images/buu/majinbuu-evil2.png"} height="100%" width="100%" />
    </motion.div>
  );
};

export default MajinBuu;
