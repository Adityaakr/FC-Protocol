import { useEffect, useRef } from "react";
import { ArrowRight, Building2, Landmark } from "lucide-react";
import SectionBadge from "./SectionBadge";

const Audiences = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sec = sectionRef.current;
    if (!sec) return;

    /* blur-in reveal when the section scrolls into view; cards stagger, copy inside follows */
    const revealEls = Array.from(sec.querySelectorAll<HTMLElement>("[data-reveal]"));
    revealEls.forEach((el) => {
      el.classList.add("rvb");
      el.style.transitionDelay = `${Number(el.dataset.reveal || 0) * 110}ms`;
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
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="audiences" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* businesses */}
        <div
          data-reveal="0"
          className="flex flex-col rounded-[28px] bg-white bg-grad card-soft p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-1"
        >
          <SectionBadge icon={Building2}>For businesses</SectionBadge>
          <p className="mt-6 text-base sm:text-lg text-neutral-500 font-medium">
            <span className="block disp text-2xl sm:text-[28px] font-bold leading-snug text-ink">
              Get funded against what you&rsquo;re owed.
            </span>
            <span className="mt-3 block">
              Advances on receivables and recurring revenue, priced on your real payment history, not paperwork. Money today, repayments automated, financials visible to no one.
            </span>
          </p>
          <div className="mt-8">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0d] text-white pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              Get funded{" "}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-volt text-[#0d0d0d]">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* capital providers */}
        <div
          data-reveal="1"
          className="flex flex-col rounded-[28px] bg-dark bg-grad-dark p-8 sm:p-10 transition-transform duration-500 hover:-translate-y-1"
        >
          <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80">
            <Landmark className="w-3.5 h-3.5 text-volt" /> For capital providers
          </span>
          <p className="mt-6 text-base sm:text-lg text-white/60 font-medium">
            <span className="block disp text-2xl sm:text-[28px] font-bold leading-snug text-white">
              Yield backed by real financing, not emissions.
            </span>
            <span className="mt-3 block">
              Structured exposure secured by verified receivables, with senior and junior tranches to match your risk. Verifiable book health, private borrower data.
            </span>
          </p>
          <div className="mt-8">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full bg-volt text-ink pl-5 pr-1.5 py-1.5 text-sm font-semibold hover:-translate-y-0.5 transition-all"
            >
              Provide capital{" "}
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0d0d0d] text-volt">
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audiences;
