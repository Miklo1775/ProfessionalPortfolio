import classes from "./WorkCard.module.css";

import { motion, useScroll } from "framer-motion";

const WorkCard = ({ workInfo, setCurrentWork, setShowDetails }) => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={() => {
        setCurrentWork(workInfo);
        setShowDetails(true);
      }}
      whileHover={{ scale: 1.1, color: "#fca311" }}
      className={classes.cardContainer}
    >
      <h1
        // style={{
        //   color: "white",
        //   height: "5vh",
        //   width: "100%",
        //   textAlign: "center",
        //   margin: 10,
        // }}
        className={classes.name}
      >
        {workInfo.companyname}
      </h1>
      <p className={classes.dates}>
        {workInfo.datestart}-{workInfo.dateend}
      </p>
      {/* <h6>Role</h6>
      <p>Description</p> */}
    </motion.div>
  );
};

export default WorkCard;
