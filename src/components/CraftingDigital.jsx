'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CraftingDigital = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 100
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const wordVariants = {
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

  return (
    <section
      ref={ref}
      className="w-full h-[80vh] flex items-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('assets/crafting-bg.svg')`,
      }}
    >
      {/* Content */}
      <div className="max-w-2xl mx-auto">
        <motion.h1 
          className="text-7xl font-semibold leading-[90px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={textVariants}
        >
          <motion.span variants={wordVariants}>
            Crafting digital
          </motion.span>
          <br />
          <motion.span 
            variants={wordVariants}
            className="pl-36 bg-[linear-gradient(45deg,#545cff,#1f2246_80%)] bg-clip-text text-transparent"
          >
            experiences
          </motion.span>
          <br />
          <motion.span variants={wordVariants}>
            since 2004
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};

export default CraftingDigital;
