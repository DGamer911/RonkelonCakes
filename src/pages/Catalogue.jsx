import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import "../index.css";
import bgEffect from "../assets/bgEffect2.svg";
import sample3 from "../assets/sample4.jpg";
import placeholder from "../assets/placeholder1.png";

const item = {
  hidden: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
};

const catalogueCards = [
  {
    title: "Cakes",
    description:
      "Elegant celebration cakes crafted with premium flavors and custom finishes.",
    link: "/catalogue/cakes",
    buttonLabel: "Browse Cakes",
  },
  {
    title: "Pastries",
    description:
      "Buttery pastries and delicate sweets baked fresh for everyday indulgence.",
    link: "/catalogue/pastries",
    buttonLabel: "Browse Pastries",
  },
  {
    title: "Catering",
    description:
      "Thoughtful event desserts and catering packages for special .",
    link: "/catalogue/catering",
    buttonLabel: "Browse Catering",
  },
];

function Catalogue() {
  return (
    <div className="w-full p-5 flex flex-col relative items-center bg-[var(--color-surface)] overflow-x-hidden m-0">
      <section className="w-full rounded bg-[var(--color-cream)] place-items-center justify-center lg:h-[calc((100vh-100px))] flex md:flex-row gap-10 lg:flex-row flex-col-reverse relative py-10 lg:py-20 px-5 sm:px-10 md:px-10 lg:px-2">
        <div className="flex catalogueSection lg:p-10 py-5 px-2 flex-1 flex-col gap-5 max-w-150">
          <h1
            style={{ fontFamily: "MyCustomFont" }}
            className="text-2xl text-[var(--color-dark-gray)]"
          >
            BakeHouse By Ronkelon
          </h1>
          <p className="text-base font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            fugit corrupti sint, atque optio et?
          </p>
          <p className="text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            perferendis ea delectus porro magnam accusamus obcaecati vitae harum
            earum non. Enim iusto voluptatibus quasi tempora adipisci explicabo
            laborum dolor obcaecati.
          </p>
          <button className="bg-[var(--color-orange)] text-white py-2 px-4 rounded-lg shadow-md max-w-100">
            View Trending Delicacies
          </button>
        </div>
        <div className="flex-1 flex place-items-center max-w-100">
          <img
            src={sample3}
            className="rounded-2xl lg:w-[90%]"
            alt="Sample 3"
          />
        </div>
      </section>
      <section className="my-10">
        <div className="flex flex-col items-center gap-5 lg:mt-20 mt-10">
          <h2 className="bg-[var(--color-dark-gray)]/90 text-white shadow-2xl text-center text-nowrap flex gap-2 lg:mt-0 mt-5 p-4 rounded-full max-w-50">
            Catalogue
          </h2>
          <p className="text-center font-light mb-10">Explore our delicious range of baked goods!</p>
        </div>
        <div className="grid lg:grid-cols-3 h-[352px] place-items-center sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
          {catalogueCards.map((card) => (
            <span key={card.title} className="flex flex-col max-w-[300px] items-center justify-center gap-3 p-2 bg-[var(--color-ash)] rounded-2xl">
              <img src={placeholder} alt={card.title} />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-center font-light py-2">{card.description}</p>
                <Link
                  to={card.link}
                  className="bg-[var(--color-white)] w-full p-3 rounded-2xl text-center"
                >
                  {card.buttonLabel}
                </Link>
              </div>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Catalogue;
