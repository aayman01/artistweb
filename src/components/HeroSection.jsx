"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Variants for motion animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
   <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[100vh] flex flex-col justify-center px-8 mt-16"
    >
      {/* Main heading */}
      <motion.div
        className="flex flex-col justify-left"
        variants={fadeUpVariants}
      >
        <h1 className="text-8xl font-semibold tracking-tight">
          <span className="text-black">Crafting </span>
          <span className="bg-gradient-text bg-clip-text text-transparent animate-gradientMove">
            Digital
          </span>
          <br />
          <span className="text-black">Experiences</span>
        </h1>
      </motion.div>

      <motion.div
        className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center pt-24"
        variants={fadeUpVariants}
      >
        <motion.div
          className="flex items-center gap-4"
          variants={fadeUpVariants}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl font-medium text-white">
            500
          </div>
          <span className="text-xl text-muted-foreground">
            Satisfied Customers
          </span>
        </motion.div>

        <motion.div
          className="flex justify-center items-center gap-7"
          variants={fadeUpVariants}
        >
          <div className="max-w-xl text-xl font-normal md:text-2xl">
            <motion.p variants={fadeUpVariants}>
              We build engaging websites,
            </motion.p>
            <motion.p variants={fadeUpVariants}>
              brands & innovative e-
            </motion.p>
            <motion.p variants={fadeUpVariants}>commerce solutions.</motion.p>
          </div>

          <motion.div variants={fadeUpVariants}>
            <Button className="relative bg-[#545cff] hover:bg-[#545cff] text-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[200px] h-[60px]">
              <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                Case Studies
              </span>
              <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                Case Studies
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;