import { motion } from "framer-motion";
import { pathVar } from "@/components/variants";

import classes from "./Envelope.module.css";

const Envelope = () => {
  return (
    <svg
      fill="white"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      width="75px"
      height="75px"
      viewBox="0 0 53.727 53.727"
      // xml:space="preserve"
      className={classes.envelopeSVG}
    >
      <g>
        <g>
          <motion.path
            variants={pathVar}
            initial="hidden"
            animate="visible"
            d="M25.044,24.134c0.848,0.431,2.305,0.289,3.055-0.297L49.16,7.399c-0.938-0.648-2.149-1.057-3.461-1.314
			c0,0-12.807-0.539-20.843,0.242c-8.034,0.78-20.499,3.775-20.499,3.775C3.103,10.622,2,11.253,1.209,12.058L25.044,24.134z"
          />
          <motion.path
            variants={pathVar}
            initial="hidden"
            animate="visible"
            d="M53.456,40.312c0.219-0.562,0.318-1.188,0.249-1.911l-2.717-27.96c-0.015-0.149-0.059-0.277-0.085-0.417l-16.9,13.191
			L53.456,40.312z"
          />
          <motion.path
            variants={pathVar}
            initial="hidden"
            animate="visible"
            d="M31.483,25.179l-1.451,1.134c-0.857,0.667-1.976,1.07-3.121,1.182c-1.145,0.11-2.318-0.068-3.287-0.56l-1.63-0.826
			L5.856,47.077c0.657,0.263,1.38,0.47,2.155,0.629c0,0,13.446,0.434,20.83-0.365c8.272-0.848,20.511-3.651,20.511-3.651
			c0.74-0.321,1.411-0.667,2.001-1.046L31.483,25.179z"
          />
          <motion.path
            variants={pathVar}
            initial="hidden"
            animate="visible"
            d="M0.008,14.969c0.001,0.142-0.017,0.274-0.002,0.423l2.717,27.961c0.07,0.722,0.295,1.32,0.626,1.835l15.796-20.522
			L0.008,14.969z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Envelope;