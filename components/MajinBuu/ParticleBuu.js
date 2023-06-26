import ParticleImage, { forces } from "react-particle-image";

import { motion } from "framer-motion";
import { useState } from "react";

const round = (n, step = 20) => Math.ceil(n / step) * step;

const STEP = 20;

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    console.log(pixel);
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);

    return `rgba(
          ${round(pixel.r, STEP)},
          ${round(pixel.g, STEP)},
          ${round(pixel.b, STEP)},
          ${round(pixel.a, STEP) / 255}

    `;

    // return `rgba(255, 255, 255, 1)`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;

    // return 3 + (magnitude / 255) * 1.5;
    return 10;
  },
  mass: () => 50,
  friction: () => 0.2,
  // initialPosition: ({ canvasDimensions }) => {
  //   return new Vector(canvasDimensions.width, canvasDimensions.height);
  // },
};

const force = (x, y) => {
  // return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  return forces.disturbance(x, y, 20);
};

const ParticleOrb = ({ url, height, width }) => {
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      style={{ overflow: "visible" }}
      onHoverStart={() => {
        setBgColor("purple");
      }}
      onHoverEnd={() => setBgColor("#ffffff")}
    >
      <ParticleImage
        src="/images/buu/particles.png"
        particleOptions={particleOptions}
        scale={0.18}
        entropy={500}
        maxParticles={1000}
        backgroundColor={bgColor}
        style={{
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          overflow: "visible",
        }}
      />
    </motion.div>
  );
};

export default ParticleOrb;
