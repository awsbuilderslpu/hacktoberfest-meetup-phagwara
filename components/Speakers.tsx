export default function Speakers() {
  const speakers = [
    {
      number: "01",
      name: "Speaker 01",
      role: "Open Source Contributor",
      topic: "Session topic coming soon",
      accent: "#f5b82e",
    },
    {
      number: "02",
      name: "Speaker 02",
      role: "Developer / Builder",
      topic: "Session topic coming soon",
      accent: "#7ec8ed",
    },
    {
      number: "03",
      name: "Speaker 03",
      role: "Open Source Contributor",
      topic: "Session topic coming soon",
      accent: "#f0443e",
    },
  ];

  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-[#063c35] px-6 py-32 text-[#f5f0df] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#7ec8ed]">
              04 - Speakers
            </p>

            <h2 className="font-black uppercase leading-[0.78] tracking-[-0.07em]">
              <span className="block text-[clamp(4rem,7vw,7rem)]">
                Meet The
              </span>

              <span className="block text-[clamp(4rem,7vw,7rem)] text-[#f0443e]">
                Builders.
              </span>
            </h2>
          </div>

          <p className="max-w-md border-l-2 border-[#f5b82e] pl-5 font-mono text-xs leading-6 text-[#f5f0df]/50 lg:mb-2">
            People who build, contribute, teach, and share what they've
            learned. Speaker lineup and session details will be announced
            soon.
          </p>
        </div>

        <div className="mt-20 border-t border-[#f5f0df]/25">
          {speakers.map((speaker) => (
            <div
              key={speaker.number}
              className="group grid gap-6 border-b border-[#f5f0df]/20 py-8 transition-colors hover:bg-[#0b4b42] md:grid-cols-[70px_70px_1fr_1fr_auto] md:items-center md:gap-8 md:px-5"
            >
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#f5f0df]/30">
                {speaker.number}
              </span>

              <span
                className="h-12 w-12"
                style={{ backgroundColor: speaker.accent }}
              />

              <div>
                <h3 className="text-2xl font-black uppercase tracking-[-0.04em] md:text-3xl">
                  {speaker.name}
                </h3>

                <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#7ec8ed]">
                  {speaker.role}
                </p>
              </div>

              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#f5f0df]/35">
                  Speaking on
                </p>

                <p className="mt-2 text-sm font-bold uppercase tracking-[-0.01em] text-[#f5f0df]/70">
                  {speaker.topic}
                </p>
              </div>

              <span className="font-mono text-lg text-[#f5b82e] transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-[#f5f0df]/15 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#f5f0df]/35">
              More to come
            </p>

            <p className="mt-3 max-w-xl text-xl font-black uppercase leading-tight tracking-[-0.03em] md:text-2xl">
              The lineup will grow as the meetup gets closer.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-3 w-3 bg-[#f0443e]" />
            <span className="h-3 w-8 bg-[#f5b82e]" />
            <span className="h-3 w-3 bg-[#7ec8ed]" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-[-30px] top-36 h-24 w-24 rotate-45 border-[10px] border-[#f5b82e]/30" />

      <div className="pointer-events-none absolute bottom-24 left-0 h-20 w-20 bg-[#7ec8ed] [clip-path:polygon(0_0,100%_100%,0_100%)]" />
    </section>
  );
}