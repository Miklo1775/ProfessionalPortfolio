import { motion, useDragControls } from "framer-motion";
import { workImageVar } from "@/components/variants";
import { useState } from "react";
import classes from "./WorkImage.module.css";

const WorkImage = ({ src, alt, direction, nextHandler, prevHandler }) => {
  const controls = useDragControls();
  const [whichDirection, setWhichDirection] = useState(direction);
  const setDirection = whichDirection === "forward" ? "right" : "left";

  const onDragEndHandler = (dragInfo) => {
    const distance = dragInfo.offset.x;
    const swipeRegister = 50;

    if (distance > swipeRegister) {
      prevHandler();
    } else if (distance < -swipeRegister) {
      nextHandler();
    }
  };
  return (
    <motion.div
      variants={workImageVar}
      initial="hidden"
      animate="visible"
      exit={setDirection}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(a, dragInfo) => {
        onDragEndHandler(dragInfo);
        // console.log(a, "A");
        // console.log(dragInfo, "dragINfo");
      }}
      transition={{ duration: 0.5, velocity: 0 }}
      className={classes.imageContainer}
    >
      <motion.img
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(a, dragInfo) => {
          onDragEndHandler(dragInfo);
        }}
        src={src}
        alt={alt}
        className={classes.image}
      />
    </motion.div>
  );
};

export default WorkImage;
