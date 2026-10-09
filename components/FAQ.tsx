"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is Hacktoberfest?",
    answer:
      "Hacktoberfest is a global celebration of open-source software and the people who contribute to it. This meetup brings the community together to learn, collaborate, and build.",
  },
  {
    question: "Who can attend?",
    answer:
      "Students, beginners, experienced developers, and anyone curious about open source, AI, or cloud technology are welcome.",
  },
  {
    question: "Do I need open-source experience?",
    answer:
      "No. You can join as a beginner, learn how contributions work, and explore projects with the community.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your laptop, charger, and GitHub account. Having Git installed is helpful, but you can use the meetup to learn too.",
  },
  {
    question: "Is the meetup free?",
    answer:
      "Check the official registration page for the latest admission details and any event-specific requirements.",
  },
  {
    question: "Where and when is the meetup?",
    answer:
      "The meetup is scheduled for 23 October 2026 at Lovely Professional University, Phagwara, Punjab. Check your registration confirmation for any updated venue or arrival instructions.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#faf9f6] px-5 py-14 text-[#171717] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="mb-5 inline-block bg-[#7ec8ed] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
            Need to Know
          </p>

          <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-black uppercase leading-[0.85] tracking-[-0.075em]">
            Got
            <span className="block text-[#ef3028]">Questions?</span>
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-6 text-black/60 sm:text-base sm:leading-7">
            Everything you need to know before joining us in Phagwara.
          </p>
        </div>

        <div className="border-t-2 border-black">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article key={faq.question} className="border-b border-black/20">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                >
                  <span className="flex items-start gap-4">
                    <span className="pt-1 font-mono text-xs font-bold text-[#ef3028]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-bold leading-6 sm:text-lg">
                      {faq.question}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-8 w-8 shrink-0 items-center justify-center text-xl font-medium transition-colors ${
                      isOpen
                        ? "bg-[#ef3028] text-white"
                        : "bg-[#ffc329] text-black"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-5 pl-9 pr-10 sm:pb-6"
                >
                  <p className="max-w-2xl text-sm leading-6 text-black/65 sm:text-base sm:leading-7">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}