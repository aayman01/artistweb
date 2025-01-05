"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY && scrollY > 50) {
      setIsVisible(false); // Hide navbar when scrolling down
    } else {
      setIsVisible(true); // Show navbar when scrolling up
    }
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -90, // Adjust height of navbar if needed
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [isVisible, controls]);

  return (
    <motion.div
      animate={controls}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        lastScrollY ? "bg-[#1111] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center py-6 px-8">
        {/* Left Section */}
        <div className="text-2xl font-bold pl-9">
          <div className="">
            <span className="">
              <svg viewBox="0 0 64.06 32" width="64.05999755859375" height="32">
                <rect id="line1" x="12.31" width="6.78" height="32" />
                <polygon
                  id="angle1"
                  points="0 32 6.78 32 12.31 0 5.53 0 0 32"
                />
                <rect id="line2" x="25.88" width="6.78" height="32" />
                <polygon
                  id="angle2"
                  points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
                />
                <rect id="line3" x="44.97" width="6.78" height="32" />
                <polygon
                  id="angle3"
                  points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <Button className="relative bg-transparent text-black hover:bg-transparent hover:text-black border border-[#545cff] rounded-full px-5 py-4 text-lg font-normal font-Onest overflow-hidden group transform transition-all duration-500 w-[150px] h-[40px] shadow-none">
            {/* Initial Text */}
            <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
              Get in touch
            </span>
            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
              Get in touch
            </span>
          </Button>
          <Button className="relative bg-transparent text-black hover:bg-transparent hover:text-black border border-black rounded-full px-5 py-4 text-2xl font-semibold font-Onest overflow-hidden group transform transition-all duration-500 w-[40px] h-[40px] shadow-none ">
            {/* Initial Text */}
            <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
              =
            </span>
            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
              =
            </span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;

