import { motion } from "framer-motion";
import { useRouter } from "next/router";

import classes from "./SingleProjectDisplay.module.css";

const SingleProjectDisplay = (props) => {
  const Router = useRouter();

  const singleProjectHandler = () => {
    Router.push("Projects/" + props.project.id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={classes.singleProjectContainer}
      onClick={singleProjectHandler}
    >
      <div className={classes.singleProjectTitle}>
        <h4>{props.project.name}</h4>
      </div>
      <div className={classes.singleImgDescription}>
        <img src={props.project.image} className={classes.singleProjectImg} />
        <p className={classes.singleProjectDescription}>
          {props.project.shortdesc}
        </p>
      </div>
    </motion.div>
  );
};

export default SingleProjectDisplay;
