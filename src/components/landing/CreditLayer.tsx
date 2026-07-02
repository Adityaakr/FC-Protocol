import { useEffect, useRef } from "react";
import { ArrowRight, Gauge, Layers } from "lucide-react";
import SectionBadge from "./SectionBadge";
import coins3d from "@/assets/monaris/coins-3d.png";
import creditCardVisual from "@/assets/monaris/credit-card-visual.png";

const COIN_BASE = 0;
const COIN_AMP = 9;

const CreditLayer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = sectionRef.current;
    const coin = coinRef.current;
    if (!sec || !coin) return;
    let raf = 0;

    const apply = () => {
      raf = 0;
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = (vh - r.top) / (vh + r.height);
      if (p < -0.3 || p > 1.3) return;
      const y = COIN_BASE + Math.sin(p * 9) * COIN_AMP;
      coin.style.transform = `translateY(${y.toFixed(1)}px)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    apply();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id="credit" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-24">
      <div className="text-center">
        <SectionBadge icon={Layers}>How the credit layer works</SectionBadge>
        <h2 className="disp mx-auto mt-5 max-w-3xl text-3xl sm:text-5xl font-bold leading-[1.22] text-ink">
          The best treasuries have been <span className="marker">seeking private credit</span> for decades.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12">
        {/* dark card with coins */}
        <div className="relative overflow-hidden rounded-[28px] bg-dark bg-grad-dark p-8 sm:p-10 pb-48 sm:pb-56 text-center">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <Gauge className="w-3.5 h-3.5 text-volt" /> Credit engine
          </span>
          <p className="disp mx-auto mt-6 max-w-md text-2xl sm:text-[28px] font-bold leading-snug text-white">
            <span className="text-white/60">Analyzing their playbook</span> reveals the truth: <span className="text-volt">cashflow</span>, not collateral, is the best basis for credit.
          </p>
          <div className="mt-7">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-volt text-ink pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all">
              Learn more{" "}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-volt">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
          {/* coin strip (3D) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48 overflow-hidden">
            <div
              ref={coinRef}
              className="absolute -inset-x-2 -top-3 -bottom-3"
              style={{
                backgroundImage: `url(${coins3d})`,
                backgroundSize: "104% auto",
                backgroundPosition: "center 88.5%",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#0B0D07,rgba(11,13,7,.05) 45%,rgba(11,13,7,.15))" }} />
            <div className="absolute inset-y-0 left-0 w-16" style={{ background: "linear-gradient(90deg,#0B0D07,transparent)" }} />
            <div className="absolute inset-y-0 right-0 w-16" style={{ background: "linear-gradient(270deg,#0B0D07,transparent)" }} />
          </div>
        </div>

        {/* credit visual card */}
        <div className="relative overflow-hidden rounded-[28px] card-soft aspect-square lg:aspect-auto lg:min-h-[560px]">
          <img src={creditCardVisual} alt="Cashflow is the best basis for credit" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default CreditLayer;
