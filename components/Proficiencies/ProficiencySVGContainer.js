import classes from "./ProficiencySVGContainer.module.css";

import { motion } from "framer-motion";

const ProficiencySVGContainer = (props) => {
  return (
    <motion.div className={classes.container}>{props.children}</motion.div>
  );
};

export default ProficiencySVGContainer;
