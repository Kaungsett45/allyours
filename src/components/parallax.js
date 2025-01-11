"use client"
import { useEffect, useState } from "react";

const Parallax = ({ children, imageUrl }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
  //   <>
  //   <div
  //     className=" bg-cover bg-no-repeat"
  //     style={{
  //       backgroundImage: "url('/bgwhite2.png')",
  //       backgroundPosition: `center ${offset * -0.8}px`,
  //       height:"120vh",
  //     }}
  //   ><style jsx>{`
  //   @media (min-width: 826px) {
  //     div {
  //       background-position: center -120px; 
  //     }
  //   }
  // `}</style>
  //     {children}
  //   </div>
  //   </>
<>
  <div
    className="relative overflow-hidden"
    style={{
    
    }}
  >
    <div
      className="absolute inset-0 bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/bgwhite2.png')",
        transform: `translateY(${offset * 0.5}px)`, // Parallax effect
        willChange: "transform",
       // Ensures no gaps at the bottom
        backgroundPosition: "center top",
      }}
    ></div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
</>



  );
};

export default Parallax;
