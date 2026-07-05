import React from "react";
import "../index.css";
import ice from "../assets/trans.png";
import choco from "../assets/choco.jpg";
import sample1 from "../assets/sample1.jpg";
import { motion } from "motion/react";
import BlogCard from "../components/BlogCard";
import cmd2 from "../assets/cmd2.jpg";

const container = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
      type: "spring",
      duration: 0.35,
    },
  },
};

const highlights = [
  {
    title: "Crafted for celebration",
    description:
      "Every story on our blog is inspired by the same care we put into our cakes, pastries, and event trays.",
    image: choco,
    tag: "Behind the scenes",
  },
  {
    title: "Sweet moments, beautifully shared",
    description:
      "From intimate birthdays to grand weddings, we love turning dessert into an experience guests remember.",
    image: sample1,
    tag: "Inspiration",
  },
];

const featuredPosts = [
  {
    title: "How we style celebration cakes for unforgettable first impressions",
    description:
      "Discover the layers of texture, color, and detail that make every custom cake feel personal.",
    image: cmd2,
    tag: "Cake styling",
  },
  {
    title: "The little details that make a dessert table feel luxurious",
    description:
      "Learn how florals, textures, and thoughtful spacing can elevate any gathering.",
    image: cmd2,
    tag: "Events",
  },
  {
    title: "A fresh look at pastry favorites for brunch and gifting",
    description:
      "Our pastry selection comes together with buttery layers, rich fillings, and elegant presentation.",
    image: cmd2,
    tag: "Pastries",
  },
];

function Blogs() {
  return (
    <div className="w-full bg-[var(--color-surface)] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center rounded-[2rem] border border-[var(--color-ash)]/70 bg-[linear-gradient(135deg,_rgba(255,231,208,0.7)_0%,_rgba(255,255,255,0.96)_100%)] px-5 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.06)] sm:px-8 lg:min-h-[85vh] lg:px-12 lg:py-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, type: "spring" }}
            className="space-y-6 text-center lg:text-left"
          >
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-[var(--color-orange)] shadow-sm">
              Fresh from the bakery
            </span>
            <h1
              className="text-4xl leading-tight text-[var(--color-dark-gray)] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "MyCustomFont" }}
            >
              Hot Creamy Banana Chocolate Cake
            </h1>
            <p className="mx-auto max-w-xl text-base leading-7 text-[var(--color-dark-gray)]/80 lg:mx-0">
              A closer look at our newest creations, seasonal inspiration, and the sweet details that bring every celebration to life.
            </p>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="rounded-full bg-[var(--color-orange)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--color-orange)]/20"
              >
                Contact us
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                href="/catalogue"
                className="rounded-full border border-[var(--color-dark-gray)] px-6 py-3 text-sm font-semibold text-[var(--color-dark-gray)]"
              >
                Browse our treats
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center"
          >
            <div className="absolute left-4 top-8 h-32 w-28 rounded-[1.5rem] border border-white/70 bg-white/70 shadow-lg backdrop-blur sm:left-8 sm:h-36 sm:w-32" />
            <img
              src={ice}
              alt="Decorative cake showcase"
              className="w-full rounded-[2rem] border border-white/60 object-cover shadow-[0_25px_65px_rgba(0,0,0,0.18)]"
            />
            <div className="absolute bottom-5 right-4 rounded-[1.25rem] bg-[var(--color-dark-gray)] px-4 py-3 text-sm text-white shadow-lg sm:right-8">
              <p className="font-semibold">New this week</p>
              <p className="text-xs text-white/80">Banana chocolate layers</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl rounded-[2rem] border border-[var(--color-ash)]/70 bg-white/80 px-5 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] backdrop-blur sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Sweet",
            "Sugary",
            "Delicious",
            "Honeyed",
            "Tasty",
            "Rich",
          ].map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ y: -3, scale: 1.03 }}
              className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-md"
              style={{
                backgroundColor:
                  tag === "Sweet"
                    ? "#3b82f6"
                    : tag === "Sugary"
                      ? "#ef4444"
                      : tag === "Delicious"
                        ? "#14b8a6"
                        : tag === "Honeyed"
                          ? "#64748b"
                          : tag === "Tasty"
                            ? "#f97316"
                            : "#22c55e",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-[var(--color-dark-gray)] sm:text-3xl">
              A warm, modern view of sweet indulgence
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--color-dark-gray)]/75">
              We blend classic baking with contemporary styling, bringing a little theatre to every slice and every table setting.
            </p>
          </div>
          <div className="rounded-[1.5rem] bg-[var(--color-cream)] px-5 py-4 text-sm text-[var(--color-dark-gray)] shadow-sm">
            <p className="font-semibold">Signature style</p>
            <p className="mt-1 text-[var(--color-dark-gray)]/80">Elegant finishes, rich flavors, and beautiful presentation.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl space-y-6 px-1 sm:px-0">
        {highlights.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={`flex flex-col gap-5 rounded-[2rem] border border-[var(--color-ash)]/70 bg-white p-4 shadow-[0_16px_50px_rgba(0,0,0,0.04)] lg:flex-row lg:items-center lg:p-6 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full rounded-[1.5rem] object-cover lg:w-[42%]"
            />
            <div className="flex-1 space-y-3 px-2 py-1 lg:px-3">
              <span className="inline-flex rounded-full bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-orange)]">
                {item.tag}
              </span>
              <h3 className="text-2xl font-semibold text-[var(--color-dark-gray)]">
                {item.title}
              </h3>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-dark-gray)]/75">
                {item.description}
              </p>
              <a href="/contact" className="inline-flex text-sm font-semibold text-[var(--color-orange)]">
                Get in touch →
              </a>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl px-1 sm:px-0">
        <div className="mb-6 flex flex-col gap-2 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
            Latest stories
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-dark-gray)]">
            Read more from the kitchen
          </h2>
        </div>
        <motion.div
          variants={container}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {featuredPosts.map((post) => (
            <BlogCard
              key={post.title}
              image={post.image}
              title={post.title}
              description={post.description}
              tag={post.tag}
            />
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Blogs;
