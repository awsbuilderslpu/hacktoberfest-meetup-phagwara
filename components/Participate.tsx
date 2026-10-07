export default function Participate() {
  const steps = [
    {
      number: "01",
      title: "REGISTER",
      text: "Register through the official Hacktoberfest platform and save your spot for the meetup.",
      accent: "#f5b82e",
    },
    {
      number: "02",
      title: "SHOW UP",
      text: "Bring your laptop, charger, GitHub account, and curiosity. Come ready to meet people.",
      accent: "#7ec8ed",
    },
    {
      number: "03",
      title: "CONTRIBUTE",
      text: "Find a project, collaborate with contributors, and make your mark on open source.",
      accent: "#f0443e",
    },
    {
      number: "04",
      title: "CELEBRATE",
      text: "Share what you built, connect with the community, and celebrate what you shipped.",
      accent: "#f5b82e",
    },
  ];

  return (
    <section
      id="participate"
      className="relative overflow-hidden bg-[#f5f0df] px-6 py-32 text-[#063c35] lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-[#f0443e]">
              05 - Participate
            </p>

            <h2 className="font-black uppercase leading-[0.78] tracking-[-0.07em]">
              <span className="block text-[clamp(4rem,7vw,7rem)]">
                Ready?
              </span>

              <span className="block text-[clamp(4rem,7vw,7rem)] text-[#f0443e]">
                Let's Build.
              </span>
            </h2>
          </div>

          <p className="max-w-md border-l-2 border-[#063c35] pl-5 font-mono text-xs leading-6 text-[#063c35]/55 lg:mb-2">
            You don't need to be an open source expert. Just bring something
            you're curious about and a willingness to contribute.
          </p>
        </div>

        <div className="mt-20 border-y-2 border-[#063c35]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative min-h-[350px] p-7 transition-colors hover:bg-white ${
                  index !== steps.length - 1
                    ? "border-b border-[#063c35]/20 md:border-r lg:border-b-0"
                    : ""
                } ${
                  index === 1
                    ? "lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#063c35]/35">
                    {step.number}
                  </span>

                  <span
                    className="h-4 w-4 transition-transform group-hover:rotate-45"
                    style={{ backgroundColor: step.accent }}
                  />
                </div>

                <div className="mt-24">
                  <h3 className="text-3xl font-black uppercase tracking-[-0.05em]">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xs font-mono text-xs leading-6 text-[#063c35]/55">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#f0443e]">
              Your contribution starts here
            </p>

            <h3 className="mt-4 font-black uppercase leading-[0.85] tracking-[-0.06em] text-[clamp(2.8rem,5vw,5rem)]">
              Build something.
              <br />
              <span className="text-[#f5b82e]">Leave a mark.</span>
            </h3>
          </div>

          <a
            href="https://events.mlh.com/events/15402-hacktoberfest-meetup-phagwara-x-aws-student-builder-group-at-lpu"
            className="group flex w-fit items-center gap-5 border-2 border-[#063c35] bg-[#063c35] px-7 py-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-[#f5f0df] transition-colors hover:bg-transparent hover:text-[#063c35]"
          >
            Join Hacktoberfest
            <span className="text-base transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-28 h-24 w-24 bg-[#7ec8ed] [clip-path:polygon(100%_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute bottom-16 left-[-20px] h-20 w-20 rotate-45 border-[10px] border-[#f0443e]/30" />
    </section>
  );
}