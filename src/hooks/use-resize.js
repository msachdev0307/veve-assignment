import { useState, useEffect } from "react";

const useResize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const resize = setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return size;
};

export default useResize;
