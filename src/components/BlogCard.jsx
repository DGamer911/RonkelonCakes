import { motion } from "motion/react";
import React from "react";
import "../index.css";


function BlogCard({ item}) {
  return (
    <div className="card relative rounded-2xl flex flex-col items-end justify-end text-white">
      <button className="p-2 text-black absolute top-2 right-2 text-center bg-white/70  shadow-lg rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
      <motion.div variant={item} className="bg-white/70 backdrop-blur-lg  p-5 rounded-2xl ">
        <h3 className="text-xl text-orange-500 my-2 font-medium">
          Lorem, ipsum.
        </h3>
        <p className="leading-4 text-black/70 opacity-70">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolore
          tempore dolor est magnam nihil, unde architecto necessitatibus. Ex,
          animi?
        </p>
      </motion.div>
    </div>
  );
}

export default BlogCard;