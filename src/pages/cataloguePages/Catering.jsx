import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import sample3 from "../../assets/sample4.jpg";
import placeholder from "../../assets/placeholder1.png";

const featuredItems = [
  {
    name: "Corporate Tea Service",
    description:
      "Elegant refreshments and pastry trays designed for meetings and events.",
    badge: "Business Ready",
  },
  {
    name: "Wedding Dessert Table",
    description:
      "A curated spread of cakes, sweets, and custom styling for your special day.",
    badge: "Premium Service",
  },
  {
    name: "Private Celebration Packages",
    description:
      "Full-service menus with custom presentation and delivery for intimate gatherings.",
    badge: "Tailored Menus",
  },
];

function Catering() {
  return (
    <div className="min-h-screen w-full bg-[var(--color-surface)] px-5 py-10 sm:px-10 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6 rounded-[2rem] bg-[var(--color-cream)] p-6 shadow-lg lg:flex-row lg:items-center lg:p-10"
        >
          <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-orange)]">
              Event Service
            </p>
            <h1
              style={{ fontFamily: "MyCustomFont" }}
              className="text-3xl text-[var(--color-dark-gray)] sm:text-4xl"
            >
              Catering
            </h1>
            <p className="max-w-2xl text-base font-light text-[var(--color-dark-gray)]/90">
              Whether it is a small gathering or a large celebration, our catering menus bring thoughtful presentation, delicious desserts, and warm hospitality to your table.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/catalogue"
                className="rounded-full border border-[var(--color-dark-gray)] px-4 py-2 text-sm text-[var(--color-dark-gray)] transition hover:bg-[var(--color-dark-gray)] hover:text-white"
              >
                Back to Catalogue
              </Link>
              <Link
                to="/contact"
                className="rounded-full bg-[var(--color-orange)] px-4 py-2 text-sm text-white transition hover:opacity-90"
              >
                Request Catering Info
              </Link>
            </div>
          </div>
          <img
            src={sample3}
            alt="Catering dessert display"
            className="h-72 w-full rounded-[1.5rem] object-cover lg:w-[45%]"
          />
        </motion.section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.5rem] border border-[var(--color-ash)] bg-white p-4 shadow-sm"
            >
              <img src={placeholder} alt={item.name} className="mb-4 h-44 w-full rounded-[1rem] object-cover" />
              <div className="space-y-2">
                <span className="inline-flex rounded-full bg-[var(--color-cream)] px-3 py-1 text-xs uppercase tracking-[0.25em] text-[var(--color-orange)]">
                  {item.badge}
                </span>
                <h2 className="text-xl font-semibold text-[var(--color-dark-gray)]">
                  {item.name}
                </h2>
                <p className="text-sm font-light text-[var(--color-dark-gray)]/80">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Catering;
