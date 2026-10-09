const details = [
  { label: "DATE", value: "23 October 2026" },
  { label: "LOCATION", value: "Lovely Professional University, Phagwara" },
  { label: "FORMAT", value: "In-person meetup" },
];

const sessions = [
  { time: "09:30–10:00", title: "Check-in & Welcome", tag: "COMMUNITY" },
  { time: "10:00–11:00", title: "Opening Session / Open Source 101", tag: "OPEN SOURCE" },
  { time: "11:00–12:00", title: "Building in the Age of AI", tag: "AI" },
  { time: "12:00–13:00", title: "From Code to Cloud", tag: "CLOUD" },
  { time: "13:00–14:00", title: "Community Break", tag: "BREAK" },
  { time: "14:00–15:00", title: "Contribution Sprint", tag: "HANDS-ON" },
  { time: "15:00–16:00", title: "Developer Journey / Career Session", tag: "CAREERS" },
  { time: "16:00–16:30", title: "Show & Tell, Closing & Community Photo", tag: "WRAP-UP" },
];

const tracks = [
  "Open Source Fundamentals",
  "Git & GitHub",
  "Building in the Age of AI",
  "From Code to Cloud",
  "Contribution Sprint",
];

export default function Event() {
  return (
    <section
      id="event"
      className="overflow-hidden bg-[#111111] px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-6 border-b border-white/20 pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-5 inline-flex bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-black sm:text-xs">
              The Meetup · 23.10.2026
            </p>

            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              One Day.
              <span className="block text-[#7ec8ed]">Many Things</span>
              <span className="block">To Build.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:justify-self-end">
            A day of open-source learning, AI, cloud technology, and hands-on
            collaboration. Come curious, leave with new ideas and connections.
          </p>
        </div>

        <div className="grid border-b border-white/20 sm:grid-cols-3">
          {details.map((item, index) => (
            <div
              key={item.label}
              className={`py-5 sm:pr-5 ${
                index !== details.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r sm:pl-5"
                  : "sm:pl-5"
              } ${index === 0 ? "sm:pl-0" : ""}`}
            >
              <p className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#ffc329]">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 sm:text-base">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:pt-14">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#7ec8ed]">
              What you'll explore
            </p>

            <h3 className="max-w-md text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl">
              From first commit to cloud deployment.
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/55">
              Explore practical developer skills, learn from the community, and
              make time to build together.
            </p>

            <div className="mt-7 border-t border-white/20">
              {tracks.map((track, index) => (
                <div
                  key={track}
                  className="flex items-center gap-4 border-b border-white/15 py-3.5"
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 ${
                      index % 3 === 0
                        ? "bg-[#ef3028]"
                        : index % 3 === 1
                          ? "bg-[#ffc329]"
                          : "bg-[#7ec8ed]"
                    }`}
                  />
                  <span className="text-sm font-medium text-white/85">
                    {track}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div id="schedule" className="scroll-mt-8">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#7ec8ed]">
                  Plan your day
                </p>
                <h3 className="text-3xl font-black uppercase tracking-[-0.06em] sm:text-4xl">
                  The Schedule<span className="text-[#ffc329]">.</span>
                </h3>
              </div>

              <span className="font-mono text-xs text-white/50">
                09:30 — 16:30
              </span>
            </div>

            <div className="border-t-2 border-[#7ec8ed]">
              {sessions.map((session, index) => (
                <div
                  key={session.time}
                  className="grid grid-cols-[92px_1fr] gap-3 border-b border-white/15 py-4 sm:grid-cols-[125px_1fr] sm:gap-5 sm:py-5"
                >
                  <span className="pt-1 font-mono text-[10px] font-bold text-[#ffc329] sm:text-xs">
                    {session.time}
                  </span>

                  <div className="min-w-0">
                    <h4
                      className={`text-sm font-bold leading-6 sm:text-base ${
                        index === 5 ? "text-[#7ec8ed]" : "text-white"
                      }`}
                    >
                      {session.title}
                    </h4>

                    <span className="mt-1.5 inline-block font-mono text-[9px] font-bold tracking-[0.12em] text-white/40">
                      {session.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs leading-5 text-white/40">
              Proposed schedule. Session details and timings may change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}