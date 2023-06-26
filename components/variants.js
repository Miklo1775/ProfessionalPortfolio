export const svgVar = {
  hidden: {
    border: "none",
  },
  visible: {
    // border: "1px solid white",
    transition: { duration: 5 },
  },
  exit: {
    // backgroundColor: "white",
    transition: { duration: 1 },
  },
};

export const pathVar = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    fillOpacity: 1,
    opacity: 1,
    pathLength: 1,
    fill: "#ffffff",
    stroke: "#ffffff",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visibleWhite: {
    fillOpacity: 1,
    opacity: 1,
    pathLength: 1,
    fill: "#ffffff",
    stroke: "#000000",
    strokeOpacity: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visibleJavascript: {
    fillOpacity: 1,
    opacity: 1,
    pathLength: 1,
    fill: "#000000",
    stroke: "#ffffff",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  visibleReact: {
    fillOpacity: 1,
    opacity: 1,
    fill: ["#ffffff", "#000000"],
    // stroke: "blue",
    strokeWidth: "10px",
    pathLength: [1, 0, 0],
    transition: {
      fill: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      },
      pathLength: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 4,
      },
    },
  },
  exit: {
    pathLength: [1, 0],
    fillOpacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const pageVar = {
  offscreen: {
    opacity: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const sentenceVar = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      // delay: 5,
      staggerChildren: 0.008,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: -0.008,
    },
  },
};

export const letterVar = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -50,
  },
};

export const envelopeVar = {
  hidden: {
    scale: 0.5,
    backgroundColor: "#ffffff",
    rotate: -90,
    opacity: 1,
    borderRadius: "50%",
    transition: {
      duration: 1,
    },
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    y: -1000,
    color: "#000000",
    backgroundColor: "#000000",
    transition: {
      duration: 1,
      y: {
        delay: 1,
      },
    },
  },
};

export const formVar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  visible2: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const navButtonVar = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
  selected: {
    scale: [1, 1.5],
    color: "#ffffff",
    // y: [10, -10],
    textShadow: ["#000 0px 0px", "#000 10px 0px"],
    transition: {
      scale: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1,
      },
      textShadow: {
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.3,
        duration: 1,
      },
    },
  },
};

export const quoteDisplayVar = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
  exit: {},
};

export const quoteVar = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: [1, 1.5, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 2,
      },
    },
  },
};

export const aboutNavVar = {
  hidden: {
    height: "100%",
  },
  visible: {
    height: "100%",
    borderRadius: "0px 0px 100px 100px",
    transition: {
      duration: 0.5,
    },
  },
  visible2: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    filter: "drop-shadow(0px 0px 0px #000000)",
  },
  right: {
    scale: 1.2,
    rotate: [0, 360],
    // height: "125%",
    // width: "100%",
    color: ["#ffffff", "#fca311"],
    y: -30,
    transition: {
      height: {
        duration: 0.5,
      },
      color: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
  left: {
    scale: 1.2,
    rotate: [0, -360],
    // height: "10%",
    color: ["#ffffff", "#fca311"],
    y: -30,
    transition: {
      height: {
        duration: 0.5,
      },
      color: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
  leftSmall: {
    scale: 1.2,
    width: "100%",
    color: ["#ffffff", "#fca311"],
    filter: "drop-shadow(0px 0px 10px #fca311)",
    transition: {
      color: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
  rightSmall: {
    scale: 1.2,
    width: "100%",
    color: ["#ffffff", "#fca311"],
    filter: [
      "drop-shadow(0px 0px 1px #fca311)",
      "drop-shadow(0px 0px 1px #eefe27",
    ],

    transition: {
      filter: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1,
        ease: "easeInOut",
      },
      color: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
  },
  hover: {
    height: "125%",
  },
  hover2: {
    scale: 1.2,
    filter: "drop-shadow(0px 0px 0px #eefe27)",
  },
};

export const workImageVar = {
  hidden: {
    x: -3000,
  },
  visible: {
    x: 0,
  },
  right: {
    x: 3000,
  },
  left: {
    x: -3000,
  },
};
