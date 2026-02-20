import React from "react";
import { motion } from "motion/react";
import Card from "./Card";
import products from "../data/Products";
import ice from "../assets/trans.png";
import choco from "../assets/choco.jpg";
import pancake from "../assets/pancake.jpg";

function Section2() {
  return (
    <div className="bg-[var(--color-coral)] lg:p-20 p-5 aps">
      <div className="flex flex-col items-center gap-15">
        <h2 className="bg-white shadow-2xl lg:mt-0 mt-5 text-nowrap p-4 rounded-full max-w-[200px] text-center">
          Featured Products!
        </h2>
        <div className="flex gap-4 lg:flex-nowrap flex-wrap justify-center shadow-2xl bg-gray-300 p-10 rounded-4xl">
          {products.map((item) => (
            <Card
              name={item.name}
              id={item.id}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
        <div>
          <div className="bg-white flex flex-col  rounded-4xl p-5">
            <div className="flex lg:flex-row flex-col justify-between">
              <h1 className="bg-black/60 text-white py-4 px-20 text-center rounded-full">
                Blog
              </h1>
              <div className="lg:block hidden">
                <motion.button whileHover={{ scale: 1.02, y: -3 }} whileTap={{scale: .9 ,y:3}} transition={{duration: .3, type:"spring", stiffness: 240  }} className="bg-[var(--color-orange)] text-white py-3 lg:px-10 px-20 rounded-full">Read More</motion.button>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse gap-5  my-3 ">
              <div className="flex-3 p-4 bg-gray-300 rounded-2xl">
                <p className="leading-relaxed indent-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo,
                  expedita reiciendis! Tenetur animi sequi nobis magnam dolores
                  natus vel nostrum dolor ullam doloribus, quisquam nemo dolorum
                  at repellendus error distinctio, accusantium inventore tempore
                  pariatur. Veritatis, perferendis vel. Laborum, eveniet ducimus
                  perferendis velit pariatur nam illo, accusantium sequi ab
                  illum ipsa?
                  <br></br>
                </p>
                <br></br>
                <p className="lg:block hidden leading-relaxed indent-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, voluptates eaque. Consequuntur mollitia ullam non
                  excepturi sed totam modi optio velit, quisquam, qui veritatis
                  commodi sapiente corrupti, illum omnis in expedita quod labore
                  neque nihil. Facilis est labore illo mollitia dolorum placeat
                  velit quis error perferendis fugit quasi saepe, vitae nulla.
                  Atque alias voluptatem, enim pariatur eos facilis nemo,
                  distinctio, odit iste sed quibusdam doloribus delectus numquam
                  nobis sequi vitae modi in. Amet, eligendi itaque assumenda,
                  rem aperiam unde consequatur esse quis consequuntur labore,
                  doloribus eaque sunt provident numquam vero impedit quisquam
                  nulla a corporis? Voluptatum beatae asperiores excepturi
                  laborum.
                </p>
              </div>
              <div className="flex-1 p-2 flex items-center justify-center bg-gray-300 rounded-2xl">
                <img className="rounded" src={ice} alt="" />
              </div>
            </div>
            <div className="block w-full lg:hidden">
                <motion.button whileHover={{ scale: 1.02, y: -1.01 }} whileTap={{scale: .9 ,y:1.5}} transition={{duration: .3, type:"spring", stiffness: 240  }} className="bg-[var(--color-orange)] text-white py-3 w-full rounded-full">Read More</motion.button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
