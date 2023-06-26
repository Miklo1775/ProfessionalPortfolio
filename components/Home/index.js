import { useState } from "react";
// import Name from "./HomeHeadings/Name";
import HomeBody from "./HomeBody";
import classes from "./Home.module.css";
// import AboutHead from "../About/AboutHead/AboutHead";
// import AboutBody from "../About/AboutBody";

import dynamic from "next/dynamic";
// const AboutBody = dynamic(() => import("@/components/About/AboutBody"));
const Name = dynamic(() => import("@/components/Home/HomeHeadings/Name"));

import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, border: "1px solid red" }}
      // exit={{ opacity: 0 }}
      className={classes.homeContainer}
    >
      <Name />
      <AboutBody />
    </motion.div>
  );
};

export default HomePage;
