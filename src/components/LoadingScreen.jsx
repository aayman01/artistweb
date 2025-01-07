"use client";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <>
      {/* Main Black Background */}
      <motion.div 
        className="fixed inset-0 z-[60] bg-black"
      >
        {/* SVG Animation Container */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center"
        >
          <motion.svg
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewBox="0 0 64.06 32"
            width="120"
            height="60"
          >
            <motion.rect
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              id="line1"
              x="12.31"
              width="6.78"
              fill="white"
            />
            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              id="angle1"
              points="0 32 6.78 32 12.31 0 5.53 0 0 32"
              fill="white"
            />
            <motion.rect
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
              id="line2"
              x="25.88"
              width="6.78"
              fill="white"
            />
            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              id="angle2"
              points="32.66 32 39.44 32 44.97 0 38.19 0 32.66 32"
              fill="white"
            />
            <motion.rect
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
              id="line3"
              x="44.97"
              width="6.78"
              fill="white"
            />
            <motion.polygon
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              id="angle3"
              points="57.28 0 51.75 32 58.53 32 64.06 0 57.28 0"
              fill="white"
            />
          </motion.svg>
        </motion.div>

        {/* Black Overlay sliding right to left */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 1, 
            delay: 2,
            ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth motion
          }}
          className="fixed inset-0 z-[55] bg-black"
        />
      </motion.div>
    </>
  );
};

export default LoadingScreen; 