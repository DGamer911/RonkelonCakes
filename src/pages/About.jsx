import { motion } from "motion/react";
import "../index.css";
import Section4 from "../components/Section4";
import founderImage from "../assets/choco.jpg";
import teamOne from "../assets/cmd2.jpg";
import teamTwo from "../assets/sample1.jpg";
import teamThree from "../assets/pancake.jpg";

const teamMembers = [
  { name: "Ronke Adebayo", role: "Founder & Head Baker", image: founderImage },
  { name: "Tolu Daniels", role: "Cake Designer", image: teamOne },
  { name: "Mina Yusuf", role: "Event & Catering Lead", image: teamTwo },
  { name: "Dami Cole", role: "Pastry Specialist", image: teamThree },
];

function About() {
  return (
    <div className="w-full bg-[var(--color-surface)] px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-[2rem] border border-[var(--color-ash)]/70 bg-white p-6 shadow-[0_25px_70px_rgba(0,0,0,0.06)] sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="max-w-2xl space-y-5"
        >
          <span className="inline-flex rounded-full bg-[var(--color-cream)] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
            About us
          </span>
          <h1
            className="text-4xl leading-tight text-[var(--color-dark-gray)] sm:text-5xl"
            style={{ fontFamily: "MyCustomFont" }}
          >
            Crafted with heart, baked for celebration.
          </h1>
          <p className="text-base leading-7 text-[var(--color-dark-gray)]/80">
            Ronkelon Cakes is a boutique bakery and catering studio known for
            delivering memorable desserts, elegant cake design, and warm
            hospitality for every occasion.
          </p>
          <p className="text-base leading-7 text-[var(--color-dark-gray)]/80">
            From intimate birthdays to grand weddings, we believe sweetness
            should feel personal, beautiful, and unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, type: "spring" }}
          className="overflow-hidden rounded-[1.75rem] lg:w-[38%]"
        >
          <img
            src={founderImage}
            alt="Decorated cake display"
            className="h-80 w-full object-cover"
          />
        </motion.div>
      </section>

      <section className="mx-auto mt-8 grid w-full max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="rounded-[2rem] border border-[var(--color-ash)]/70 bg-[var(--color-cream)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
            Our founder
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark-gray)]">
            Ronke Adebayo
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-dark-gray)]/80">
            Ronke founded Ronkelon Cakes with a simple belief: every celebration
            deserves desserts that are both beautiful and deeply comforting. Her
            work blends refined presentation with the warmth of home-baked
            tradition.
          </p>
          <p className="mt-4 text-base leading-7 text-[var(--color-dark-gray)]/80">
            What started as a passion for baking has grown into a trusted studio
            that creates elegant cakes, pastries, and event desserts for clients
            across the city.
          </p>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="rounded-[2rem] border border-[var(--color-ash)]/70 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
            The company
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark-gray)]">
            Elegant desserts, thoughtfully made.
          </h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Custom cakes for weddings, birthdays, and corporate events",
              "Fresh pastries and sweet treats baked daily",
              "Catering packages with beautiful presentation and delivery",
              "Personalized service from concept to beautifully served finale",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] bg-[var(--color-surface)] p-4 text-sm leading-6 text-[var(--color-dark-gray)]/80"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.article>
      </section>

      <section className="mx-auto mt-8 w-full max-w-7xl rounded-[2rem] border border-[var(--color-ash)]/70 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-8">
        <div className="mb-6 flex flex-col gap-2 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
            Meet the team
          </p>
          <h2 className="text-3xl font-semibold text-[var(--color-dark-gray)]">
            The people behind every detail
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25, type: "spring" }}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--color-ash)]/70 bg-[var(--color-surface)]"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-semibold text-[var(--color-dark-gray)]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[var(--color-orange)]">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;
