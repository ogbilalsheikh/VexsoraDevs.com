import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BlinkDot = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        opacity: 0.45,
        scale: 0.8,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.fromTo(
        ringRef.current,
        { scale: 1, opacity: 0.6 },
        {
          scale: 2.2,
          opacity: 0,
          duration: 1.4,
          repeat: -1,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <span className="relative inline-flex w-[12px] h-[12px] shrink-0 items-center justify-center">
      <span
        ref={ringRef}
        className="absolute inset-0 rounded-full bg-blue-500"
      />
      <span
        ref={dotRef}
        className="relative w-[9px] h-[9px] rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.7)]"
      />
    </span>
  );
};

export default BlinkDot;