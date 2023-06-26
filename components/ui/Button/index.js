import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import classes from "./Button.module.css";
import { aboutNavVar } from "@/components/variants";
import Link from "next/link";

const Button = (props) => {
  const [isSmall, setIsSmall] = useState(null);
  const [isBig, setIsBig] = useState(null);
  const [width, setWindowWidth] = useState();

  const [isSelected, setIsSelected] = useState(false);
  const buttonHandler = props.handler;

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const updateWidth = () => {
    const width = window.innerWidth;
    setWindowWidth(width);

    if (width > 676) {
      setIsBig(true);
      setIsSmall(false);
    } else if (width <= 676) {
      setIsSmall(true);
      setIsBig(false);
    }
  };

  useEffect(() => {
    if (props.currentPage === +props.pageNum) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [props.currentPage]);

  const checkWidth = () => {
    if (isBig) {
      return "visible";
    } else if (isSmall) {
      return "visible2";
    }
  };

  return (
    <motion.div
      // // variants={aboutNavVar}
      // initial={{
      //   scale: 0,
      // }}
      // animate={{
      //   scale: 1,
      // }}
      onClick={buttonHandler}
      className={classes.buttoncontainer}
      onHoverStart={props.onHoverStart}
      onHoverEnd={props.onHoverEnd}
    >
      <Link href={`${props.href}`} className={classes.link}>
        <AnimatePresence mode="popLayout">{props.children}</AnimatePresence>
      </Link>
    </motion.div>
  );
};

export default Button;
