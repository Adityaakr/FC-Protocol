import { useEffect, useRef } from "react";
import { ArrowRight, DollarSign } from "lucide-react";
import chipMountains from "@/assets/monaris/chip-mountains.png";

const COIN_CDN = "https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@0.18.1/svg/color";

/* per-node parallax factors: [yFactor, rotFactor, baseRot] */
const DECOR_CONF: [number, number, number][] = [
  [-0.55, -14, 0],
  [0.7, 10, 0],
  [-0.7, 12, 0],
  [0.55, -10, 0],
  [0.35, 0, 45],
  [-0.35, 0, -45],
];

const hideParent = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const parent = e.currentTarget.parentElement;
  if (parent) parent.style.display = "none";
};

const Statement = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = sectionRef.current;
    if (!sec) return;
    const deco = Array.from(sec.querySelectorAll<HTMLElement>("[data-par]"));
    const h2 = sec.querySelector<HTMLElement>("h2");
    const chips = h2 ? Array.from(h2.querySelectorAll<HTMLElement>("[data-chip]")) : [];

    /* blur-in reveal when the section scrolls into view */
    /* headline copy staggers in first; the decorative coins drift in together after */
    const revealEls = Array.from(sec.querySelectorAll<HTMLElement>("[data-reveal]"));
    const copyEls = revealEls.filter((el) => !el.hasAttribute("data-par"));
    revealEls.forEach((el) => {
      el.classList.add("rvb");
      el.style.transitionDelay = el.hasAttribute("data-par") ? "360ms" : `${copyEls.indexOf(el) * 130}ms`;
    });
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          requestAnimationFrame(() => revealEls.forEach((el) => el.classList.add("rv-in")));
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(sec);

    /* inertia parallax: targets follow scroll, positions lerp toward targets */
    type Node = { el: HTMLElement; y: number; rot: number; cy: number; crot: number };
    const nodes: Node[] = [
      ...deco.map((el) => ({ el, y: 0, rot: 0, cy: 0, crot: 0 })),
      ...chips.map((el) => ({ el, y: 0, rot: 0, cy: 0, crot: 0 })),
      ...(h2 ? [{ el: h2, y: 0, rot: 0, cy: 0, crot: 0 }] : []),
    ];
    let raf = 0;
    let running = false;

    const computeTargets = () => {
      const r = sec.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const p = (vh - r.top) / (vh + r.height);
      if (p < -0.3 || p > 1.3) return;
      const c = Math.max(0, Math.min(1, p)) - 0.5;
      deco.forEach((_, i) => {
        const cf = DECOR_CONF[i] || [0.3, 0, 0];
        nodes[i].y = c * cf[0] * 260;
        nodes[i].rot = cf[2] + c * cf[1];
      });
      chips.forEach((_, i) => {
        nodes[deco.length + i].y = c * (i ? 26 : -22);
        nodes[deco.length + i].rot = c * (i ? -7 : 7);
      });
      if (h2) {
        nodes[nodes.length - 1].y = -c * 26;
        nodes[nodes.length - 1].rot = 0;
      }
    };

    const tick = () => {
      let settled = true;
      nodes.forEach((n) => {
        n.cy += (n.y - n.cy) * 0.09;
        n.crot += (n.rot - n.crot) * 0.09;
        if (Math.abs(n.y - n.cy) > 0.05 || Math.abs(n.rot - n.crot) > 0.05) settled = false;
        n.el.style.transform =
          n.el === h2
            ? `translateY(${n.cy.toFixed(2)}px)`
            : `translateY(${n.cy.toFixed(2)}px) rotate(${n.crot.toFixed(2)}deg)`;
      });
      if (settled) {
        running = false;
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      computeTargets();
      if (!running) {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="statement" className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 text-center overflow-visible">
      {/* decor nodes */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <span data-par data-reveal className="absolute left-[4%] top-[30%] inline-flex h-16 w-16 items-center justify-center rounded-full bg-white card-soft">
          <img src={`${COIN_CDN}/usdc.svg`} alt="" className="w-9 h-9" onError={hideParent} />
        </span>
        <span data-par data-reveal className="absolute left-[10%] bottom-[6%] inline-flex h-14 w-14 items-center justify-center rounded-full bg-white card-soft">
          <img src={`${COIN_CDN}/dai.svg`} alt="" className="w-8 h-8" onError={hideParent} />
        </span>
        <span data-par data-reveal className="absolute right-[4%] top-[32%] inline-flex h-16 w-16 items-center justify-center rounded-full bg-white card-soft">
          <img src={`${COIN_CDN}/usdt.svg`} alt="" className="w-9 h-9" onError={hideParent} />
        </span>
        <span data-par data-reveal className="absolute right-[10%] bottom-[4%] inline-flex h-14 w-14 items-center justify-center rounded-full bg-white card-soft">
          <img src={`${COIN_CDN}/eth.svg`} alt="" className="w-8 h-8" onError={hideParent} />
        </span>
        <span data-par className="absolute left-[7%] top-[38%] h-24 w-px bg-gradient-to-b from-transparent via-volt-dark/40 to-transparent rotate-45" />
        <span data-par className="absolute right-[7%] top-[44%] h-24 w-px bg-gradient-to-b from-transparent via-volt-dark/40 to-transparent -rotate-45" />
      </div>

      <h2 data-reveal className="disp relative mx-auto max-w-5xl text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.04] text-ink">
        A clear
        <span data-chip className="relative inline-flex align-middle mx-1 -mt-3">
          <span className="inline-flex h-[0.95em] w-[1.5em] items-center justify-center overflow-hidden rounded-full bg-white card-soft">
            <img src={chipMountains} alt="" className="h-full w-full object-cover" onError={hideParent} />
          </span>
          <span className="absolute -right-2 -top-2 inline-flex h-[0.5em] w-[0.5em] items-center justify-center rounded-full bg-volt ring-2 ring-white">
            <DollarSign className="w-[0.28em] h-[0.28em] text-ink" />
          </span>
        </span>{" "}
        entry to the complicated
        <span data-chip className="inline-flex align-middle mx-1 -mt-2">
          <span className="inline-flex h-[0.85em] w-[0.85em] items-center justify-center rounded-full bg-white card-soft z-10">
            <img
              src={`${COIN_CDN}/usdc.svg`}
              alt=""
              className="h-[80%] w-[80%]"
              onError={(e) => {
                const grandparent = e.currentTarget.parentElement?.parentElement;
                if (grandparent) grandparent.style.display = "none";
              }}
            />
          </span>
          <span className="inline-flex h-[0.85em] w-[0.85em] items-center justify-center rounded-full bg-white card-soft -ml-[0.3em]">
            <img src={`${COIN_CDN}/usdt.svg`} alt="" className="h-[80%] w-[80%]" />
          </span>
        </span>{" "}
        world of <span className="text-ink/45">onchain credit</span>
      </h2>
      <p data-reveal className="mx-auto mt-8 max-w-xl text-base sm:text-lg text-neutral-500">
        Monaris needs no crypto expertise. Issue an invoice, choose what to disclose, and get liquidity, private by default, compliant by design.
      </p>
      <div data-reveal className="mt-8">
        <a href="#calculator" className="inline-flex items-center gap-2.5 rounded-full bg-[#0d0d0d] text-white pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all">
          Learn more{" "}
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0d0d0d]">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Statement;
