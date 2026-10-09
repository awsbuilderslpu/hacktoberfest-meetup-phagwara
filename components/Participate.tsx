const registrationUrl =
  "https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu";

const steps = [
  {
    number: "01",
    title: "Register.",
    text: "Reserve your spot through the official event page.",
  },
  {
    number: "02",
    title: "Show Up.",
    text: "Bring your laptop, charger, and GitHub account.",
  },
  {
    number: "03",
    title: "Build & Contribute.",
    text: "Explore projects, collaborate, and make something useful.",
  },
  {
    number: "04",
    title: "Meet Your People.",
    text: "Share ideas and connect with fellow developers.",
  },
];

export default function Participate() {
  return (
    <section
      id="participate"
      className="overflow-hidden bg-[#ffc329] px-5 py-14 text-[#171717] sm:px-8 sm:py-20 lg:px-14 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-7 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-12">
          <div>
            <p className="mb-5 inline-block bg-black px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white sm:text-xs">
              Your Next Step
            </p>

            <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.085em]">
              Ready?
              <span className="block text-[#ef3028]">Let's Build.</span>
            </h2>
          </div>

          <div className="max-w-md lg:justify-self-end">
            <p className="text-base leading-7 sm:text-lg sm:leading-8">
              First contribution or fiftieth project — there's room for you
              here. Bring your curiosity, meet the community, and get building.
            </p>

            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-5 bg-[#ef3028] px-6 py-4 font-mono text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-black"
            >
              Register for the Meetup
              <span aria-hidden="true" className="text-lg">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid border-t-2 border-black sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className={`py-6 sm:px-5 sm:py-7 lg:py-8 ${
                index % 2 === 0 ? "sm:border-r lg:border-r" : ""
              } ${
                index < 2 ? "border-b border-black/25 lg:border-b-0" : ""
              } ${index === 2 ? "sm:border-b-0" : ""} ${
                index !== 0 ? "lg:border-l lg:border-black/25" : ""
              }`}
            >
              <span className="font-mono text-xs font-bold text-black/50">
                STEP {step.number}
              </span>

              <h3 className="mt-5 text-xl font-black uppercase leading-tight tracking-[-0.04em] sm:text-2xl">
                {step.title}
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-black/65">
                {step.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-black/25 pt-5">
          <p className="text-sm font-bold">
            23 October 2026 · Lovely Professional University, Phagwara
          </p>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black/50">
            Open to curious builders
          </span>
        </div>
      </div>
    </section>
  );
}