import { useState, useEffect } from "react";
import supabase from "@/lib/supabaseClient";
import classes from "./WorkHistory.module.css";
import WorkCard from "./WorkCard";
import WorkImage from "./WorkImage";
import { v4 } from "uuid";
import { Scrollbar } from "react-scrollbars-custom";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import WorkHistoryDetails from "./WorkHistoryDetails";

const WorkHistory = () => {
  const { scrollYProgress } = useScroll();
  const [workHistory, setWorkHistory] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [currentWork, setCurrentWork] = useState();

  useEffect(() => {
    const fetchWorkHistory = async () => {
      const { data } = await supabase.from("workhistory").select();
      setWorkHistory(data);
      return data;
    };
    fetchWorkHistory();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={classes.workbox}>
      <AnimatePresence mode="wait">
        {!showDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classes.heading}>
              <h1 className={classes.title}>Work History</h1>
            </div>
            <div className={classes.workContainer}>
              {workHistory &&
                workHistory.map((work) => {
                  return (
                    <WorkCard
                      key={v4()}
                      setShowDetails={setShowDetails}
                      setCurrentWork={setCurrentWork}
                      workInfo={work}
                    />
                  );
                })}
            </div>
          </motion.div>
        )}
        {/* </AnimatePresence>
      <AnimatePresence mode="wait"> */}
        {showDetails && (
          <WorkHistoryDetails
            key="workhistory"
            setShowDetails={setShowDetails}
            setCurrentWork={setCurrentWork}
            workInfo={currentWork}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WorkHistory;
