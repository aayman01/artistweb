'use client'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import FeedbackCard from "./shared/FeedbackCard";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const FeedBack = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("/api/get-review");
        setReviews(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="bg-[#111111]">
      <div className="bg-[radial-gradient(circle_at_-30%_21%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%),_radial-gradient(circle_at_120%_80%,_rgb(84,92,255)_0px,_rgba(0,0,0,0)_30%)]">
        <div className="py-36 max-w-[1380px] mx-auto text-white">
          {/* Title and Description */}
          <h2 className="text-6xl font-medium leading-[80px] mb-12 px-12">
            Client Feedback
          </h2>
          <div className="flex items-center justify-between gap-4 px-12">
            <p className="text-2xl">
              We're collaborators - We build tight-knit partnerships with our
              clients.
            </p>
            <span className="flex items-center gap-2 text-white/50">
              <ClipLoader color="#ffffff" size={35} />
              <p className="text-xl">Keep Scrolling</p>
            </span>
          </div>

          {/* Feedback Cards */}
          <div className="space-y-16 mt-16">
            {isLoading ? (
              <div className="flex justify-center">
                <ClipLoader color="#ffffff" size={50} />
              </div>
            ) : (
              reviews.map((review, index) => (
                <AnimatedCard key={review._id || index}>
                  <FeedbackCard review={review} />
                </AnimatedCard>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AnimatedCard = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      controls.start({
        scale: 1.1,
        opacity: 1,
        transition: { duration: 0.9, ease: "easeInOut" },
      });
    } else {
      controls.start({
        scale: 0.9,
        opacity: 0.8,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ scale: 0.9, opacity: 0.8 }}
      className="w-full max-w-4xl mx-auto bg-transparent rounded-lg shadow-lg transition-transform ease-in-out"
    >
      {children}
    </motion.div>
  );
};

export default FeedBack;
