"use client";

import { motion } from "framer-motion";

const WeAreGood = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="flex flex-col lg:flex-row justify-between items-center px-8 bg-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Left Section: Services List */}
      <div className="flex flex-col justify-center space-y-4 text-left w-1/2">
        <h2 className="text-4xl font-bold text-black">We’re good at</h2>
        <div className="text-lg text-black font-medium mt-6 space-y-2">
          <p>E-Commerce</p>
          <p>Website Design</p>
          <p>Web Development</p>
          <p>Digital Products</p>
          <p>Brand Identities</p>
          <p>SEO Optimisation</p>
        </div>
      </div>

      {/* Right Section: Contact Card */}
      <div className="mt-10 lg:mt-0 lg:ml-16 p-6 bg-blue-500 rounded-xl text-white text-center lg:text-left shadow-lg w-1/2">
        <p className="text-xl font-semibold">
          Let&apos;s start with a conversation about how we can help you! Get in
          touch, we&apos;re a nice bunch.
        </p>
        <div className="mt-6 flex flex-col items-center lg:items-start space-y-3">
          <button className="bg-white text-blue-500 font-medium py-2 px-6 rounded-md">
            Let&apos;s talk
          </button>
          <a
            href="tel:02071128285"
            className="text-white text-lg font-bold hover:underline"
          >
            0207 112 82 85
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default WeAreGood;
