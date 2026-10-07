"use client";

import { useState } from "react";

const faqs = [
  {
    question: "WHAT IS HACKTOBERFEST?",
    answer:
      "Hacktoberfest is a celebration of open source that brings developers, contributors, and communities together to learn, build, collaborate, and contribute.",
  },
  {
    question: "DO I NEED OPEN SOURCE EXPERIENCE?",
    answer:
      "No. Whether you're making your first contribution or already active in open source, you're welcome. Come ready to learn and participate.",
  },
  {
    question: "WHAT SHOULD I BRING?",
    answer:
      "Bring your laptop, charger, GitHub account, and curiosity. Most importantly, come ready to meet people and build something.",
  },
  {
    question: "IS THE MEETUP FREE?",
    answer:
      "Check the official Hacktoberfest event registration page for the latest registration and participation details.",
  },
  {
    question: "DO I NEED A GITHUB ACCOUNT?",
    answer:
      "A GitHub account is recommended if you want to participate in open source contributions during the meetup.",
  },
  {
    question: "WHERE DO I REGISTER?",
    answer:
      "Registration happens through the official Hacktoberfest platform. Use the registration button on this page to get started.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#063c35] px-6 py-32 text-[#f5f0df] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#7ec8ed]">
              06 - FAQ
            </p>

            <h2 className="font-black uppercase leading-[0.78] tracking-[-0.07em]">
              <span className="block text-[clamp(4rem,7vw,7rem)]">
                Got
              </span>

              <span className="block text-[clamp(4rem,7vw,7rem)] text-[#f0443e]">
                Questions?
              </span>
            </h2>

            <p className="mt-8 max-w-xs border-l-2 border-[#f5b82e] pl-5 font-mono text-xs leading-6 text-[#f5f0df]/50">
              Everything you need to know before you show up, contribute, and
              get involved.
            </p>
          </div>

          <div className="border-t border-[#f5f0df]/25">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#f5f0df]/20"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 font-mono text-[9px] font-bold tracking-[0.2em] text-[#f5f0df]/25">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-lg font-black uppercase tracking-[-0.025em] transition-colors md:text-xl ${
                          isOpen ? "text-[#f5b82e]" : "text-[#f5f0df]"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-[#f5f0df]/25 font-mono text-sm transition-all ${
                        isOpen
                          ? "rotate-45 border-[#f5b82e] text-[#f5b82e]"
                          : "text-[#f5f0df]/60"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-10 font-mono text-xs leading-7 text-[#f5f0df]/50 md:text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 grid gap-8 border border-[#f5f0df]/15 bg-[#0b4b42] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#f5b82e]">
              23 October 2026 · Phagwara
            </p>

            <h3 className="mt-4 text-3xl font-black uppercase leading-none tracking-[-0.04em] md:text-4xl">
              Still have questions?
              <br />
              <span className="text-[#7ec8ed]">Come find out.</span>
            </h3>
          </div>

          <a
            href="https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu"
            className="group flex w-fit items-center gap-5 border-2 border-[#f5b82e] bg-[#f5b82e] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#063c35] transition-colors hover:bg-transparent hover:text-[#f5b82e]"
          >
            Join Hacktoberfest
            <span className="text-base transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-32 h-20 w-20 bg-[#f5b82e] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute bottom-20 left-[-18px] h-16 w-16 rounded-full border-[9px] border-[#f0443e]/40" />
    </section>
  );
}