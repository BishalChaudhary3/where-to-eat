"use client";

import { useEffect, useState } from "react";

const foodEmojis = [
  "🍕","🍔","🍟","🥟","🍣","🍩","🌯","🍜",
  "🍗","🥗","🍤","🌮","🥪","🍞","🍰","🍦",
  "🍿","🥞","🍙","🍝","🍛","🍲","🍡","🥨"
];

export default function FloatingBackground() {
  const [items, setItems] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Generate 35 floating items
    const generated = [];
const MIN_DISTANCE = 12; // percentage spacing

while (generated.length < 30) {
  const size = 20 + Math.random() * 30;
  const newItem = {
    emoji:
      foodEmojis[Math.floor(Math.random() * foodEmojis.length)],
    top: Math.random() * 90,
    left: Math.random() * 90,
    size,
    opacity: 0.2 + size / 150,
    duration: 8 + Math.random() * 6,
    delay: Math.random() * 5,
  };

  const isTooClose = generated.some((item) => {
    const dx = item.left - newItem.left;
    const dy = item.top - newItem.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < MIN_DISTANCE;
  });

  if (!isTooClose) {
    generated.push(newItem);
  }
}
    setItems(generated);

    const handleMouseMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {items.map((item, index) => {
        const moveX =
          screen.width > 0
            ? (mouse.x / screen.width - 0.5) * 15
            : 0;

        const moveY =
          screen.height > 0
            ? (mouse.y / screen.height - 0.5) * 15
            : 0;

        return (
          <div
            key={index}
            className="absolute"
            style={{
              top: `${item.top}%`,
              left: `${item.left}%`,
              fontSize: `${item.size}px`,
              opacity: item.opacity,
              transform: `translate(${moveX}px, ${moveY}px)`,
              animation: `floatSlow ${item.duration}s ease-in-out infinite`,
              animationDelay: `${item.delay}s`,
            }}
          >
            {item.emoji}
          </div>
        );
      })}
    </div>
  );
}