import classes from "./WhoAmI.module.css";
import ParticleImage, { ParticleOptions, Vector, forces, ParticleForce } from "react-particle-image";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { pageVar } from "../variants";

const round = (n, step = 20) => Math.ceil(n / step) * step;

const STEP = 1;

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;

    return true;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);

    return `rgba(
      ${round(pixel.r, STEP)},
      ${round(pixel.g, STEP)},
      ${round(pixel.b, STEP)},
      ${round(pixel.a, STEP)}
      
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;

    return 3.5;
  },
  mass: () => 100,
  friction: () => 0.34,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const force = (x, y) => {
  // return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  return forces.disturbance(x, y, 20);
};

const WhoAmI = () => {
  const [innerHeight, setInnerHeight] = useState();

  const [innerWidth, setInnerWidth] = useState();

  const [entropy, setEntropy] = useState(500);
  const [switchImage, setSwitchImage] = useState(false);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
    setInnerWidth(window.innerWidth);

    setTimeout(() => {
      setEntropy(50);
    }, 2000);

    // setTimeout(() => {
    //   setEntropy(1000);
    // }, 2900);

    setTimeout(() => {
      setSwitchImage(true);
    }, 4000);
  }, []);

  return (
    <motion.div
      variants={pageVar}
      initial="offscreen"
      animate="onscreen"
      exit="exit"
      className={classes.contentContainer}
    >
      <div className={classes.heading}>
        <h1 className={classes.title}>Who Am I?</h1>
      </div>
      <AnimatePresence mode="popLayout">
        {!switchImage && (
          <motion.div
            key="home-image"
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 4,
              },
            }}
            style={{ position: "absolute", top: -35 }}
          >
            <ParticleImage
              src={"/images/me.png"}
              // width={innerWidth / 2}
              // height={innerHeight / 2}
              scale={0.3}
              entropy={entropy}
              maxParticles={2000}
              particleOptions={particleOptions}
              // mouseMoveForce={force}
              // touchMoveForce={force}
              backgroundColor="transparent"
              style={{
                borderRadius: "50%",
                width: "450px",
                height: "450px",
                overflow: "visible",
              }}
              // className={classes.img}
            />
          </motion.div>
        )}
        {switchImage && (
          <motion.img
            key="switched-image"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 5, opacity: 1, transition: { duration: 2 } }}
            src="images/me.png"
            height="260px"
            width="400px"
            // style={{ position: "fixed" }}
          />
        )}
      </AnimatePresence>
      <div className={classes.body}>
        <p className={classes.paragraph}>I am a baker, veteran, and a Fullstack developer. </p>
        <p className={classes.paragraph}>
          During my plentiful years of baking, I enjoyed creating different pastries and I also really enjoyed the
          ability to pick up different techniques very quickly. I’ve lead a few kitchens ensuring that all products are
          cooked and presented to standard.
        </p>
        <p className={classes.paragraph}>
          As a former sergeant in the Army, I was a 13B cannon crewmember and learned a lot about integrity, leadership,
          and most importantly how to care and guide other human beings.
        </p>
        <p className={classes.paragraph}>
          The reason I am able to do different things is because I love to learn. I found out about web development and
          fell in love with all the troubleshooting, debugging, and the constantly learning.
        </p>
      </div>
    </motion.div>
  );
};

export default WhoAmI;
