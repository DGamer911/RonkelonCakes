import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { motion } from "motion/react";

const hover = {
  initial: { y: 0 },
  whileHover: { y: -5, color: "var(--color-orange)" },
  transition: { type: "spring", duration: 0.2, stiffness: 240 },
};

function NavBar() {
  const Navlinks = " p-4 justify-center text-center";
  return (
    <nav className="w-screen bg-white drop-shadow-lg h-[60px] flex items-center justify-between px-2 lg:px-5 sticky top-0 z-50">
      <h3 className="text-[var(--color-orange)] font-bold text-xl">LOGO</h3>
      <ul className="lg:flex hidden justify-center text-base gap-5 font-medium">
        <motion.li
          initial={hover.initial}
          whileHover={hover.whileHover}
          transition={hover.transition}
          className={Navlinks}
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          initial={hover.initial}
          whileHover={hover.whileHover}
          transition={hover.transition}
          className={Navlinks}
        >
          <Link to="/catalogue">Catalogue</Link>
        </motion.li>
        <motion.li
          initial={hover.initial}
          whileHover={hover.whileHover}
          transition={hover.transition}
          className={Navlinks}
        >
          <Link to="/contact">Contact</Link>
        </motion.li>
        <motion.li
          initial={hover.initial}
          whileHover={hover.whileHover}
          transition={hover.transition}
          className={Navlinks}
        >
          <Link to="/blogs">Blogs</Link>
        </motion.li>
        <motion.li
          initial={hover.initial}
          whileHover={hover.whileHover}
          transition={hover.transition}
          className={Navlinks}
        >
          <Link to="/about">About</Link>
        </motion.li>
      </ul>
      <button className="lg:hidden block p-4 text-black bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </nav>
  );
}

export default NavBar;
