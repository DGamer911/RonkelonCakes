import React from "react";
import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import "../index.css";


const item = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

function Catalogue() {
  return (
    <div>
      <>
        <NavBar />
        <div className="w-full p-5 flex flex-col relative items-center bg-[#FAFAFA] overflow-x-hidden m-0">
          <section className="w-screen p-5 flex flex-col relative items-center h-screen">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-5 absolute top-20"
            >
              <motion.div
                variants={item}
                whileHover={{ backgroundBlendMode: "normal" }}
                className="nip rounded-4xl"
              />

              <motion.div
                variants={item}
                whileHover={{ backgroundBlendMode: "normal" }}
                className="nip rounded-4xl"
              />

              <motion.div
                variants={item}
                whileHover={{ backgroundBlendMode: "normal" }}
                className="nip rounded-4xl"
              />

              <motion.div
                variants={item}
                whileHover={{ backgroundBlendMode: "normal" }}
                className="nip rounded-4xl"
              />

              <motion.div
                variants={item}
                whileHover={{ backgroundBlendMode: "normal" }}
                className="nip rounded-4xl"
              />
            </motion.div>

            <h1
              style={{
                fontFamily: "MyCustomFont",
                color: "var(--color-dark-gray)",
              }}
              className="text-5xl text-center font-bold z-1"
            >
              BakeHouse By Ronkelon
            </h1>
          </section>
        </div>
      </>
    </div>
  );
}

export default Catalogue;
