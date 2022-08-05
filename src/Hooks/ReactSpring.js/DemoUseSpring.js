import React from "react";
import { useSpring, animated } from "react-spring";

const DemoUseSpring = () => {
  const animationProps = useSpring({
    color: "green",
    from: { color: "white" },
    config: { duration: 2000 },
  });

  const count = useSpring({ number: 200, from: { number: 0 } });

  return (
    <div>
      <animated.span>{count.number}</animated.span>
    </div>
  );
};

export default DemoUseSpring;
