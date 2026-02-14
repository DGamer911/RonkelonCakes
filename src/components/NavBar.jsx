import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";

const hover = {
  whileHover: { y: -5, color: "var(--color-orange)" },
  transition: { type: "spring", duration: 0.2, stiffness: 240 },
};

const hover2 = {
  whileHover: {
    color: "var(--color-orange)",
    background: "rgba(255, 255, 255, .9)",
  },
  transition: { type: "spring", duration: 0.2, stiffness: 240 },
};

const iconStyles = `px-2 py-3 block bg-white rounded-xl`

function NavBar() {
  const Navlinks = " p-4 justify-center text-center";
  const Navlinks2 = "p-4 bg-white rounded-xl text-center";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="max-w-screen bg-white drop-shadow-lg z-50 h-[60px] flex items-center justify-between px-2 lg:px-5 sticky top-0 z-50">
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
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{
            padding: "8px",
            borderRadius: 12,
            background: "var(--color-cream)",
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
          whileTap={{ scale: 0.09 }}
          className="lg:hidden block p-[8px]  text-black bg-white"
        >
          {isOpen ? 
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </motion.svg>
           : 
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </motion.svg>
          }
        </motion.button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -800 }}
            animate={{ y: 0 }}
            exit={{ y: -800 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-screen flex flex-col backdrop-blur-md h-screen bg-black/50 absolute top-0 left-0   z-40"
          >
            <ul className="flex flex-col px-10 py-20 gap-5">
              <motion.li
                initial={hover2.initial}
                whileHover={hover2.whileHover}
                transition={hover2.transition}
                className={Navlinks2}
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                initial={hover2.initial}
                whileHover={hover2.whileHover}
                transition={hover2.transition}
                className={Navlinks2}
              >
                <Link to="/catalogue">Catalogue</Link>
              </motion.li>
              <motion.li
                initial={hover2.initial}
                whileHover={hover2.whileHover}
                transition={hover2.transition}
                className={Navlinks2}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
              <motion.li
                initial={hover2.initial}
                whileHover={hover2.whileHover}
                transition={hover2.transition}
                className={Navlinks2}
              >
                <Link to="/blogs">Blogs</Link>
              </motion.li>
              <motion.li
                initial={hover2.initial}
                whileHover={hover2.whileHover}
                transition={hover.transition}
                className={Navlinks2}
              >
                <Link to="/about">About</Link>
              </motion.li>
            </ul>
            <div className="w-screen flex p-5 justify-center">
              <div className="w-full flex justify-evenly items-center justify-center">

                 <FontAwesomeIcon size="2x" style={{color: "#1877f2"}} className={iconStyles}  icon={faFacebook} />
                 <FontAwesomeIcon size="2x" style={{color: "#c13584"}} className={iconStyles}  icon={faInstagram} />
                 <FontAwesomeIcon size="2x" style={{color: "#229ed9"}} className={iconStyles}  icon={faTelegram} />
                 <FontAwesomeIcon size="2x" style={{color: "#25d366"}} className={iconStyles}  icon={faWhatsapp} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
