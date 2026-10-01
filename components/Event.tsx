export default function Event() {
  const details = [
    {
      number: "01",
      label: "DATE",
      value: "23 OCTOBER 2026",
      accent: "#f5b82e",
    },
    {
      number: "02",
      label: "VENUE",
      value: "LOVELY PROFESSIONAL UNIVERSITY",
      accent: "#7ec8ed",
    },
    {
      number: "03",
      label: "FORMAT",
      value: "IN-PERSON MEETUP",
      accent: "#f0443e",
    },
    {
      number: "04",
      label: "FOR",
      value: "STUDENTS · DEVELOPERS · BUILDERS",
      accent: "#f5b82e",
    },
  ];

  const experiences = [
    {
      title: "LEARN",
      text: "Discover open source workflows, tools, and ideas from people who actively build and contribute.",
      accent: "#f5b82e",
    },
    {
      title: "CONTRIBUTE",
      text: "Work on real projects, collaborate with others, and turn your skills into meaningful contributions.",
      accent: "#f0443e",
    },
    {
      title: "CONNECT",
      text: "Meet developers, students, contributors, and builders from the local open source community.",
      accent: "#7ec8ed",
    },
  ];

  return (
    <section
      id="event"
      className="relative overflow-hidden bg-[#063c35] px-6 py-28 text-[#f5f0df] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-[#7ec8ed]">
              02 — The Event
            </p>

            <h2 className="font-black uppercase leading-[0.8] tracking-[-0.07em]">
              <span className="block text-[clamp(3.8rem,6.5vw,6.5rem)]">
                Open
              </span>

              <span className="block text-[clamp(3.8rem,6.5vw,6.5rem)]">
                Source
              </span>

              <span className="block text-[clamp(3.8rem,6.5vw,6.5rem)] text-[#f0443e]">
                IRL.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:pb-2">
            <p className="text-2xl font-black leading-[1.08] tracking-[-0.035em] md:text-3xl">
              A day built around the people, projects, and ideas that make
              open source happen.
            </p>

            <p className="mt-6 max-w-xl font-mono text-sm leading-7 text-[#f5f0df]/55">
              Hacktoberfest Meetup — Phagwara brings the global open source
              celebration into an in-person community experience at Lovely
              Professional University.
            </p>
          </div>
        </div>

        <div className="mt-16 border-y-2 border-[#f5f0df]/25">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {details.map((item, index) => (
              <div
                key={item.number}
                className={`relative min-h-[210px] p-7 ${
                  index !== details.length - 1
                    ? "border-b border-[#f5f0df]/15 md:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#f5f0df]/30">
                    {item.number}
                  </span>

                  <span
                    className="h-3 w-3"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>

                <div className="mt-16">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#f5f0df]/40">
                    {item.label}
                  </p>

                  <p className="mt-3 max-w-[220px] text-lg font-black uppercase leading-tight tracking-[-0.025em]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#f5b82e]">
              What happens here
            </p>

            <div className="mt-7 grid gap-0 border-y border-[#f5f0df]/15">
              {experiences.map((item, index) => (
                <div
                  key={item.title}
                  className={`grid gap-5 py-6 sm:grid-cols-[180px_1fr] sm:items-center ${
                    index !== experiences.length - 1
                      ? "border-b border-[#f5f0df]/15"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="h-3 w-3 shrink-0"
                      style={{ backgroundColor: item.accent }}
                    />

                    <h3 className="text-xl font-black uppercase tracking-[-0.035em]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="max-w-xl font-mono text-xs leading-6 text-[#f5f0df]/50">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-[#f5f0df]/20 bg-[#0b4b42] p-8">
            <div className="absolute right-0 top-0 h-16 w-16 bg-[#f5b82e] [clip-path:polygon(100%_0,100%_100%,0_0)]" />

            <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#f5f0df]/40">
              Hosted with
            </p>

            <h3 className="mt-5 max-w-sm text-2xl font-black uppercase leading-[0.9] tracking-[-0.045em] md:text-3xl">
              AWS Student
              <br />
              <span className="text-[#7ec8ed]">Builder Group</span>
              <br />
              at LPU
            </h3>

            <div className="mt-8 border-t border-[#f5f0df]/15 pt-6">
              <p className="font-mono text-xs leading-6 text-[#f5f0df]/50">
                Hosted at Lovely Professional University, Phagwara.
              </p>

              <a
                href="https://awslpu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#f5b82e] transition-colors hover:text-[#f5f0df]"
              >
                Visit AWS SBG ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#f5f0df]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#f5f0df]/35">
            Hacktoberfest Meetup — Phagwara
          </p>

          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#f5f0df]/35">
            23 · 10 · 2026
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-24 h-20 w-20 bg-[#f5b82e] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute bottom-20 left-[-18px] h-16 w-16 rounded-full border-[9px] border-[#7ec8ed]/30" />
    </section>
  );
}