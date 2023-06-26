import ProjectHead from "./ProjectHeading/ProjectHead";
// import ProjectDisplay from "./ProjectDisplay/ProjectDisplay.js";

import classes from "./ProjectPage.module.css";

import { pageVar } from "../variants";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";
// const ProjectHead = dynamic(() =>
//   import("@/components/Projects/ProjectHeading/ProjectHead")
// );
const ProjectDisplay = dynamic(() => {
  return import("@/components/Projects/ProjectDisplay/ProjectDisplay.js");
});
const ProjectPage = () => {
  return (
    <motion.div
      variants={pageVar}
      initial="offscreen"
      animate="onscreen"
      exit="exit"
      className={classes.projectsContainer}
    >
      {/* <ProjectHead /> */}
      <ProjectDisplay />
    </motion.div>
  );
};

export default ProjectPage;
