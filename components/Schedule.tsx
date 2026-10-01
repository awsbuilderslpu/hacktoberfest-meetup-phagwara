export default function Schedule() {
  const schedule = [
    {
      time: "09:30",
      period: "AM",
      title: "CHECK IN",
      description: "Arrive, grab your badge, and meet the community.",
      accent: "#7ec8ed",
    },
    {
      time: "10:00",
      period: "AM",
      title: "OPEN SOURCE 101",
      description:
        "Git, GitHub, repositories, issues, pull requests, and getting started.",
      accent: "#f5b82e",
    },
    {
      time: "11:00",
      period: "AM",
      title: "SPEAKER SESSION",
      description: "Open source talk by Speaker 01.",
      accent: "#f0443e",
      speaker: true,
    },
    {
      time: "12:00",
      period: "PM",
      title: "SPEAKER SESSION",
      description: "Open source talk by Speaker 02.",
      accent: "#7ec8ed",
      speaker: true,
    },
    {
      time: "01:00",
      period: "PM",
      title: "COMMUNITY BREAK",
      description: "Food, conversations, networking, and a little chaos.",
      accent: "#f5b82e",
    },
    {
      time: "02:00",
      period: "PM",
      title: "CONTRIBUTE",
      description:
        "Find a project, work with others, and make your contribution.",
      accent: "#f0443e",
    },
    {
      time: "03:00",
      period: "PM",
      title: "SPEAKER SESSION",
      description: "Open source talk by Speaker 03.",
      accent: "#f5b82e",
      speaker: true,
    },
    {
      time: "04:00",
      period: "PM",
      title: "SHOW & TELL",
      description:
        "Share what you built, learned, and contributed throughout the day.",
      accent: "#7ec8ed",
    },
  ];

  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-[#f5f0df] px-6 py-32 text-[#063c35] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#f0443e]">
              03 - Schedule
            </p>

            <h2 className="font-black uppercase leading-[0.78] tracking-[-0.07em]">
              <span className="block text-[clamp(4rem,7vw,7rem)]">
                The Day
              </span>

              <span className="block text-[clamp(4rem,7vw,7rem)] text-[#f0443e]">
                Unfolds.
              </span>
            </h2>
          </div>

          <div className="border-l-2 border-[#063c35] pl-5 lg:mb-2">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em]">
              Talks
            </p>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#063c35]/45">
              Contributions
            </p>

            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#063c35]/45">
              Community
            </p>
          </div>
        </div>

        <div className="mt-16 border-t-2 border-[#063c35]">
          {schedule.map((item, index) => (
            <div
              key={`${item.time}-${item.title}`}
              className={`group grid gap-5 border-b border-[#063c35]/20 px-2 py-6 transition-colors md:grid-cols-[130px_1fr_1.3fr] md:items-center md:gap-8 ${
                item.speaker
                  ? "bg-[#063c35] px-5 text-[#f5f0df]"
                  : "hover:bg-white"
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black tracking-[-0.06em] md:text-4xl">
                  {item.time}
                </span>

                <span
                  className={`font-mono text-[9px] font-bold uppercase tracking-widest ${
                    item.speaker
                      ? "text-[#f5b82e]"
                      : "text-[#f0443e]"
                  }`}
                >
                  {item.period}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="h-3 w-3 shrink-0"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-black uppercase tracking-[-0.035em] md:text-2xl">
                    {item.title}
                  </h3>

                  {item.speaker && (
                    <span className="border border-[#f5b82e] px-2 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-[#f5b82e]">
                      Speaker
                    </span>
                  )}
                </div>
              </div>

              <p
                className={`max-w-xl font-mono text-xs leading-6 ${
                  item.speaker
                    ? "text-[#f5f0df]/55"
                    : "text-[#063c35]/55"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#063c35]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-[#f0443e]" />
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em]">
              23 October 2026
            </span>
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#063c35]/40">
            Schedule subject to change
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-24 h-20 w-20 bg-[#f5b82e] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute bottom-20 left-[-18px] h-16 w-16 rounded-full border-[9px] border-[#7ec8ed]/40" />
    </section>
  );
}