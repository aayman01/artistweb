"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
// import {motion} from "framer-motion";

const WeAreGood = () => {
  const leftVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { 
      opacity: 0, 
      y: -100 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="grid grid-cols-[1fr_1.5fr] px-14 bg-white py-16 mt-16">
      {/* Left Section: Services List */}
      <motion.div 
        className="flex flex-col justify-center space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={leftVariants}
      >
        <motion.h2 
          variants={textVariants}
          className="text-5xl font-bold text-black mb-3"
        >
          We're good at
        </motion.h2>
        <motion.h4 
          variants={textVariants}
          className="text-xm font-normal mb-3"
        >
          Services
        </motion.h4>
        <div className="text-3xl text-black font-semibold mt-6 leading-[50px]">
          {["E-Commerce", "Website Design", "Web Development", "Digital Products", "Brand Identities", "SEO Optimisation"].map((service, index) => (
            <motion.p 
              key={index}
              variants={textVariants}
            >
              {service}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Right Section: Contact Card */}
      <motion.div 
        className="px-6 bg-[#545cff] rounded-3xl text-white shadow-lg mt-16 pt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={rightVariants}
      >
        <p className="text-4xl p-8 font-semibold">
          Let&apos;s start with a conversation about how we can help you! Get in
          touch, we&apos;re a nice bunch.
        </p>
        <div className="flex items-center justify-start gap-4 px-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button className="relative bg-white hover:bg-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[200px] h-[60px] text-black">
              <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                Let's Talk
              </span>
              <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                Let's Talk
              </span>
            </Button>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-2xl font-medium px-12 h-[72px] border border-white/50 rounded-[100px] whitespace-nowrap"
          >
            0207 112 82 85
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeAreGood;
