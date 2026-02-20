import React from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Card({ name, description, ratings, price, image }) {
  return (
    <div className="bg-[#fafafa] rounded-xl flex flex-col items-center justify-center max-w-[300px] lg:max-w-[400px]">
      <div className="ratings mt-4  bg-black/50 text-white flex gap-1 justify-center items-center p-2 rounded-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} />
        ))}
      </div>
      <div className="">
        <img className="lg:max-w-[220px] max-w-[150px]" src={image} alt="" />
      </div>
      <div className="details text-center flex flex-col bg-black/70 p-4 text-white rounded-b-xl ">
        <h2 className="text-2xl font-medium">{name}</h2>
        <h2>{price}</h2>
        <p className="text-base font-light text-white/80">{description}</p>
        <motion.button whileHover={{background:"var(--color-yellow)"}} transition={{duration:.3, ease:"easeIn"}} className="p-2 mt-2 rounded-full bg-white text-black">
          View More
        </motion.button>
      </div>
    </div>
  );
}

export default Card;
