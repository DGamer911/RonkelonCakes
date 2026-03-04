import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import ice from "../assets/trans.png";
import choco from "../assets/choco.jpg";
import pancake from "../assets/pancake.jpg";
import { motion } from "motion/react";
import img7 from "../assets/img7.png";
import BlogCard from "../components/BlogCard";

const container = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      type: "spring",
      duration: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", duration: 0.3 },
  },
};

function Blogs() {
  return (
    <>
      {/* <NavBar /> */}
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
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0px 16px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 select-none cursor-pointer px-4 absolute top-0 -translate-y-6 left-30 text-white text-center rounded  bg-blue-500"
              >
                Sweet
              </motion.h5>
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0px 16px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 px-4 cursor-pointer select-none text-white absolute top-10 left-[400px] text-center rounded bg-red-500"
              >
                Sugary
              </motion.h5>
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0px 16px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-25 left-70 rounded bg-teal-500"
              >
                Delicious!
              </motion.h5>
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0px 16px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-40 left-[600px] rounded bg-gray-500"
              >
                Honeyed
              </motion.h5>
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0px 16px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center absolute top-6 left-[640px] rounded bg-orange-500"
              >
                Tasty
              </motion.h5>
              <motion.h5
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 16px rgba(77,77,77,.3)",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, type: "spring" }}
                className="text-sm py-2 px-4 cursor-pointer select-none text-white text-center rounded translate-y-6 absolute top-32 left-[1188px] bg-green-500"
              >
                Rich
              </motion.h5>
            </div>
          </div>
          <div className="flex p-10  border-t border-b border-[var(--color-dark-gray)]/20 w-full justify-between">
            <h2 className="text-xl max-w-[300px] font-medium leading-1.2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              incidunt deleniti
            </h2>
            <p className=" max-w-[500px] text-base leading-1.4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, atque beatae. Non magni aliquid esse cupiditate sed
              neque facilis.
              <br></br>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, atque beatae. Non magni aliquid esse cupiditate sed
              neque facilis. Debitis.
            </p>
          </div>
        </section>
        <section className="bg-[var(--color-cream)] flex flex-col items-center mt-10 rounded-4xl  p-5 w-full relative">
          <h1 className="text-2xl text-center py-4 text-black/80  px-30 bg-white rounded-full font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </h1>
          <div className="bg-white p-10 rounded-2xl mt-5 max-w-[800px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <p key={index} className="text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                pariatur beatae porro expedita nam sunt doloremque obcaecati
                reiciendis eligendi commodi dolorem ab iste voluptates ut ea
                dicta, aut soluta totam harum autem accusantium quasi ducimus?
                Quidem consequuntur inventore quam nihil ipsum temporibus velit
                voluptatibus, adipisci odio! Numquam nulla dicta sit?
                <br></br>
              </p>

            ))}
          </div>
          <motion.div
            variants={container}
            viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="show"
            className="flex my-5 p-10 gap-5"
          >
            <BlogCard item={item} />
            <BlogCard item={item} />
            <BlogCard item={item} />
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Blogs;
