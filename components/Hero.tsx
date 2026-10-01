export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f5f0df] text-[#063c35]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div className="absolute left-[8%] top-[12%] h-1 w-1 rounded-full bg-[#063c35] shadow-[40px_20px_0_#063c35,90px_5px_0_#063c35,150px_35px_0_#063c35,220px_10px_0_#063c35,310px_45px_0_#063c35,420px_15px_0_#063c35]" />
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-[42vh] w-[42vh] max-h-[520px] max-w-[520px] rounded-full bg-[#f5b82e] opacity-90" />

      <div className="pointer-events-none absolute right-[4%] top-[8%] hidden h-16 w-16 bg-[#7ec8ed] md:block" />

      <div className="pointer-events-none absolute right-[11%] top-[19%] hidden h-9 w-9 bg-[#f0443e] md:block" />

      <div className="pointer-events-none absolute right-[16%] top-[12%] hidden h-5 w-5 bg-[#f0443e] md:block" />

      <div className="pointer-events-none absolute left-0 top-[48%] h-20 w-20 bg-[#f0443e] [clip-path:polygon(0_0,100%_100%,0_100%)]" />

      <div className="pointer-events-none absolute bottom-[8%] left-[8%] h-20 w-20 bg-[#7ec8ed] [clip-path:polygon(0_0,100%_100%,0_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-12">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative z-30">
            <div className="mb-6 flex items-center gap-4">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#063c35]/55">
                Hacktoberfest 2026
              </span>

              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#f0443e]">
                 | Open Source
              </span>
            </div>

            <h1 className="relative z-30 font-black uppercase leading-[0.82] tracking-[-0.065em]">
              <span className="block text-[clamp(3rem,6.5vw,6rem)]">
                Hacktoberfest
              </span>

              <span className="mt-1 block text-[clamp(3rem,6.5vw,6rem)]">
                Meetup
              </span>

              <span className="mt-2 block text-[clamp(2.4rem,5vw,4.5rem)] text-[#f0443e]">
                Phagwara
              </span>
            </h1>

            <div className="relative z-30 mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y-2 border-[#063c35] py-4">
              <div>
                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#063c35]/45">
                  Date
                </p>

                <p className="mt-1 text-lg font-black uppercase tracking-[-0.02em]">
                  23 October 2026
                </p>
              </div>

              <span className="hidden h-8 w-px bg-[#063c35]/20 sm:block" />

              <div>
                <p className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#063c35]/45">
                  Location
                </p>

                <p className="mt-1 text-lg font-black uppercase tracking-[-0.02em]">
                  Phagwara, Punjab
                </p>
              </div>
            </div>

            <div className="relative z-30 mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-mono text-[8px] font-bold uppercase tracking-[0.3em] text-[#063c35]/45">
                Hosted with
              </span>

              <span className="hidden h-4 w-px bg-[#063c35]/25 sm:block" />

              <a
                href="https://linkedin.com/company/awsbuilderslpu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-[#063c35] transition-colors hover:text-[#f0443e]"
              >
                AWS Student Builder Group at LPU ↗
              </a>
            </div>

            <div className="relative z-30 mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#register"
                className="w-fit bg-[#f0443e] px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#f5f0df] transition-transform hover:-translate-y-1"
              >
                Register Now ↗
              </a>

              <a
                href="#about"
                className="w-fit border-2 border-[#063c35] px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-[#063c35] transition-colors hover:bg-[#063c35] hover:text-[#f5f0df]"
              >
                Explore ↓
              </a>
            </div>
          </div>

          <div className="relative z-10 hidden min-h-[500px] lg:block">
            <div className="absolute right-[5%] top-[4%] h-[390px] w-[390px] rounded-full bg-[#f5b82e]" />

            <div className="absolute right-0 top-[13%] h-[280px] w-[360px]">
              <div className="absolute bottom-0 left-0 h-[190px] w-[330px] bg-[#063c35] [clip-path:polygon(0_100%,8%_38%,30%_20%,45%_45%,65%_8%,100%_35%,100%_100%)]" />

              <div className="absolute bottom-[65px] left-[70px] h-[170px] w-[180px] border-[14px] border-[#f5f0df] bg-[#063c35]">
                <div className="absolute left-[30px] top-[45px] h-24 w-2 bg-[#f5f0df]" />
                <div className="absolute left-[58px] top-[45px] h-24 w-2 bg-[#f5f0df]" />
                <div className="absolute left-[86px] top-[45px] h-24 w-2 bg-[#f5f0df]" />
                <div className="absolute left-[114px] top-[45px] h-24 w-2 bg-[#f5f0df]" />
              </div>

              <div className="absolute bottom-0 left-[15px] h-20 w-10 bg-[#063c35]" />
              <div className="absolute bottom-0 right-[35px] h-28 w-12 bg-[#063c35]" />
            </div>

            <div className="absolute bottom-[55px] right-[5%] h-[190px] w-[310px] rotate-[-4deg] border-[10px] border-[#063c35] bg-[#063c35] shadow-[12px_12px_0_#f0443e]">
              <div className="p-6 font-mono text-sm leading-7">
                <p className="text-[#7ec8ed]">$ git status</p>
                <p className="mt-2 text-[#f5f0df]">
                  ready to contribute
                </p>
                <p className="text-[#f5b82e]">
                  &gt; open source
                </p>
                <p className="text-[#f0443e]">
                  &gt; community
                </p>
                <p className="text-[#7ec8ed]">
                  &gt; ship it_
                </p>
              </div>
            </div>

            <div className="absolute bottom-[10px] left-[15%] flex flex-col">
              <div className="h-8 w-44 bg-[#f0443e]" />
              <div className="h-8 w-40 bg-[#f5b82e]" />
              <div className="h-8 w-48 bg-[#7ec8ed]" />
            </div>

            <div className="absolute right-[8%] top-[2%] rotate-12">
              <span className="font-mono text-5xl font-black text-[#f0443e]">
                {"</>"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-7 left-8 hidden font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#063c35]/40 md:block">
        LEARN
        <br />
        BUILD
        <br />
        CONTRIBUTE
      </div>

      <div className="absolute bottom-7 right-8 hidden text-right font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#063c35]/40 md:block">
        COMMUNITY
        <br />
        OPEN SOURCE
        <br />
        2026
      </div>
    </section>
  );
}