import React from "react";

const ShadowBubble = ({
  position = "top-0 left-0",
  size = "w-40 h-40",
  blur = "blur-3xl",
  colors = ["#3b82f6", "#60a5fa", "#2563eb"],
  opacity = 0.4,
  duration = 3,
  hiddenOn = "", 
}) => {
  const gradient = `linear-gradient(135deg, ${colors.join(", ")})`;

  return (
    <div
      className={`absolute ${position} ${size} rounded-full filter ${blur} opacity-[${opacity}] animate-pulse ${hiddenOn && `${hiddenOn}:hidden`}`}
      style={{ background: gradient, animationDuration: `${duration}s` }}
    />
  );
};

export default ShadowBubble;
