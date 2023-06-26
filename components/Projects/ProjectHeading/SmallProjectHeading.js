import { svgVar, pathVar } from "../../variants";
import { motion } from "framer-motion";

const SmallProjectHeading = () => {
  return (
    <div className="svg-container">
      <div className="headings-container">
        <motion.svg
          variants={svgVar}
          initial="hidden"
          animate="visible"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          width="220"
          height="40"
        >
          <motion.path
            variants={pathVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            fill="none"
            stroke="white"
            d="M1.91 33.16L1.91 5.16L5.90 5.16L9.98 28.14L14.06 5.16L18.07 5.16L18.07 33.16L15.35 33.16L15.35 11.43L11.46 33.16L8.52 33.16L4.79 11.43L4.79 33.16L1.91 33.16ZM29.08 31.48L22.36 14.16L25.80 14.16L30.57 27.68L34.77 14.16L38.24 14.16L30.39 36.11Q29.75 38.03 28.16 38.63L28.16 38.63Q27.42 38.93 23.44 38.93L23.44 38.93L23.44 36.04L25.16 36.04Q25.76 36.04 26.04 36.04L26.04 36.04Q27.38 36.04 27.79 34.96L27.79 34.96L29.08 31.48ZM62.79 33.16L62.79 5.16L69.80 5.16Q73.26 5.16 75.41 6.76L75.41 6.76Q78.24 8.95 78.24 13.05L78.24 13.05Q78.24 17.99 74.24 20.14L74.24 20.14Q72.34 21.17 69.88 21.17L69.88 21.17L66.00 21.17L66.00 33.16L62.79 33.16ZM69.55 8.20L66.00 8.20L66.00 18.13L69.55 18.13Q74.96 18.13 74.96 13.09L74.96 13.09Q74.96 10.14 72.56 8.89L72.56 8.89Q71.27 8.20 69.55 8.20L69.55 8.20ZM85.84 14.16L88.89 14.16L88.89 18.16Q92.34 14.51 96.29 13.40L96.29 13.40L96.29 16.88Q91.76 17.97 88.89 21.80L88.89 21.80L88.89 33.16L85.84 33.16L85.84 14.16ZM110.04 13.40L110.04 13.40Q113.71 13.40 115.80 16.64L115.80 16.64Q117.60 19.34 117.60 23.67L117.60 23.67Q117.60 26.93 116.52 29.39L116.52 29.39Q114.53 33.96 109.96 33.96L109.96 33.96Q106.43 33.96 104.32 30.96L104.32 30.96Q102.40 28.20 102.40 23.67L102.40 23.67Q102.40 18.79 104.61 16.00L104.61 16.00Q106.72 13.40 110.04 13.40ZM109.96 16.19L109.96 16.19Q107.81 16.19 106.60 18.44L106.60 18.44Q105.53 20.41 105.53 23.67L105.53 23.67Q105.53 26.68 106.41 28.57L106.41 28.57Q107.62 31.17 110 31.17L110 31.17Q112.19 31.17 113.40 28.93L113.40 28.93Q114.47 26.95 114.47 23.71L114.47 23.71Q114.47 20.33 113.36 18.40L113.36 18.40Q112.17 16.19 109.96 16.19ZM129.22 8.75L129.22 5.16L132.73 5.16L132.73 8.75L129.22 8.75ZM129.39 34.59L129.39 14.16L132.52 14.16L132.52 34.73Q132.52 38.93 128.44 38.93L128.44 38.93Q126.84 38.93 123.85 38.59L123.85 38.59L123.85 35.64Q125.63 36.05 127.79 36.05L127.79 36.05Q129.39 36.05 129.39 34.59L129.39 34.59ZM154.47 27.27L157.60 27.27Q155.86 33.95 150.04 33.95L150.04 33.95Q146.43 33.95 144.32 30.94L144.32 30.94Q142.40 28.18 142.40 23.67L142.40 23.67Q142.40 19.36 144.20 16.60L144.20 16.60Q146.31 13.40 150 13.40L150 13.40Q157.21 13.40 157.68 24.28L157.68 24.28L145.41 24.28Q145.64 31.27 150.08 31.27L150.08 31.27Q153.59 31.27 154.47 27.27L154.47 27.27ZM145.53 21.72L154.47 21.72Q153.83 16.07 150 16.07L150 16.07Q146.31 16.07 145.53 21.72L145.53 21.72ZM174.36 26.80L177.60 26.80Q176.04 33.96 170.04 33.96L170.04 33.96Q166.43 33.96 164.32 30.96L164.32 30.96Q162.40 28.20 162.40 23.67L162.40 23.67Q162.40 19.36 164.20 16.60L164.20 16.60Q166.31 13.40 170 13.40L170 13.40Q175.72 13.40 177.29 19.88L177.29 19.88L174.08 19.88Q173.24 16.19 170.04 16.19L170.04 16.19Q168.01 16.19 166.82 18.07L166.82 18.07Q165.53 20.08 165.53 23.67L165.53 23.67Q165.53 26.64 166.41 28.54L166.41 28.54Q167.60 31.17 170.04 31.17L170.04 31.17Q173.59 31.17 174.36 26.80L174.36 26.80ZM187.77 14.16L187.77 9.00L190.82 9.00L190.82 14.16L195.53 14.16L195.53 17.03L190.82 17.03L190.82 29.14Q190.82 30.51 192.34 30.51L192.34 30.51Q194.20 30.51 195.80 30.20L195.80 30.20L195.80 33.18Q193.44 33.52 191.74 33.52L191.74 33.52Q187.77 33.52 187.77 29.55L187.77 29.55L187.77 17.03L184.00 17.03L184.00 14.16L187.77 14.16ZM202.40 27.27L205.57 27.27Q206.09 31.27 210.23 31.27L210.23 31.27Q214.39 31.27 214.39 28.34L214.39 28.34Q214.39 26.93 213.44 26.15L213.44 26.15Q212.42 25.31 209.80 24.39L209.80 24.39L209.24 24.18Q206.35 23.18 205.04 22.19L205.04 22.19Q203.16 20.72 203.16 18.65L203.16 18.65Q203.16 16.17 205.33 14.67L205.33 14.67Q207.21 13.38 209.88 13.38L209.88 13.38Q215.92 13.38 216.88 18.87L216.88 18.87L213.77 18.87Q213.28 15.94 209.84 15.94L209.84 15.94Q206.17 15.94 206.17 18.54L206.17 18.54Q206.17 20.23 211.09 21.97L211.09 21.97Q213.87 22.95 215.08 23.83L215.08 23.83Q217.44 25.51 217.44 28.26L217.44 28.26Q217.44 30.94 215.33 32.50L215.33 32.50Q213.34 33.95 210.16 33.95L210.16 33.95Q203.18 33.95 202.40 27.27L202.40 27.27Z"
          />
        </motion.svg>
      </div>
      <motion.span
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          damping: 100,
          stiffness: 500,
        }}
        className="heading-underline"
      ></motion.span>
    </div>
  );
};

export default SmallProjectHeading;