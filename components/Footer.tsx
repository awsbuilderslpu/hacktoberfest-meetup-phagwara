export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f0df] px-6 pb-8 pt-28 text-[#063c35] lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="relative border-y border-[#063c35]/20 py-20 md:py-24">
          <div className="max-w-5xl">
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#f0443e]">
              Hacktoberfest Meetup · Phagwara
            </p>

            <h2 className="font-black uppercase leading-[0.76] tracking-[-0.08em]">
              <span className="block text-[clamp(4rem,9vw,9rem)]">
                Build.
              </span>

              <span className="block text-[clamp(4rem,9vw,9rem)]">
                Contribute.
              </span>

              <span className="block text-[clamp(4rem,9vw,9rem)] text-[#f0443e]">
                Repeat.
              </span>
            </h2>

            <p className="mt-10 max-w-xl font-mono text-sm leading-7 text-[#063c35]/55">
              A Hacktoberfest meetup in Phagwara, hosted with the AWS Student
              Builder Group at Lovely Professional University.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#register"
                className="w-fit border-2 border-[#063c35] bg-[#063c35] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5f0df] transition-colors hover:bg-transparent hover:text-[#063c35]"
              >
                Join Hacktoberfest ↗
              </a>

              <a
                href="#about"
                className="w-fit border-2 border-[#063c35]/30 px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] transition-colors hover:border-[#063c35] hover:bg-white"
              >
                Back to top ↑
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-8 right-0 hidden md:block">
            <div className="relative h-44 w-44">
              <div className="absolute right-0 top-0 h-28 w-28 bg-[#f5b82e]" />

              <div className="absolute bottom-0 left-0 h-20 w-20 bg-[#7ec8ed]" />

              <div className="absolute bottom-8 right-8 h-20 w-20 bg-[#f0443e]" />

              <div className="absolute bottom-14 right-14 flex h-12 w-12 items-center justify-center border-2 border-[#f5f0df] bg-[#063c35]">
                <span className="font-mono text-[9px] font-bold text-[#f5f0df]">
                  {"</>"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xl font-bold text-[#f0443e]">
                {"</>"}
              </span>

              <span className="font-black uppercase tracking-[-0.04em]">
                Hacktoberfest Meetup
              </span>
            </div>

            <p className="mt-4 max-w-sm font-mono text-xs leading-6 text-[#063c35]/50">
              Phagwara · 23 October 2026
              <br />
              Hosted at Lovely Professional University.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#063c35]/40">
              Explore
            </p>

            <div className="flex flex-col gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
              <a
                href="#about"
                className="transition-colors hover:text-[#f0443e]"
              >
                About
              </a>

              <a
                href="#event"
                className="transition-colors hover:text-[#f0443e]"
              >
                Event
              </a>

              <a
                href="#schedule"
                className="transition-colors hover:text-[#f0443e]"
              >
                Schedule
              </a>

              <a
                href="#speakers"
                className="transition-colors hover:text-[#f0443e]"
              >
                Speakers
              </a>

              <a
                href="#faq"
                className="transition-colors hover:text-[#f0443e]"
              >
                FAQ
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#063c35]/40">
              Connect
            </p>

            <div className="flex flex-col gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.15em]">
              <a
                href="https://www.linkedin.com/in/shashankpandey04/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#f0443e]"
              >
                Shashank Pandey ↗
              </a>

              <a
                href="https://linkedin.com/company/awsbuilderslpu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#f0443e]"
              >
                AWS Student Builder Group ↗
              </a>

              <a
                href="https://hacktoberfest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[#f0443e]"
              >
                Hacktoberfest ↗
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#063c35]/20 pt-6 font-mono text-[9px] uppercase tracking-[0.2em] text-[#063c35]/40 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Shashank Pandey</p>

          <p>
            Hosted with{" "}
            <span className="text-[#f0443e]">
              AWS Student Builder Group at LPU
            </span>
          </p>

          <p>
            Built with <span className="text-[#f0443e]">♥</span> & open source
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-120px] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border border-[#063c35]/10" />
    </footer>
  );
}