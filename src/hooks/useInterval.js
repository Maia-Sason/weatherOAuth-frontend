import { useState, useEffect, useRef } from "react";
// https://stackoverflow.com/questions/53395147/use-react-hook-to-implement-a-self-increment-counter
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up interval
  useEffect(() => {
    const number = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(number);
  }, [delay]);
};
