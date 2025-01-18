


"use client";
import { useEffect, useState } from "react";

import HeroSection from '@/components/hero';
import VisionMissionEx from '@/components/visionmission2';

const MultiLayerParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundColor: "#000000",
          transform: `translateY(${offset * 0.1}px)`, 
        }}
      ></div>
      {/* <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/bgwhite.png')",
          transform: `translateY(${offset * 0.3}px)`, 
        }}
      ></div> */}
      
       <div
        className="absolute inset-0 bg-cover bg-no-repeat lg:-mt-24"
        style={{
          backgroundImage: "url('/bgwhite3.jpeg')",
          objectFit: 'contain',
          transform: `translateY(${offset * 0.4}px)`, 
        }} 
      ></div> 

     
      <div className="relative z-10 text-center ">
         <HeroSection/>
         <VisionMissionEx/> </div>
    </div>
  );
};

export default MultiLayerParallax;
