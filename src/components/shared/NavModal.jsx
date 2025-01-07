"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NavModal = ({ isOpen, onClose }) => {
   const animationConfig = {
     exit: { opacity: 0, transition: { duration: 0.2 } },
     enter: { opacity: 1, transition: { duration: 0.2 } },
   };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[radial-gradient(circle_at_73%_145%,_#545cff_0%,_transparent_42%)] backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: 0.6,
              },
            }}
            exit={{
              y: "-100%",
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            className="bg-[#111111] bg-[radial-gradient(circle_at_73%_145%,_#545cff_0%,_transparent_42%)] w-[90%] max-w-3xl rounded-3xl p-12 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white/60 hover:text-white"
            >
              <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </motion.div>
            </button>

            {/* Navigation Title */}
            <h2 className="text-white/60 text-xl mb-8">Navigation</h2>

            {/* Navigation Links */}
            <nav className="leading-[50px]">
              <Link href="/" className="block">
                <div className="group overflow-hidden relative">
                  <div className="flex items-center justify-between text-white mb-4">
                    <span className="text-4xl font-medium relative overflow-hidden inline-block">
                      <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                        Case Studies
                      </span>
                      <span className="absolute top-full left-0 transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                        Case Studies{" "}
                      </span>
                      <span className="text-2xl ml-4 bg-white/10 rounded-full px-4 py-1">
                        13
                      </span>
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/" className="block">
                <div className="group overflow-hidden">
                  <span className="text-4xl font-medium text-white relative overflow-hidden inline-block">
                    <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-[-120%]">
                      Our Agency
                    </span>
                    <span className="absolute top-full left-0 transform transition-transform duration-500 group-hover:translate-y-[-120%]">
                      Our Agency
                    </span>
                  </span>
                </div>
              </Link>

              <Link href="/" className="block">
                <div className="group overflow-hidden">
                  <span className="text-4xl font-medium text-white relative overflow-hidden inline-block">
                    <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                      Contact Us
                    </span>
                    <span className="absolute top-full left-0 transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                      Contact Us
                    </span>
                  </span>
                </div>
              </Link>

              <Link href="/login" className="block">
                <div className="group overflow-hidden">
                  <span className="text-4xl font-medium text-white relative overflow-hidden inline-block">
                    <span className="inline-block transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                      Login
                    </span>
                    <span className="absolute top-full left-0 transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                      Login
                    </span>
                  </span>
                </div>
              </Link>
            
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavModal; 