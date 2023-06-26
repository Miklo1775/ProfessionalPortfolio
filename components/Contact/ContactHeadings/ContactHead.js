import { useState, useEffect } from "react";
import BigContactHeading from "./BigContactHeading";
import SmallContactHeading from "./SmallContactHeading";
const ContactHead = () => {
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
    <>
      <div>{isBig && <BigContactHeading />}</div>
      <div>{isSmall && <SmallContactHeading />}</div>
    </>
  );
};

export default ContactHead;
