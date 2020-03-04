import React from "react";
import { useGesture } from "react-with-gesture";
import "./styles.css";

export default function Drag1() {
  const [bind, { local }] = useGesture();
  const [x, y] = local;

  return (
    <div
      className="fillball"
      {...bind()}
      style={{
        transform: `translate3d(${x}px,${y}px,0)`
      }}
    />
  );
}
