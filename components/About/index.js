import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// const AboutHead = dynamic(() => import("@/components/About/AboutHead"));
// const AboutBody = dynamic(() => import("@/components/About/AboutBody"));
import dynamic from "next/dynamic";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <motion.div className={classes.aboutContainer}>
      <AnimatePresence mode="wait">
        {/* <AboutHead key="about-head" /> */}
        <AboutBody key="about-body" />
      </AnimatePresence>
    </motion.div>
  );
};

export default AboutPage;
