import BigDetailsHeading from "./ProjectDetailsHead/BigDetailsHeading.js";
import ProjectBody from "./ProjectBody/index.js";
import { pageVar } from "../variants.js";
import { motion } from "framer-motion";

import classes from "./ProjectDetails.module.css";

const ProjectDetails = ({ projectInfo }) => {
  return (
    <motion.div
      variants={pageVar}
      initial="offscreen"
      animate="onscreen"
      exit="exit"
      className={classes.projectDetailsContainer}
    >
      <BigDetailsHeading projectName={projectInfo.name} />
      <ProjectBody projectInfo={projectInfo} />
    </motion.div>
  );
};

export default ProjectDetails;
