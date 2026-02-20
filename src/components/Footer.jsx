import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4"
      >
        {/* Brand */}
        <motion.div variants={fadeUp}>
          <h2 style={{fontFamily:"MyCustomFont"}} className="text-2xl font-semibold text-white">
            Bakehouse by Ronkelon
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Freshly baked goodness crafted with passion, quality, and love.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white font-medium mb-4">Quick Links</h3>
          <motion.ul variants={stagger} className="space-y-2 text-sm">
            {["About", "Catalogue", "Blogs", "Contact"].map((item) => (
              <motion.li key={item} variants={fadeUp}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-white transition"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white font-medium mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {[faInstagram, faFacebookF, faXTwitter].map((icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{type:"spring"}}
                className="p-3 rounded-full bg-white/10 hover:bg-white hover:text-black "
              >
                <FontAwesomeIcon icon={icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeUp}>
          <h3 className="text-white font-medium mb-4">Contact</h3>
          <p className="text-sm text-gray-400">
            ronkeobieloglan@gamil.com
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="border-t border-white/10 py-6 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Bakehouse by Ronkelon. All rights
            reserved.
          </p>
          <p>
            Manufactured by<span> </span>
            <span className="text-white font-medium tracking-wide">
               PRIME STUDIOS
            </span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
