"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 right-0 top-0 z-50 px-6 py-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="group flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xl font-black tracking-[-0.12em] text-[#063c35]">
              {"</>"}
            </span>

            <span className="h-7 w-[2px] bg-[#f0443e]" />
          </div>

          <div className="leading-none">
            <p className="font-black uppercase tracking-[-0.03em] text-[#063c35]">
              Hacktoberfest
            </p>

            <p className="mt-1 font-mono text-[8px] font-bold uppercase tracking-[0.25em] text-[#f0443e]">
              Meetup · Phagwara
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#about"
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35]/60 transition-colors hover:text-[#f0443e]"
          >
            About
          </Link>

          <Link
            href="#event"
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35]/60 transition-colors hover:text-[#f0443e]"
          >
            Event
          </Link>

          <Link
            href="#schedule"
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35]/60 transition-colors hover:text-[#f0443e]"
          >
            Schedule
          </Link>

          <Link
            href="#speakers"
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35]/60 transition-colors hover:text-[#f0443e]"
          >
            Speakers
          </Link>

          <Link
            href="#faq"
            className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35]/60 transition-colors hover:text-[#f0443e]"
          >
            FAQ
          </Link>
        </div>

        <a
          href="https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu"
          className="group relative border-2 border-[#063c35] bg-[#f5b82e] px-5 py-2.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#063c35] transition-all hover:bg-[#f0443e] hover:text-[#f5f0df]"
        >
          Register
          <span className="ml-2">↗</span>

          <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 bg-[#f0443e] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}