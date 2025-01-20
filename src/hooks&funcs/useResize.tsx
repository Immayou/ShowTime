import React, { useState, useEffect } from "react";

const useResize = (myRef: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (myRef.current) {
      setWidth(myRef.current.offsetWidth);
      setHeight(myRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return { width, height };
};

export default useResize;
