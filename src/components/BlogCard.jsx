import { motion } from "motion/react";
import React from "react";
import "../index.css";

function BlogCard({ image, title, description, tag }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.25, type: "spring" }}
      className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[var(--color-ash)]/70 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
    >
      <div className="overflow-hidden">
        <img
          className="h-56 w-full object-cover transition duration-500 hover:scale-105"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="inline-flex w-fit rounded-full bg-[var(--color-cream)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-orange)]">
          {tag}
        </span>
        <h3 className="text-xl font-semibold text-[var(--color-dark-gray)]">
          {title}
        </h3>
        <p className="flex-1 text-sm leading-6 text-[var(--color-dark-gray)]/75">
          {description}
        </p>
        <button className="mt-2 w-fit rounded-full border border-[var(--color-dark-gray)] px-4 py-2 text-sm text-[var(--color-dark-gray)] transition hover:bg-[var(--color-dark-gray)] hover:text-white">
          Read story
        </button>
      </div>
    </motion.article>
  );
}

export default BlogCard;
