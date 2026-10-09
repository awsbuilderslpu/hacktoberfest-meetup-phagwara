const registrationUrl =
  "https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="bg-white px-5 py-14 text-[#171717] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 inline-block bg-[#7ec8ed] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] sm:text-xs">
              Speakers & Community
            </p>

            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.075em]">
              Meet The
              <span className="block text-[#2055a5]">Builders.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-black/65 sm:text-lg sm:leading-8 lg:justify-self-end">
            Real experiences, lessons learned, and ideas worth sharing.
            Discover perspectives on open source, AI, cloud technology, and
            growing as a developer.
          </p>
        </div>

        <div className="mt-10 grid gap-0 border-y-2 border-black md:grid-cols-[0.85fr_1.15fr]">
          <div className="flex min-h-[250px] flex-col justify-between bg-[#2055a5] p-6 text-white sm:min-h-[300px] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">
                The people behind the ideas
              </span>
              <span aria-hidden="true" className="text-3xl font-black text-[#ffc329]">
                ↗
              </span>
            </div>

            <div>
              <p className="text-3xl font-black uppercase leading-tight tracking-[-0.05em] sm:text-4xl">
                Learn from
                <br />
                people who build.
              </p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                Practical knowledge is better when it comes with real-world
                experience.
              </p>
            </div>
          </div>

          <div className="flex min-h-[250px] flex-col justify-center p-6 sm:min-h-[300px] sm:p-9 md:border-l-2 md:border-black">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#ef3028]">
              Lineup update
            </p>

            <h3 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.06em] sm:text-4xl">
              Speakers
              <span className="block text-[#2055a5]">Coming Soon.</span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-black/60">
              We're preparing the session lineup. Confirmed speakers and
              session details will be published here as they're announced.
            </p>

            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-3 border-2 border-black px-5 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.12em] transition-colors hover:bg-[#ffc329]"
            >
              Join the Meetup
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}