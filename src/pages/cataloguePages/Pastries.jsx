import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import sample3 from "../../assets/sample4.jpg";
import placeholder from "../../assets/placeholder1.png";

const featuredItems = [
  {
    name: "Butter Croissants",
    description:
      "Flaky layers baked fresh daily with a golden crust and airy center.",
    badge: "Morning Favorite",
  },
  {
    name: "Mini Fruit Tarts",
    description:
      "Buttery tart shells filled with cream and seasonal fruit for an elegant finish.",
    badge: "Event Ready",
  },
  {
    name: "Chocolate Éclairs",
    description:
      "Silky pastry shells filled with velvety cream and glazed to perfection.",
    badge: "Studio Special",
  },
];

function Pastries() {
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
              French-inspired Treats
            </p>
            <h1
              style={{ fontFamily: "MyCustomFont" }}
              className="text-3xl text-[var(--color-dark-gray)] sm:text-4xl"
            >
              Pastries
            </h1>
            <p className="max-w-2xl text-base font-light text-[var(--color-dark-gray)]/90">
              Our pastry selection brings together buttery textures, delicate layers, and elegant finishes for brunches, gifts, and celebrations.
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
                Place a Pastry Order
              </Link>
            </div>
          </div>
          <img
            src={sample3}
            alt="Fresh pastries on a tray"
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

export default Pastries;
