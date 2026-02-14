import React from "react";
import { motion } from "motion/react";
import Card from "./Card";
import products from "../data/Products";

function Section2() {
  return (
    <div className="bg-[var(--color-coral)] lg:p-20 p-5 aps">
      <div className="flex flex-col items-center gap-15">
        <h2 className="bg-white shadow-2xl lg:mt-0 mt-5 text-nowrap p-4 rounded-full max-w-[200px] text-center">
          Featured Products!
        </h2>
        <div className="flex gap-4 flex-wrap justify-center shadow-2xl bg-gray-300 p-10 rounded-4xl">
          {products.map((item) => (
            <Card
              name={item.name}
              id={item.id}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section2;
