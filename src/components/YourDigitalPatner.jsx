'use client'
import { motion } from "framer-motion";

export default function YourDigitalPartner() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-end px-8 py-12 bg-white gap-6 mt-36">
      {/* Left Section */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-6">Your Digital Partner</h1>
        <p className="text-black text-xl leading-relaxed">
          We partner with companies of all sizes to solve complex business
          challenges and define their digital strategies and objectives that
          deliver results. We help bring ideas to life and create brands,
          websites & digital products that work.
        </p>
        <div className="flex relative items-center gap-4 mt-24 justify-between">
          <div className=" flex items-center gap-4 mt-6 justify-center">
            <img
              src="/assets/logos/BBC-logo.png"
              alt="BBC Logo"
              className="w-16 h-16 absolute top-0 left-0 z-10"
            />
            <img
              src="/assets/logos/BMW-logo.png"
              alt="BMW Logo"
              className="w-16 h-16 absolute top-0 left-8 z-20"
            />
            <img
              src="/assets/logos/Mercedes-logo.jfif"
              alt="Mercedes Logo"
              className="w-16 h-16 absolute top-0 left-16 z-30"
            />
          </div>
          <p className="text-gray-500 text-lg mt-4 text-left">
            Brands who've trusted us...
          </p>
        </div>
      </motion.div>

      {/* Right Section */}
      <div className="w-1/2">
        <motion.div
          className="bg-[#1111] p-6 rounded-3xl h-[200px] flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-center items-end text-center gap-6 sm:gap-0">
            <div>
              <h2 className="text-6xl font-semibold">20</h2>
              <p className="text-black mt-1 text-xl">Years on the market</p>
            </div>
            <div className="hidden sm:block border-l border-gray-300 h-20 mx-4"></div>
            <div>
              <h2 className="text-6xl font-semibold">500</h2>
              <p className="text-black mt-1 text-xl">Satisfied Customers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
