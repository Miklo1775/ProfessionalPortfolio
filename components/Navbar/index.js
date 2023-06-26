import classes from "./Navbar.module.css";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ setPage, currentPage, previousPage }) => {
  const [hoverHome, setHoverHome] = useState(false);
  const [hoverProjects, setHoverProjects] = useState(false);
  const [hoverWork, setHoverWork] = useState(false);
  const [hoverSkills, setHoverSkills] = useState(false);
  const [hoverContact, setHoverContact] = useState(false);

  const [hover, setHover] = useState("");
  useEffect(() => {
    if (hover === "home") {
      setHoverHome(true);
      setHoverProjects(false);
      setHoverWork(false);
      setHoverSkills(false);
      setHoverContact(false);
    } else if (hover === "projects") {
      setHoverHome(false);
      setHoverProjects(true);
      setHoverWork(false);
      setHoverSkills(false);
      setHoverContact(false);
    } else if (hover === "work") {
      setHoverHome(false);
      setHoverProjects(false);
      setHoverWork(true);
      setHoverSkills(false);
      setHoverContact(false);
    } else if (hover === "proficiencies") {
      setHoverHome(false);
      setHoverProjects(false);
      setHoverWork(false);
      setHoverSkills(true);
      setHoverContact(false);
    } else if (hover === "contact") {
      setHoverHome(false);
      setHoverProjects(false);
      setHoverWork(false);
      setHoverSkills(false);
      setHoverContact(true);
    } else {
      setHoverHome(false);
      setHoverProjects(false);
      setHoverWork(false);
      setHoverSkills(false);
      setHoverContact(false);
    }
  }, [hover]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.aboutnavcontainer}
    >
      {/* <AnimatePresence mode="wait"> */}
      <Button
        onHoverStart={() => {
          setHover("home");
        }}
        onHoverEnd={() => {
          setHover("");
        }}
        href="/"
      >
        {!hoverHome && (
          <motion.img
            key="home1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            src="/images/nav-icons/home1.png"
            height="40px"
            width="40px"
          />
        )}
        {hoverHome && (
          <motion.p
            key="home2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            // exit={{
            //   scale: 0,
            //   transition: {
            //     duration: 0.3,
            //   },
            // }}
          >
            Home
          </motion.p>
        )}
      </Button>

      <Button
        onHoverStart={() => {
          setHover("projects");
        }}
        onHoverEnd={() => {
          setHover("");
        }}
        href="/Projects"
      >
        {!hoverProjects && (
          <motion.img
            key="project"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            src="/images/nav-icons/project1.png"
            height="40px"
            width="40px"
          />
        )}
        {hoverProjects && (
          <motion.p
            key="project1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            Projects
          </motion.p>
        )}
      </Button>

      <Button
        onHoverStart={() => {
          setHover("work");
        }}
        onHoverEnd={() => {
          setHover("");
        }}
        href="/WorkHistory"
      >
        {!hoverWork && (
          <motion.img
            key="workski"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            src="/images/nav-icons/briefcase.png"
            height="40px"
            width="40px"
          />
        )}
        {hoverWork && (
          <motion.p
            key="work1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            Work History
          </motion.p>
        )}
      </Button>
      <Button
        onHoverStart={() => {
          setHover("proficiencies");
        }}
        onHoverEnd={() => {
          setHover("");
        }}
        href="/Proficiencies"
      >
        {!hoverSkills && (
          <motion.img
            key="proficienski"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            src="/images/nav-icons/skills.png"
            height="40px"
            width="40px"
          />
        )}
        {hoverSkills && (
          <motion.p
            key="proficienski1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            Proficiencies
          </motion.p>
        )}
      </Button>
      <Button
        onHoverStart={() => {
          setHover("contact");
        }}
        onHoverEnd={() => {
          setHover("");
        }}
        href="/Contact"
      >
        {!hoverContact && (
          <motion.img
            key="contactski"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
            src="/images/nav-icons/envelope.png"
            height="40px"
            width="40px"
          />
        )}
        {hoverContact && (
          <motion.p
            key="contactski1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{
              scale: 0,
            }}
            transition={{ duration: 0.1 }}
          >
            Contact
          </motion.p>
        )}
      </Button>
      {/* </AnimatePresence> */}
    </motion.div>
  );
};

export default Navbar;
