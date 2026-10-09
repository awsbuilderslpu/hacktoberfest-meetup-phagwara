const registrationUrl =
  "https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu";

const links = [
  { label: "About", href: "#about" },
  { label: "Event & Schedule", href: "#event" },
  { label: "Speakers", href: "#speakers" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] px-5 pb-6 pt-12 text-white sm:px-8 sm:pt-16 lg:px-14 lg:pt-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 border-b border-white/20 pb-10 sm:pb-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            <p className="mb-5 inline-block bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-black sm:text-xs">
              23 October 2026 · Phagwara
            </p>

            <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
              Build.
              <span className="block text-[#7ec8ed]">Contribute.</span>
              <span className="block text-[#ef3028]">Repeat.</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              One community. New ideas. More open source.
              See you at Hacktoberfest Meetup Phagwara.
            </p>
          </div>

          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-5 bg-[#ef3028] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#ffc329] hover:text-black"
          >
            Register for the Meetup
            <span aria-hidden="true" className="text-lg">↗</span>
          </a>
        </div>

        <div className="grid gap-8 border-b border-white/20 py-7 sm:grid-cols-2 sm:items-start sm:py-9">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em]">
              Hosted by
            </p>

            <a
              href="https://awslpu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-3"
            >
              <img
                src="/aws_sbg.png"
                alt="AWS Student Builder Group"
                className="h-10 w-10 object-contain"
              />

              <span>
                <span className="block text-sm font-bold">
                  AWS Student Builder Group
                </span>
                <span className="mt-1 block text-xs text-white/50">
                  Lovely Professional University
                </span>
              </span>
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em]">
              Explore
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/65 transition-colors hover:text-[#ffc329]"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://linkedin.com/company/awsbuilderslpu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/65 transition-colors hover:text-[#ffc329]"
              >
                LinkedIn ↗
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-2 pt-5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Hacktoberfest Meetup Phagwara</span>
          <a
            href="https://hacktoberfest.awslpu.in"
            className="transition-colors hover:text-white"
          >
            hacktoberfest.awslpu.in ↗
          </a>
        </div>
      </div>
    </footer>
  );
}