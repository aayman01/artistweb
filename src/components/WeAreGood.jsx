"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
// import {motion} from "framer-motion";

const WeAreGood = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="grid grid-cols-[1fr_1.5fr] px-14 bg-white py-16 mt-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Left Section: Services List */}
      <div className="flex flex-col justify-center space-y-4">
        <h2 className="text-5xl font-bold text-black mb-3">We’re good at</h2>
        <h4 className="text-xm font-normal mb-3">Services</h4>
        <div className="text-3xl text-black font-semibold mt-6 leading-[50px]">
          <p>E-Commerce</p>
          <p>Website Design</p>
          <p>Web Development</p>
          <p>Digital Products</p>
          <p>Brand Identities</p>
          <p>SEO Optimisation</p>
        </div>
      </div>

      {/* Right Section: Contact Card */}
      <div className=" px-6 bg-[#545cff] rounded-3xl text-white shadow-lg mt-16 pt-6">
        <p className="text-4xl p-8 font-semibold">
          Let&apos;s start with a conversation about how we can help you! Get in
          touch, we&apos;re a nice bunch.
        </p>
        <div className=" flex items-center justify-start gap-4 px-6">
          <motion.div>
            <Button className="relative bg-white hover:bg-white rounded-full px-9 py-7 text-xl font-medium font-Onest overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[200px] h-[60px] text-black">
              <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                Let's Talk
              </span>
              <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                Let's Talk
              </span>
            </Button>
          </motion.div>
          <button className="text-2xl font-medium px-12 h-[72px] border border-white/50 rounded-[100px] whitespace-nowrap">
            0207 112 82 85
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default WeAreGood;
