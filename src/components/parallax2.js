"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0); // Track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[400vh] scroll-snap-y scroll-smooth overflow-y-scroll">
      {/* Parallax Layers */}
      <div
        className="absolute inset-0 h-screen bg-blue-500"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          zIndex: 1,
        }}
      ></div>
      <div
        className="absolute inset-0 h-screen bg-red-500"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
          zIndex: 2,
        }}
      ></div>
      <div
        className="absolute inset-0 h-screen bg-green-500"
        style={{
          transform: `translateY(${scrollY * 0.6}px)`,
          zIndex: 3,
        }}
      ></div>

      {/* Scroll Snapping Content */}
      <div className="relative z-10">
        {/* Section 1 */}
        <div className="h-screen flex items-center justify-center scroll-snap-start bg-transparent">
          <h1 className="text-5xl font-bold text-white">Scroll to See the Parallax</h1>
        </div>

        {/* Section 2 */}
        <div className="h-screen flex items-center justify-center bg-gray-100 scroll-snap-start">
          <h2 className="text-3xl">Keep Scrolling!</h2>
        </div>

        {/* Section 3 */}
        <div className="h-screen flex items-center justify-center bg-black text-white scroll-snap-start">
          <h2 className="text-3xl">You’ve reached the end!</h2>
        </div>
      </div>
    </div>
  );
}
