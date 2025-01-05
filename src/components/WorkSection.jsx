"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "./ui/button";

const Example = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <section className="w-[412px] mx-auto py-10 bg-white">
            <div className="text-left">
              {/* Heading */}
              <div className="flex items-center mb-4">
                <h1 className="text-5xl font-bold text-black">Work</h1>
                <span className="ml-2 flex items-center justify-center w-12 h-12 border text-2xl border-gray-300 rounded-full text-black">
                  13
                </span>
              </div>
              {/* Description */}
              <p className="text-black leading-45 text-left mb-16">
                A selection of our crafted work, built from scratch by our
                talented in-house team.
              </p>
              {/* Button */}
              <Button className="relative bg-transparent text-black hover:bg-transparent hover:text-black border border-[#545cff] rounded-full px-5 py-4 text-lg font-normal font-Onest overflow-hidden group transform transition-all duration-500 w-[250px] h-[60px] shadow-none">
                {/* Initial Text */}
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                  Case Studies
                </span>
                {/* Hover Text */}
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                  Case Studies
                </span>
              </Button>
            </div>
          </section>
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="bg-gray-100 rounded-3xl overflow-hidden relative border-2 border-transparent hover:border-[#545cff] transition-all duration-500 w-[500px] h-[412px]">
      <Image
        src={card?.url}
        alt="Work Image"
        className="w-full h-full object-cover"
        width={510}
        height={412}
      />
      <span className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
        Latest
      </span>
      <div className="p-4 absolute bottom-1">
        <h3 className="text-2xl ml-2 text-white font-bold">{card.title}</h3>
        <div className="flex space-x-2 mt-2">
          <span className="px-3 py-1 border bg-transparent rounded-full text-xl text-white border-slate-200">
            UI/UX Design
          </span>
        </div>
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/assets/work-1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/assets/work-2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/assets/work-2.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/assets/work-3.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/assets/work-4.jpg",
    title: "Title 5",
    id: 5,
  },
];
