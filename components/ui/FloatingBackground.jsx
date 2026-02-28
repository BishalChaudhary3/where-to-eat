"use client";

import { useEffect, useState } from "react";

const foods = ["🍕", "🍔", "🍟", "🥟", "🍣", "🍩", "🌯", "🍜"];

export default function FloatingBackground() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [screen, setScreen] = useState({ width: 0, height: 0 });
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const generatedPositions = foods.map(() => ({
      top: Math.random() * 90,
      left: Math.random() * 90,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 4,
    }));

    setPositions(generatedPositions);

    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {positions.map((pos, index) => {
        const moveX =
          screen.width > 0
            ? (mouse.x / screen.width - 0.5) * 10
            : 0;

        const moveY =
          screen.height > 0
            ? (mouse.y / screen.height - 0.5) * 10
            : 0;

        return (
          <div
            key={index}
            className="absolute text-4xl opacity-30 blur-[1px]"
            style={{
              top: `${pos.top}%`,
              left: `${pos.left}%`,
              transform: `translate(${moveX}px, ${moveY}px)`,
              animation: `floatSlow ${pos.duration}s ease-in-out infinite`,
              animationDelay: `${pos.delay}s`,
            }}
          >
            {foods[index]}
          </div>
        );
      })}
    </div>
  );
}