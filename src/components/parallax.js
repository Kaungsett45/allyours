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
    <>
    <div
      className=" bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/bgwhite.png')",
        backgroundPosition: `center ${offset * -0.8}px`,
      
      }}
    ><style jsx>{`
    @media (min-width: 826px) {
      div {
        background-position: center -120px; 
      }
    }
  `}</style>
      {children}
    </div>
    </>
  );
};

export default Parallax;
