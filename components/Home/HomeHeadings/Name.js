import { useState, useEffect } from "react";
import BigName from "./BigName";
import SmallName from "./SmallName";

const Name = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (width > 900) {
      setIsBig(true);
      setIsSmall(false);
    } else if (width < 900) {
      setIsSmall(true);
      setIsBig(false);
    }
  }, [width]);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return (
    <>
      <div className="heading-div">{isSmall && <SmallName />}</div>
      <div>{isBig && <BigName />}</div>
    </>
  );
};

export default Name;
