import { useEffect, useRef, useState } from "react";

export function useCounter() {
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1000); // default 1 second
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, speed);
    }

    return () => clearInterval(intervalRef.current);
  }, [running, speed]);

  const start = () => setRunning(true);
  const stop = () => setRunning(false);
  const reset = () => {
    setRunning(false);
    setCount(0);
  };

  return { count, start, stop, reset, running, setSpeed };
}
