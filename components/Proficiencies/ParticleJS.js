import ParticleImage, { forces } from "react-particle-image";

import { useState, useRef } from "react";

const round = (n, step = 20) => Math.ceil(n / step) * step;

const STEP = 20;

const particleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
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

    // return 3 - (magnitude / 255) * 1.5;
    return 3;
  },
  mass: () => 10,
  friction: () => 0.5,
  initialPosition: ({ canvasDimensions }) => {
    // return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const force = (x, y) => {
  // return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  return forces.disturbance(x, y, 20);
};

const ParticleProficiency = ({
  url,
  width,
  height,
  scale,
  maxParticles,
  time,
}) => {
  const containerRef = useRef(null);
  const [entropy, setEntropy] = useState(100);
  const [prevEntropy, setPrevEntropy] = useState();
  const [particleOption, setParticleOption] = useState(particleOptions);

  const isNext = url === "/images/next.png";

  const clickRef = () => {
    setPrevEntropy(entropy);
    setEntropy(0);
  };

  const clearRef = () => {
    setEntropy(100);
  };

  setTimeout(() => {
    setEntropy(5);
  }, time);

  return (
    <div
      ref={containerRef}
      onMouseEnter={clickRef}
      onMouseLeave={clearRef}
      className="particle-container"
    >
      <ParticleImage
        src={url}
        // width={isNext && innerWidth / 2}
        // height={isNext && innerHeight / 2}
        scale={scale}
        entropy={entropy}
        maxParticles={maxParticles}
        particleOptions={particleOption}
        // particleOptions={particleOptions}
        mouseMoveForce={force}
        touchMoveForce={force}
        backgroundColor={!isNext ? "transparent" : "#ffffff"}
        style={{
          borderRadius: "50%",
          width,
          height,
          overflow: "visible",
        }}
        // className={classes.img}
      />
    </div>
  );
};

export default ParticleProficiency;
