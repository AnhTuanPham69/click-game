import { useState, useEffect } from "react";

function useDuration() {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (startTime !== null) {
          setDuration(Date.now() - startTime);
        }
      }, 100);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, startTime]);

  const startDuration = () => {
    setStartTime(Date.now());
    setIsRunning(true);
  };

  const stopDuration = () => {
    setIsRunning(false);
  };

  const resetDuration = () => {
    setStartTime(null);
    setDuration(0);
    setIsRunning(false);
  };

  return { duration, startDuration, stopDuration, resetDuration, isRunning };
}

export default useDuration;
