"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Custom Portfolios",
    description: "Build and share your unique art portfolio.",
  },
  {
    title: "Art Marketplace",
    description: "Sell your artwork with ease on our platform.",
  },
  {
    title: "Community Engagement",
    description: "Connect with other artists and art enthusiasts.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Features
        </h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
