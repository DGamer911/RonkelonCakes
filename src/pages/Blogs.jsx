import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import ice from "../assets/trans.png";
import choco from "../assets/choco.jpg";
import pancake from "../assets/pancake.jpg";
import { motion } from "motion/react";
import img7 from "../assets/img7.png";

function Blogs() {
  return (
    <>
      <NavBar />
      <div className="w-full p-5 flex flex-col relative items-center bg-[#FAFAFA] overflow-x-hidden m-0">
        <section className="w-screen p-5 h-screen">
          <div className="w-full flex items-center flex-col">
            <div className="flex flex-col items-center">
              <div className="flex gap-2 items-end">
                <div>
                  <img
                    src={ice}
                    className="max-w-[280px]  h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={ice}
                    className="max-w-[350px]  h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src={ice}
                    className="max-w-[280px] h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>
              </div>
              <h1
                className="text-gray-600 -translate-y-7 text-center text-6xl"
                style={{ fontFamily: "MyCustomFont" }}
              >
                Hot Creamy Banana<br></br> Chocolate Cake
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="-translate-y-5 bg-[var(--color-orange)] py-4 px-10 rounded-full shadow-lg text-white font-medium text-md"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </section>
        <section className="p-5 w-full relative">
          <div className="absolute">
            <div className="relative">
                          <motion.h5 whileHover={{ scale: 1.1 }}  whileTap={{scale:.9}} transition={{duration: .3, type:"spring"}}    className="text-sm py-2 select-none cursor-pointer px-4 absolute top-0 -translate-y-6 left-30 text-white text-center rounded  bg-blue-500">Sweet</motion.h5>
            <motion.h5 whileHover={{ scale: 1.1 }} whileTap={{scale:.9}} transition={{duration: .3, type:"spring"}} className="text-sm py-2 px-4 cursor-pointer select-none text-white absolute top-10 left-[400px] text-center rounded bg-red-500">Sugary</motion.h5>
            <motion.h5 whileHover={{ scale: 1.1 }}  whileTap={{scale:.9}} transition={{duration: .3, type:"spring"}}  className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-25 left-70 rounded bg-teal-500">Candided</motion.h5>
            <motion.h5 whileHover={{ scale: 1.1 }} whileTap={{scale:.9}} transition={{duration: .3, type:"spring"}}  className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-40 left-[600px] rounded bg-gray-500">Honeyed</motion.h5>
            <motion.h5 whileHover={{ scale: 1.1 }} whileTap={{scale:.9}}  transition={{duration: .3, type:"spring"}} className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-0 left-[650px] rounded bg-orange-500">Syrupy</motion.h5>
            <motion.h5 whileHover={{ scale: 1.1 }} whileTap={{scale:.9}}  transition={{duration: .3, type:"spring"}} className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center rounded translate-y-6 absolute top-30 left-[1000px] bg-green-500">Rich</motion.h5>
            </div>
          </div>
          <div className="flex p-5 w-full justify-between">
            <h2 className="text-xl max-w-[300px] font-medium leading-1.2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              incidunt deleniti
            </h2>
            <p className=" max-w-[500px] text-base leading-1.4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, atque beatae. Non magni aliquid esse cupiditate sed
              neque facilis. Debitis.
              <br></br>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, atque beatae. Non magni aliquid esse cupiditate sed
              neque facilis. Debitis.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Blogs;
