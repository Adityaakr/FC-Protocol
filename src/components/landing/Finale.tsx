const Finale = () => (
  <section id="cta" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
    <div className="relative overflow-hidden rounded-[32px] bg-dark min-h-[520px] flex items-center">
      {/* scene */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 stars opacity-70" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[560px] w-[560px] rounded-full" style={{ background: "radial-gradient(circle,rgba(200,255,0,.10),transparent 62%)" }} />
        {/* beam */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[12%] bottom-[30%] w-[2px]" style={{ background: "linear-gradient(180deg,#ffffff,rgba(200,255,0,.85) 40%,transparent)" }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[12%] bottom-[30%] w-8 blur-xl" style={{ background: "linear-gradient(180deg,rgba(255,255,255,.5),rgba(200,255,0,.35) 40%,transparent)" }} />
        <div className="absolute left-1/2 -translate-x-1/2 top-[11%] h-px w-72" style={{ background: "linear-gradient(90deg,transparent,rgba(221,252,1,.9),transparent)" }} />
        {/* aurora waves */}
        <div className="absolute -bottom-24 left-[8%] h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(200,255,0,.16)" }} />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-80 w-[560px] rounded-full blur-3xl" style={{ background: "rgba(124,181,24,.22)" }} />
        <div className="absolute -bottom-24 right-[8%] h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(200,255,0,.14)" }} />
        <div className="absolute bottom-0 inset-x-0 h-40" style={{ background: "linear-gradient(180deg,transparent,rgba(200,255,0,.08))" }} />
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-10 sm:p-16 w-full">
        <h2 className="disp text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.04] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/55 lg:text-right lg:order-1">
          Expansion potential of the stablecoin economy
        </h2>
        <div className="lg:order-2 lg:pl-10">
          <div className="h-px w-56 bg-white/25 mb-6" />
          <p className="max-w-sm text-sm sm:text-base leading-relaxed text-neutral-400">
            Trillions in stablecoin volume and rising attention from leading financial institutions show we are only at the start of the path. The credit layer is what comes next.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Finale;
