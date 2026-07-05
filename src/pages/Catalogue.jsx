import React from "react";
import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import "../index.css";
import bgEffect from "../assets/bgEffect2.svg";
import sample3 from "../assets/sample4.jpg";

const item = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

function Catalogue() {
  return (
    <div>
      <>
        <div className="w-full p-5 flex flex-col relative items-center bg-[#FAFAFA] overflow-x-hidden m-0">
          <section className="w-[90%]  rounded bg-[var(--color-cream)] w-full place-items-center justify-center flex md:flex-row gap-10 lg:flex-row flex-col-reverse relative py-10 lg:py-20 px-5 sm:px-10 md:px-10 lg:px-2">
            <div className="flex catalogueSection lg:p-10 p-2 flex-1 flex-col gap-5 max-w-[600px]">
              <h1
                style={{ fontFamily: "MyCustomFont" }}
                className="text-2xl text-[var(--color-dark-gray)]"
              >
                BakeHouse By Ronkelon
              </h1>
              <p className="text-base font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Provident fugit corrupti sint, atque optio et?
              </p>
              <p className="text-base font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate perferendis ea delectus porro magnam accusamus
                obcaecati vitae harum earum non. Enim iusto voluptatibus quasi
                tempora adipisci explicabo laborum dolor obcaecati.
              </p>
              <button className="bg-[var(--color-orange)] text-white py-2 px-4 rounded-lg shadow-md max-w-[400px]">
                Contact Us
              </button>
            </div>
            <div className="flex-1  max-w-[400px]">
              <img src={sample3} className="rounded-2xl" alt="Sample 3" />
            </div>
          </section>
        </div>
      </>
    </div>
  );
}

export default Catalogue;
