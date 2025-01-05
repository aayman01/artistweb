"use client";

// import { useScrollDirection } from "@/hooks/useScrollDirection";
// import { motion, AnimatePresence } from "framer-motion";
// import { Equal } from "lucide-react";
// import Link from "next/link";

// const NavBar = () => {
//   const { scrollDirection, isScrolled } = useScrollDirection();

//   return (
//     <nav
//       className={`fixed w-full transition-all duration-300 ${
//         scrollDirection === "down" ? "-top-[100px]" : "top-0"
//       } ${
//         isScrolled
//           ? "bg-white/80 backdrop-blur-md shadow-sm"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="mx-[90px] px-4 py-6 flex justify-between items-center h-[100px]">
//         <Link href="/" className="text-2xl font-bold">
//           ML
//         </Link>
//         <div className="flex items-center gap-4">
//           <motion.button
//             whileHover="hover"
//             initial="initial"
//             className="relative bg-white hover:bg-white text-[#545cff] rounded-full px-6 py-3 text-base font-medium overflow-hidden group transform transition-all duration-500 hover:scale-110 w-[143px] h-[38px] border border-[#545cff]"
//           >
//             <motion.span
//               variants={{
//                 initial: { y: 0, opacity: 1 },
//                 hover: { y: -20, opacity: 0 }
//               }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
//             >
//               Get in touch
//             </motion.span>
//             <motion.span
//               variants={{
//                 initial: { y: 20, opacity: 0 },
//                 hover: { y: 0, opacity: 1 }
//               }}
//               transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
//               className="absolute w-full text-center top-1/2 left-0 -translate-y-1/2"
//             >
//               Get in touch
//             </motion.span>
//           </motion.button>

//           <motion.button
//             whileHover="hover"
//             initial="initial"
//             className="p-2 rounded-full border border-[#71777e] inline-block relative w-[40px] h-[40px]"
//           >
//             <motion.span
//               variants={{
//                 initial: { y: 0, opacity: 1 },
//                 hover: { y: -20, opacity: 0 }
//               }}
//               transition={{ duration: 0.3, ease: "easeOut" }}
//               className="absolute w-full flex justify-center items-center top-1/2 left-0 -translate-y-1/2"
//             >
//               <Equal className="h-6 w-6" />
//             </motion.span>
//             <motion.span
//               variants={{
//                 initial: { y: 20, opacity: 0 },
//                 hover: { y: 0, opacity: 1 }
//               }}
//               transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
//               className="absolute w-full flex justify-center items-center top-1/2 left-0 -translate-y-1/2"
//             >
//               <Equal className="h-6 w-6" />
//             </motion.span>
//           </motion.button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
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
      className="fixed top-0 left-0 w-full bg-transparent z-50"
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

