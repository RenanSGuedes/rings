import React, { useState } from "react";
import { useGesture } from "react-with-gesture";
import { useSpring, animated } from "react-spring";
import "./styles.css";

export default function Drag() {
  const [state, setState] = useState(true);
  const { a } = useSpring({
    from: { a: 0 },
    a: state ? 1 : 0,
    config: {
      duration: 100
    }
  });
  const [bind, { local }] = useGesture();
  const [x, y] = local;

  return (
    <div
      onClick={() => setState(!state)}
      className="fillball"
      {...bind()}
      style={{
        transform: `translate3d(${x}px,${y}px,0)`,
        background: a.interpolate(a => `rgba(255,0,0,${a})`)
      }}
    />
  );
}
