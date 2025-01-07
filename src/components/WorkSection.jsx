"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import Card from "./shared/Card";

const Example = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const [works, setWorks] = useState([]);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axios.get("/api/get-work");
        if (response.data.success) {
          setWorks(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    fetchWorks();
  }, []);

  // console.log(works)

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <section className="w-[412px] mx-auto py-10 bg-white">
            <div className="text-left">
              <div className="flex items-center mb-4">
                <h1 className="text-5xl font-bold text-black">Work</h1>
                <span className="ml-2 flex items-center justify-center w-12 h-12 border text-2xl border-gray-300 rounded-full text-black">
                  13
                </span>
              </div>
              <p className="text-black leading-45 text-left mb-16">
                A selection of our crafted work, built from scratch by our
                talented in-house team.
              </p>
              <Button className="relative bg-transparent text-black hover:bg-transparent hover:text-black border border-[#545cff] rounded-full px-5 py-4 text-lg font-normal font-Onest overflow-hidden group transform transition-all duration-500 w-[250px] h-[60px] shadow-none">
                <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-500 group-hover:translate-y-[-100%]">
                  Case Studies
                </span>
                <span className="absolute inset-0 flex items-center justify-center transform translate-y-[100%] transition-transform duration-500 group-hover:translate-y-0">
                  Case Studies
                </span>
              </Button>
            </div>
          </section>
          {works.map((work) => (
            <Card key={work._id} card={work} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};



export default Example;
