import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../index.css";

const faqs = [
  {
    question: "Do you offer custom cake designs?",
    answer:
      "Yes. We create customized cakes for birthdays, weddings, anniversaries, and corporate events, with flavors and finishes tailored to your taste.",
  },
  {
    question: "Can you handle catering for larger events?",
    answer:
      "Absolutely. Our catering service is available for intimate gatherings as well as larger celebrations, with menus and presentation designed around your event.",
  },
  {
    question: "How far in advance should I place an order?",
    answer:
      "For custom cakes and catering, we recommend booking as early as possible, especially for weekends, weddings, and holiday periods.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes, delivery can be arranged for selected locations and event orders. We’ll confirm availability when you reach out.",
  },
];

function Section4() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl mb-8 rounded-[2rem] border border-[var(--color-ash)]/70 bg-[var(--color-cream)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-orange)]">
          Frequently asked questions
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark-gray)]">
          Everything you might want to know before ordering
        </h2>
        <p className="mt-3 text-base leading-7 text-[var(--color-dark-gray)]/80">
          We’ve put together a few of the most common questions about cakes, pastries, and catering so you can feel confident planning your order.
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-[1.25rem] border border-white/70 bg-white/85 shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-[var(--color-dark-gray)]">
                  {item.question}
                </span>
                <span className="text-2xl font-light text-[var(--color-orange)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-dark-gray)]/80">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Section4;