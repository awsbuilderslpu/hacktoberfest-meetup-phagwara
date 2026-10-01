export default function About() {
  const highlights = [
    {
      number: "01",
      title: "LEARN",
      text: "Explore open source, discover new workflows, and learn from people who build and contribute.",
      accent: "#f5b82e",
    },
    {
      number: "02",
      title: "BUILD",
      text: "Turn ideas into something real. Work on projects, experiment, and build alongside the community.",
      accent: "#7ec8ed",
    },
    {
      number: "03",
      title: "CONTRIBUTE",
      text: "Make your first pull request or bring your existing experience to projects that need contributors.",
      accent: "#f0443e",
    },
    {
      number: "04",
      title: "CONNECT",
      text: "Meet developers, students, contributors, and builders who are creating things in public.",
      accent: "#063c35",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f5f0df] px-6 py-28 text-[#063c35] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[0.35em] text-[#f0443e]">
              01 — About The Meetup
            </p>

            <h2 className="font-black uppercase leading-[0.8] tracking-[-0.07em]">
              <span className="block text-[clamp(3.5rem,6vw,6rem)]">
                Open
              </span>

              <span className="block text-[clamp(3.5rem,6vw,6rem)]">
                Source
              </span>

              <span className="block text-[clamp(3.5rem,6vw,6rem)] text-[#f5b82e]">
                For
              </span>

              <span className="block text-[clamp(3.5rem,6vw,6rem)]">
                Everyone.
              </span>
            </h2>
          </div>

          <div className="pt-2 lg:pt-12">
            <p className="max-w-3xl text-2xl font-black leading-[1.08] tracking-[-0.035em] md:text-3xl">
              Hacktoberfest Meetup - Phagwara is a place to learn, build,
              contribute, and connect through open source.
            </p>

            <p className="mt-7 max-w-2xl font-mono text-sm leading-7 text-[#063c35]/60">
              Whether you're opening your first pull request or already
              contributing to projects, come spend a day with developers,
              students, contributors, and builders. Learn from others, work
              together, and become part of the open source community.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-l-2 border-[#f0443e] pl-5">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em]">
                23 October 2026
              </span>

              <span className="hidden h-4 w-px bg-[#063c35]/20 sm:block" />

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#063c35]/50">
                Lovely Professional University
              </span>
            </div>
          </div>
        </div>

        <div className="mt-20 border-y-2 border-[#063c35]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.number}
                className={`group relative min-h-[280px] p-7 transition-colors hover:bg-white ${
                  index !== highlights.length - 1
                    ? "border-b border-[#063c35]/20 md:border-r lg:border-b-0"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-[#063c35]/35">
                    {item.number}
                  </span>

                  <span
                    className="h-4 w-4 transition-transform group-hover:rotate-45"
                    style={{ backgroundColor: item.accent }}
                  />
                </div>

                <div className="mt-20">
                  <h3 className="text-2xl font-black uppercase tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xs font-mono text-xs leading-6 text-[#063c35]/55">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#063c35]/20 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-mono text-[9px] uppercase leading-6 tracking-[0.18em] text-[#063c35]/40">
            Your first contribution, your next project, or simply your first
            conversation about open source — start here.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-[#f0443e]" />
            <span className="h-2 w-7 bg-[#f5b82e]" />
            <span className="h-2 w-2 bg-[#7ec8ed]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 top-24 h-32 w-32 rounded-full border-[18px] border-[#7ec8ed]/25" />

      <div className="pointer-events-none absolute bottom-16 left-0 h-20 w-20 bg-[#f0443e] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
    </section>
  );
}