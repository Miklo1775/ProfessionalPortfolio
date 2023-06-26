import { motion } from "framer-motion";

import classes from "./SubmissionResponse.module.css";

const SubmissionResponse = () => {
  return (
    <motion.h1
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        color: "#ffffff",
      }}
      style={{ color: "#ffffff" }}
      className={classes.responseContainer}
    >
      Your response has been submitted successfully!
    </motion.h1>
  );
};

export default SubmissionResponse;
