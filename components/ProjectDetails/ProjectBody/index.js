import { motion } from "framer-motion";

import classes from "./ProjectBody.module.css";

const ProjectBody = ({ projectInfo }) => {
  return (
    <div className={classes.projectBodyContainer}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={classes.projectImageContainer}
      >
        {projectInfo.demosrc && (
          <motion.iframe
            initial={{
              scale: 0,
              rotate: "90deg",
              borderRadius: "75%",
              transition: {
                borderRadius: {
                  duration: 10,
                },
              },
            }}
            animate={{ scale: 1, borderRadius: "5%", rotate: 0 }}
            transition={{ delay: 2 }}
            width="560"
            height="315"
            src={projectInfo.demosrc}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={classes.youtubeVideo}
          ></motion.iframe>
        )}
        {/* <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
          src={projectInfo.image}
          height="100%"
          width="100%"
        /> */}
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ delay: 3 }}
        className={classes.projectDescriptionContainer}
      >
        <p>{projectInfo.description}</p>
      </motion.div>
    </div>
  );
};

export default ProjectBody;
