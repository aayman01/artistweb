'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function YourDigitalPartner() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const leftVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      y: 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const rightVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      y: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-end px-8 py-12 bg-white gap-6 my-20"
    >
      {/* Left Section */}
      <motion.div
        className="w-1/2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={leftVariants}
      >
        <h1 className="text-5xl font-bold mb-6">Your Digital Partner</h1>
        <p className="text-black text-xl leading-relaxed">
          We partner with companies of all sizes to solve complex business
          challenges and define their digital strategies and objectives that
          deliver results. We help bring ideas to life and create brands,
          websites & digital products that work.
        </p>
        <div className="flex relative items-center gap-4 mt-24 justify-between">
          <div className="flex items-center gap-4 mt-6 justify-center">
            <motion.img
              src="/assets/logos/BMW-logo.png"
              alt="BBC Logo"
              className="w-16 h-16 absolute top-0 left-0 z-10"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="/assets/logos/BMW.png"
              alt="BMW Logo"
              className="w-16 h-16 absolute top-0 left-8 z-20"
              whileHover={{ scale: 1.1 }}
            />
            <motion.img
              src="/assets/logos/BBC-logo.png"
              alt="Mercedes Logo"
              className="w-16 h-16 absolute top-0 left-16 z-30"
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <p className="text-gray-500 text-lg mt-4 text-left">
            Brands who've trusted us...
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-1/2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={rightVariants}
      >
        <div className="bg-[#1111] p-6 rounded-3xl h-[200px] flex justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-end text-center gap-6 sm:gap-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-6xl font-semibold">20</h2>
              <p className="text-black mt-1 text-xl">Years on the market</p>
            </motion.div>
            <div className="hidden sm:block border-l border-gray-300 h-20 mx-4"></div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2 className="text-6xl font-semibold">500</h2>
              <p className="text-black mt-1 text-xl">Satisfied Customers</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
