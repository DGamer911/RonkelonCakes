import { motion } from "motion/react";
import React from "react";
import "../index.css";

function BlogCard({ image, title, description }) {
  return (
    <div className="card rounded-2xl max-w-[385px] relative bg-[var(--color-off-white)] rounded-2xl flex flex-col items-end justify-end text-black">
      <button className="absolute bg-[var(--color-white)] rounded-full p-2 top-5 right-5 hover:bg-[var(--color-orange)] transition-all duration-300">
              <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
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

      <img className="rounded-t-2xl" src={image} alt={title} />
      <motion.div className="bg-white/70 backdrop-blur-lg  p-5 rounded-b-2xl ">
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
