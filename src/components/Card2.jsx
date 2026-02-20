import React from "react";
import { motion } from "motion/react";

function Card2({ whileInView, initial }) {
  return (
    <motion.div
    viewport={{once: "true"}}
      whileHover={{ zIndex: "5" }}
      initial={initial}
      whileInView={whileInView}
      transition={{ duration: 1.5, delay: 0.5, type: "spring", stiffness: 200 }}
      className="bg-[var(--color-cream)] shadow-lg max-w-[350px] flex justify-center items-center p-4 rounded-2xl"
    >
      <div className="flex flex-col items-center justify-center">
        <img
          className="rounded"
          src="https://images.pexels.com/photos/4692165/pexels-photo-4692165.jpeg"
          alt=""
        />
        <h2
          style={{ fontFamily: "MyCustomFont" }}
          className="text-center p-4 font-light text-xl"
        >
          Chocolate Cake
        </h2>
      </div>
    </motion.div>
  );
}

export default Card2;
