import React, { useState, useEffect } from "react";

const DemoHook = () => {
  const [number, setNumber] = useState(0);
  const count = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button className="btn bt-success" onClick={count}>
        +
      </button>
    </div>
  );
};

export default DemoHook;
