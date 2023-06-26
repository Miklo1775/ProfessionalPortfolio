import { sentenceVar, letterVar } from "@/components/variants";
import { v4 } from "uuid";
import { motion } from "framer-motion";

const BigDetailsHeading = ({ projectName }) => {
  return (
    <motion.h1
      variants={sentenceVar}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ color: "white" }}
    >
      {projectName.split("").map((character) => {
        return (
          <motion.span key={v4()} variants={letterVar}>
            {character}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default BigDetailsHeading;
