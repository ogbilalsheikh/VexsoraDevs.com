import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DotsAnimate = ({
  top = 0,
  left = 0,
  right = "auto",
  bottom = "auto",
}) => {
  const orbitRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(orbitRef.current, {
      rotation: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
      transformOrigin: "center center",
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className="absolute w-[50px] h-[30px] pointer-events-none"
      style={{
        top,
        left,
        right,
        bottom,
      }}
    >
      <div ref={orbitRef} className="relative w-full h-full">
        <span className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-blue-400 rounded-full"></span>

        <span className="absolute left-[12px] top-[5px] w-[4px] h-[4px] bg-blue-400 rounded-full"></span>
      </div>
    </div>
  );
};

export default DotsAnimate;
