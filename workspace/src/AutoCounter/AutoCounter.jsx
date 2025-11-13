import React, { useRef, useEffect, useState } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const intervelRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervelRef.current = setInterval(() => {
        setCount((p) => p + 1);
      }, 1000);
    }

    return () => clearInterval(intervelRef.current);
  }, [running]);

  const start = () => setRunning(true);
  const stop = () => {
    setRunning(false);
    clearInterval(intervelRef.current);
  };
  const reset = () => {
    setRunning(false);
    clearInterval(intervelRef.current);
    setCount(0);
  };
  return (
    <div style={{ textAlign: "center", marginTop: " 50px" }}>
      <h1>Smart Counter</h1>
      <h2 style={{ fontSize: "60px" }}>{count}</h2>
      <button onClick={start} style={btnStyle} disabled={running}>
        Start
      </button>
      <button onClick={stop} style={btnStyle} disabled={!running}>
        {" "}
        stop
      </button>
      <button onClick={reset} style={btnStyle}>
        {" "}
        reset
      </button>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  margin: "20px",
  borderRadius: " 25%",
 
  cursor: "pointer",

  
};

export default AutoCounter;
