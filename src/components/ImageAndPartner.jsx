"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const ImageAndPartner = () => {
  // Split text into words for individual animation
  const text = "From ambitious startups to global companies, we partner with great businesses and industry.";
  const words = text.split(" ");
  
  return (
    <div className="px-14">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          className="rounded-3xl overflow-hidden w-full"
          src="/assets/image.jpg"
          width={1100}
          height={500}
          alt="image"
        />
      </motion.div>
      <div className="text-5xl font-bold text-start mt-24 flex flex-wrap">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ once: true }}
            className="mr-4"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ImageAndPartner;