'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DigitalGoal = () => {
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
    <section ref={ref} className="px-8 mb-32 max-w-[1440px] mx-auto">
      <div className="flex items-end justify-between gap-6">
        <motion.div 
          className="w-1/2 space-y-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={leftVariants}
        >
          <h2 className="text-5xl font-semibold leading-[70px] pb-14">
            Let our experienced team elevate your digital goals
          </h2>

          <div className="flex items-start gap-x-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-4xl font-semibold mb-3">250</p>
              <p className="text-2xl">Five-Star Reviews</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-4xl font-semibold mb-3">10</p>
              <p className="text-2xl">In-House Experts</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-end items-end w-1/2"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={rightVariants}
        >
          <div></div>
          <p className="text-xl">
            We have successfully completed over 300+ projects from a variety of
            industries. In our team, designers work alongside developers and
            digital strategists, we believe this is our winning recipe for
            creating digital products that make an impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalGoal;
