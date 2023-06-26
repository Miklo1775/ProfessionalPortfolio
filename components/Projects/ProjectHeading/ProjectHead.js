import { useState, useEffect } from "react";
import SmallProjectHeading from "./SmallProjectHeading";
import BigProjectHeading from "./BigProjectHeading";

const ProjectHead = () => {
  const [isSmall, setIsSmall] = useState(false);
  const [isBig, setIsBig] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
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

  const updateWidth = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div>
      <div>{isBig && <BigProjectHeading />}</div>
      <div>{isSmall && <SmallProjectHeading />}</div>
    </div>
  );
};

export default ProjectHead;
