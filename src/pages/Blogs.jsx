import React from "react";
import NavBar from "../components/NavBar";
import "../index.css";
import ice from "../assets/trans.png";
import choco from "../assets/choco.jpg";
import pancake from "../assets/pancake.jpg";
import sample1 from "../assets/sample1.jpg";
import { motion } from "motion/react";
import img7 from "../assets/img7.png";
import BlogCard from "../components/BlogCard";
import cmd2 from "../assets/cmd2.jpg";

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
                    className="max-w-[280px] hidden lg:block  h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={ice}
                    className="lg:max-w-[350px] max-w-[300px]  h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>

                <div>
                  <img
                    src={ice}
                    className="max-w-[280px] hidden lg:block h-auto p-5 bg-gray-300 rounded"
                    alt=""
                  />
                </div>
              </div>
              <h1
                className="text-gray-600 lg:p-0 p-2 lg:-translate-y-7 text-center text-2xl lg:text-6xl"
                style={{ fontFamily: "MyCustomFont" }}
              >
                Hot Creamy Banana<br></br> Chocolate Cake
              </h1>
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, type: "spring" }}
                className=" py-3 px-9 lg:-translate-y-5 bg-[var(--color-orange)] lg:py-4 lg:px-10 rounded-full shadow-lg text-white font-medium text-md"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </section>
        <section className="lg:p-5 w-full relative">
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
          <div className="lg:flex lg:flex-row flex-col py-5 lg:p-10  border-t border-b border-[var(--color-dark-gray)]/20 w-full justify-between">
            <h2 className="text-xl text-center lg:text-start max-w-[300px] font-medium leading-1.2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
              incidunt deleniti
            </h2>
            <p className=" max-w-[500px] mt-8 lg:mt-0 text-base leading-1.4">
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
        <section className="bg-[var(--color-cream)] max-w-[1200px] flex flex-col items-center mt-10 rounded-4xl py-5  lg:p-5 w-full relative">
          <h1 className="text-xl lg:text-2xl text-center py-2 text-wrap lg:py-4 text-black/80 px-5 lg:px-30 bg-white rounded-full font-medium mb-10">
            Lorem ipsum dolor.
          </h1>
          <div className="flex flex-col items-center justify-center gap-2 ">
            <div className="flex lg:flex-row flex-col-reverse justify-center gap-5 p-5">
              <span className="relative">
                <h5 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet.
                </h5>
                <p className="leading-relaxed mb-2 lg:mb-0 font-light max-w-[500px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ut repellendus libero nam praesentium rem eveniet
                  ducimus! Laboriosam, quo possimus. Lorem ipsum dolor sit, amet
                  <span className="hidden lg:block ">
                    consectetur adipisicing elit. Ullam quaerat deserunt cumque
                    obcaecati reprehenderit exercitationem ea perspiciatis porro
                    iure ipsam voluptate totam quis vero dignissimos officiis
                    ad, asperiores alias cupiditate saepe voluptas nulla animi
                    quae placeat excepturi. Molestiae beatae ullam repellat esse
                    perspiciatis veniam corporis numquam illo, distinctio iste
                    provident?
                  </span>
                </p>
                <motion.a
                  transition={{ duration: 0.3, type: "ease" }}
                  whileHover={{}}
                  href=""
                  className="lg:absolute rounded-full lg:bottom-5 lg:left-5 text-[var(--color-dark-gray)]"
                >
                  View More
                </motion.a>
              </span>
              <img
                src={choco}
                alt="Blog Image"
                className="lg:w-[30%] h-auto rounded lg:rounded-4xl"
              />
            </div>
            <div className="flex gap-5 lg:flex-row flex-col p-5">
              <img
                src={sample1}
                alt="Blog Image"
                className="lg:w-[30%] h-auto rounded lg:rounded-4xl"
              />

              <span className="relative">
                <h5 className="text-lg font-semibold">
                  Lorem ipsum dolor sit amet.
                </h5>
                <p className="leading-relaxed  max-w-[500px] lg:mb-0 mb-2  font-extralight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum ut repellendus libero nam praesentium rem eveniet
                  ducimus! Laboriosam, quo possimus. Lorem ipsum dolor sit, amet
                                    <span className="hidden lg:block ">
                    consectetur adipisicing elit. Ullam quaerat deserunt cumque
                    obcaecati reprehenderit exercitationem ea perspiciatis porro
                    iure ipsam voluptate totam quis vero dignissimos officiis
                    ad, asperiores alias cupiditate saepe voluptas nulla animi
                    quae placeat excepturi. Molestiae beatae ullam repellat esse
                    perspiciatis veniam corporis numquam illo, distinctio iste
                    provident?
                  </span>
                </p>
                <motion.a
                  transition={{ duration: 0.3, type: "ease" }}
                  whileHover={{}}
                  href=""
        className="lg:absolute rounded-full lg:bottom-5 lg:left-5 text-[var(--color-dark-gray)]"
                >
                  View More
                </motion.a>
              </span>
            </div>

            <div></div>
          </div>
        </section>
        <section className="max-w-[1200px]">
          <motion.div
            variants={container}
            viewport={{ once: true, amount: 0.3 }}
            initial="hidden"
            whileInView="show"
            className="grid grid-cols-1 md:grid-cols-3 my-15 gap-5"
          >
            <BlogCard
              image={cmd2}
              title="Lorem ipsum dolor sit amet."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut repellendus libero nam praesentium rem eveniet ducimus!"
            />
            <BlogCard
              image={cmd2}
              title="Lorem ipsum dolor sit amet."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut repellendus libero nam praesentium rem eveniet ducimus!"
            />
            <BlogCard
              image={cmd2}
              title="Lorem ipsum dolor sit amet."
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ut repellendus libero nam praesentium rem eveniet ducimus!"
            />
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default Blogs;
