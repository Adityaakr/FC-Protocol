import { ArrowRight, Globe, BookOpen } from "lucide-react";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import heroVisual from "@/assets/monaris/hero-visual-finance.png";
import { DOCS_URL } from "./data";

const Hero = () => (
  <section id="top" className="px-3 sm:px-5 pt-3 sm:pt-4">
    <div
      className="relative mx-auto max-w-[1400px] rounded-[32px] hero-clip overflow-hidden pb-0"
      style={{ background: "linear-gradient(180deg,#EDFA6A 0%,#E3F542 45%,#E9F651 80%,#F4F7EC 100%)" }}
    >
      {/* sky decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-[8%] h-64 w-96 rounded-full bg-white/50 blur-3xl" />
        <div className="absolute top-16 right-[6%] h-52 w-80 rounded-full bg-white/40 blur-3xl" />
        <div className="absolute top-64 left-[30%] h-40 w-72 rounded-full bg-white/25 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#0d0d0d 1px,transparent 1px),linear-gradient(90deg,#0d0d0d 1px,transparent 1px)",
            backgroundSize: "64px 64px",
            WebkitMaskImage: "linear-gradient(180deg,#000,transparent 55%)",
            maskImage: "linear-gradient(180deg,#000,transparent 55%)",
          }}
        />
      </div>

      {/* nav */}
      <nav className="relative z-20 flex items-center justify-between px-5 sm:px-8 pt-5">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logoMark} alt="Monaris" className="w-7 h-7" />
          <span className="font-display font-black tracking-[.14em] text-[16px] text-[#0d0d0d]">MONARIS</span>
        </a>
        <div className="hidden md:flex items-center gap-1 rounded-full bg-white/55 backdrop-blur-xl p-1.5 text-sm font-medium text-[#0d0d0d]/70">
          <a href="#top" className="px-4 py-1.5 rounded-full bg-white text-[#0d0d0d] flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-volt-dark" />Platform
          </a>
          <a href="#calculator" className="px-4 py-1.5 rounded-full hover:text-[#0d0d0d] transition-colors">Calculator</a>
          <a href="#credit" className="px-4 py-1.5 rounded-full hover:text-[#0d0d0d] transition-colors">Credit layer</a>
          <a href={DOCS_URL} className="px-4 py-1.5 rounded-full hover:text-[#0d0d0d] transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#cta" className="hidden sm:block text-sm font-medium text-[#0d0d0d]/80 hover:text-[#0d0d0d] transition-colors">Log in</a>
          <a href="#cta" className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0d] text-white pl-4 pr-1.5 py-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all">
            Launch app{" "}
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-volt text-[#0d0d0d]">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </nav>

      {/* headline */}
      <div className="relative z-10 text-center px-4 mt-12 md:mt-16">
        <h1 className="rise disp mx-auto max-w-4xl text-[42px] sm:text-6xl md:text-7xl font-bold leading-[1.02] text-[#0d0d0d]">
          Private Credit Layer
          <br />
          <span className="text-[#0d0d0d]/45">for the stablecoin economy.</span>
        </h1>
        <p className="rise mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[#0d0d0d]/70 font-medium" style={{ animationDelay: ".1s" }}>
          Monaris turns receivables and recurring cashflow into instant liquidity, backed by private, verifiable credit. One layer for working capital, BNPL-style financing, automated repayments, treasury, and one-click private payments.
        </p>
        <div className="rise flex flex-col sm:flex-row gap-3 mt-8 items-center justify-center" style={{ animationDelay: ".18s" }}>
          <a href="#cta" className="inline-flex items-center gap-2.5 rounded-full bg-[#0d0d0d] text-white px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all">
            <Globe className="w-4 h-4 text-volt" /> Launch the app
          </a>
          <a href={DOCS_URL} className="inline-flex items-center gap-2.5 rounded-full bg-white/85 backdrop-blur text-[#0d0d0d] px-6 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-all card-float">
            <BookOpen className="w-4 h-4 text-volt-dark" /> Read the docs
          </a>
        </div>
      </div>

      {/* hero visual */}
      <div className="relative z-10 mt-6 md:mt-8">
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "1448/981" }}>
          <img src={heroVisual} alt="Monaris product cards" {...{ fetchpriority: "high" }} className="absolute left-0 w-full" style={{ top: "-10.7%" }} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(180deg,#E3F542,rgba(227,245,66,0))" }} />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16" style={{ background: "linear-gradient(90deg,#E5F648,rgba(229,246,72,0))" }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16" style={{ background: "linear-gradient(270deg,#E5F648,rgba(229,246,72,0))" }} />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
