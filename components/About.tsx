const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    text: "A community challenge encouraging developers to contribute to open source.",
    color: "#ef3028",
    background: "#ef3028",
    textColor: "#ffffff",
  },
  {
    year: "2015–25",
    title: "Global Growth",
    text: "Developers around the world come together to discover projects and collaborate.",
    color: "#2055a5",
    background: "#7ec8ed",
    textColor: "#111111",
  },
  {
    year: "2026",
    title: "Build Together",
    text: "Bring that spirit to Phagwara through open source, AI, cloud, and community.",
    color: "#ffc329",
    background: "#ffc329",
    textColor: "#111111",
  },
];

const highlights = [
  {
    number: "01",
    title: "Learn",
    text: "Explore tools, ideas, and new skills.",
    color: "#ef3028",
  },
  {
    number: "02",
    title: "Build",
    text: "Turn your ideas into working projects.",
    color: "#2055a5",
  },
  {
    number: "03",
    title: "Contribute",
    text: "Make your first contribution or help a project grow.",
    color: "#ef3028",
  },
  {
    number: "04",
    title: "Connect",
    text: "Meet developers and find your people.",
    color: "#2055a5",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#faf9f6] px-5 py-14 text-[#171717] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 inline-block bg-[#ffc329] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
              About Hacktoberfest
            </p>

            <h2 className="text-[clamp(3rem,7vw,6.5rem)] font-black uppercase leading-[0.86] tracking-[-0.075em]">
              Open Source
              <span className="block text-[#ef3028]">
                Is Better
              </span>
              <span className="block">Together.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-2">
            <p className="text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
              Great software doesn't happen in isolation. Hacktoberfest
              celebrates the people who build, share, and improve open-source
              software together.
            </p>

            <a
              href="https://hacktoberfest.com/mission/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-3 border-b-2 border-[#ef3028] pb-1 text-sm font-bold transition-colors hover:text-[#ef3028]"
            >
              Discover the Hacktoberfest mission
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-14 sm:mt-20">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-2xl font-black uppercase tracking-[-0.05em] sm:text-3xl">
              A movement that keeps growing.
            </h3>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black/45">
              The journey
            </span>
          </div>

          <div className="grid gap-3 md:grid-cols-3 md:gap-4">
            {timeline.map((item, index) => (
              <article
                key={item.year}
                className="relative flex min-h-[225px] flex-col justify-between p-5 sm:min-h-[255px] sm:p-7"
                style={{
                  backgroundColor: item.background,
                  color: item.textColor,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-xs font-bold opacity-75">
                    {String(index + 1).padStart(2, "0")} / HISTORY
                  </span>
                  <span aria-hidden="true" className="text-2xl font-black">
                    ↗
                  </span>
                </div>

                <div>
                  <p
                    className="text-4xl font-black tracking-[-0.07em] sm:text-5xl"
                    style={{ color: index === 1 ? "#2055a5" : item.textColor }}
                  >
                    {item.year}
                  </p>

                  <h4 className="mt-3 text-xl font-black uppercase tracking-tight">
                    {item.title}
                  </h4>

                  <p className="mt-2 max-w-sm text-sm leading-6 opacity-80">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-3 text-xs leading-5 text-black/45">
            A brief community timeline, not a complete history of Hacktoberfest.
          </p>
        </div>

        <div className="mt-14 border-t border-black/15 pt-7 sm:mt-20 sm:pt-9">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <h3 className="text-3xl font-black uppercase tracking-[-0.06em] sm:text-4xl">
              Come for the code.
              <span className="block text-[#2055a5]">Stay for the community.</span>
            </h3>
            <p className="max-w-xs text-sm leading-6 text-black/55">
              Wherever you are in your developer journey, there's room to
              participate.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-4 md:gap-6">
            {highlights.map((item) => (
              <article key={item.number}>
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="h-1.5 w-8"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-mono text-xs font-bold text-black/40">
                    {item.number}
                  </span>
                </div>

                <h4 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                  {item.title}
                </h4>

                <p className="mt-2 max-w-xs text-sm leading-6 text-black/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}