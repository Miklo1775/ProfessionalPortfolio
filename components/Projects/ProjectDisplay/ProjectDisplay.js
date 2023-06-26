import { useState, useEffect } from "react";
import supabase from "@/lib/supabaseClient";

import SingleProjectDisplay from "./SingleProjectDisplay";
import { v4 } from "uuid";
import { motion } from "framer-motion";

import classes from "./ProjectDisplay.module.css";

const sampleProject = [
  {
    id: 1,
    name: "Sample Project",
    description: "Just a Sample Project",
    image: "/images/Sample.jpg",
  },
  {
    id: 2,
    name: "Sample Project 2",
    description: "Just a Sample Project 2",
    image: "/images/Sample.jpg",
  },
];

const ProjectDisplay = () => {
  const [myProjects, setMyProjects] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("projects").select("*");
      setMyProjects(data);
    };
    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{ delay: 1.5 }}
      className={classes.projectsContainer}
    >
      {myProjects &&
        myProjects.map((project) => {
          return <SingleProjectDisplay key={v4()} project={project} />;
        })}
    </motion.div>
  );
};

export default ProjectDisplay;
