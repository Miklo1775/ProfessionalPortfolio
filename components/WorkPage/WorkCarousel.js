import classes from "./workCarousel.module.css";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkImage from "./WorkImage";

import { v4 } from "uuid";

const WorkCarousel = ({ images }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [direction, setDirection] = useState();
  const nextRef = useRef(null);

  const prevHandler = () => {
    if (currIndex > 0) {
      const newCurr = currIndex - 1;
      setCurrIndex(newCurr);
      setDirection("backward");
    }
  };

  const nextHandler = () => {
    if (currIndex < images.length) {
      const newCurr = currIndex + 1;
      setCurrIndex(newCurr);
      setDirection("forward");
    }
  };

  return (
    <motion.div className="carouselContainer">
      <AnimatePresence mode="wait">
        {images && (
          <motion.div key={v4()}>
            {images.map((image, i) => {
              return (
                <motion.div key={v4()}>
                  {currIndex === i && (
                    <WorkImage
                      src={image}
                      alt={image}
                      direction={direction}
                      nextHandler={nextHandler}
                      prevHandler={prevHandler}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="buttonContainer">
        {currIndex > 0 && (
          <button
            onClick={prevHandler}
            style={{ color: "black", height: "20px", width: "50px" }}
            className="buttonPrev"
          >
            Previous
          </button>
        )}
        {images && currIndex < images.length - 1 && (
          <button
            onClick={nextHandler}
            style={{
              color: "black",
              height: "20px",
              width: "50px",
              padding: "0px",
            }}
            className="buttonNext"
            ref={nextRef}
          >
            Next
          </button>
        )}
      </div>
      <style jsx>
        {`
          .carouselContainer {
            height: 40vh;
            width: 100%;
            overflow: scroll;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            margin-top: 13%;
          }

          .images {
            position: relative;
            height: 100%;
            width: 100%;
          }

          .carouselContainer::-webkit-scrollbar {
            display: none;
          }

          .buttonContainer {
            position: relative;
            display: flex;
            justify-content: space-between;
            height: 10%;
            width: 100%;
            align-items: center;
          }

          .buttonPrev {
            position: absolute;
            bottom: 0%;
            left: 0%;
          }

          .buttonNext {
            position: absolute;
            bottom: 0%;
            right: 0%;
          }
        `}
      </style>
    </motion.div>
  );
};

export default WorkCarousel;
