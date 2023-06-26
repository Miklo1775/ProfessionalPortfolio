import { motion } from "framer-motion";
import classes from "./WorkHistoryDetails.module.css";
import WorkCarousel from "./WorkCarousel";

const WorkHistoryDetails = ({ workInfo, setCurrentWork, setShowDetails }) => {
  const backToAllHandler = () => {
    setCurrentWork({});
    setShowDetails(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="container"
    >
      <div className="innerContainer">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.1 }}
          whileHover={{ scale: 1.2 }}
          onClick={backToAllHandler}
          className={classes.button}
        >
          Back To All Jobs
        </motion.button>
        <h1 style={{ color: "white" }} className="heading">
          {workInfo.companyname}
        </h1>
        <p style={{ color: "white" }} className="date">
          <span>{workInfo.datestart}</span>-<span>{workInfo.dateend}</span>
        </p>
        <WorkCarousel images={workInfo.images} />
        <div>
          <p style={{ color: "white" }} className="role">
            Role: {workInfo.role}
          </p>
          <p style={{ color: "white" }} className="companyaddress">
            Company Address: {workInfo.companyaddress}
          </p>
          <p style={{ color: "white" }} className="description">
            Work Description: {workInfo.description}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            height: 70vh;
            padding: 0;
            display: flex;
            flex-direction: column;
            /* align-items: center; */
            /* justify-content: flex-start; */
            overflow: scroll;
          }

          .container::-webkit-scrollbar {
            display: none;
          }

          .innerContainer {
            display: flex;
            flex-direction: column;
            padding: 0;
          }

          .button {
            position: absolute;
            top: 10%;
            left: 0;
            border-radius: 10%;
            border: none;
            color: white;
            background-color: transparent;
            height: 5%;
            width: 15%;
            margin-bottom: 2%;
            z-index: 1;
          }

          .heading {
            position: absolute;
            width: 100%;
            text-align: center;
            background-color: black;
            padding-bottom: 10px;
          }

          .date {
            width: 100%;
            text-align: center;
            margin-bottom: 2%;
            padding-bottom: 5px;
            position: absolute;
            top: 17%;
            font-weight: bold;
            background-color: black;
          }

          .role {
            font-size: larger;
            margin-bottom: 5%;
          }

          .companyaddress {
            font-size: larger;
            margin-bottom: 5%;
          }

          .description {
            font-size: larger;
            margin-bottom: 5%;
          }
        `}
      </style>
    </motion.div>
  );
};

export default WorkHistoryDetails;
