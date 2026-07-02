import { useRef, useState } from "react";
import { Calculator, Info, RefreshCcw, TrendingUp } from "lucide-react";
import SectionBadge from "./SectionBadge";
import { TERMS } from "./data";

const num = (v: string) => parseFloat(v.replace(/[^0-9.]/g, "")) || 0;
const money = (n: number) => Math.round(n).toLocaleString("en-US");

/* greys the last 3 characters of the grouped amount, exactly like the prototype */
const SplitMoney = ({ value }: { value: number }) => {
  const s = money(value);
  const cut = Math.max(1, s.length - 3);
  return (
    <>
      ${s.slice(0, cut)}
      <span className="text-neutral-400">{s.slice(cut)}</span>
    </>
  );
};

const sliderFill = (p: number) => ({ background: `linear-gradient(90deg,#C8FF00 ${p}%,#E9EBE0 ${p}%)` });

const MONTHS = [
  { m: "Jan", inv: 34, adv: 29 },
  { m: "Feb", inv: 48, adv: 41 },
  { m: "Mar", inv: 58, adv: 49 },
  { m: "Apr", inv: 74, adv: 63 },
  { m: "May", inv: 92, adv: 82 },
];

const CalculatorSection = () => {
  const [amt, setAmt] = useState("20,000");
  const [vol, setVol] = useState("10,000");
  const [rate, setRate] = useState(85);
  const [termIdx, setTermIdx] = useState(1);
  const outRef = useRef<HTMLParagraphElement>(null);

  const term = TERMS[termIdx];
  const advance = (num(amt) * rate) / 100;
  const monthly = (num(vol) * rate) / 100;

  const pop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    outRef.current?.animate(
      [{ transform: "scale(.96)", opacity: 0.6 }, { transform: "scale(1)", opacity: 1 }],
      { duration: 260, easing: "ease-out" }
    );
  };

  const reset = () => {
    setAmt("20,000");
    setVol("10,000");
    setRate(85);
    setTermIdx(1);
  };

  const blurFormat = (setter: (v: string) => void) => (e: React.FocusEvent<HTMLInputElement>) => {
    const v = num(e.target.value);
    setter(v ? money(v) : "");
  };

  return (
    <section id="calculator" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-24">
      <div className="text-center">
        <SectionBadge icon={Calculator}>Calculator</SectionBadge>
        <h2 className="disp mt-4 text-4xl sm:text-6xl font-bold text-ink">
          See your <span className="text-ink/45">liquidity potential</span>
        </h2>
        <div className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-white card-soft px-5 py-3">
          <span className="text-2xl font-bold text-ink tnum">
            90<span className="text-volt-text">%</span>
          </span>
          <span className="flex items-end gap-0.5 h-6">
            <span className="w-1.5 rounded-[2px] bg-volt/40" style={{ height: "35%" }} />
            <span className="w-1.5 rounded-[2px] bg-volt/60" style={{ height: "55%" }} />
            <span className="w-1.5 rounded-[2px] bg-volt/80" style={{ height: "75%" }} />
            <span className="w-1.5 rounded-[2px] bg-volt" style={{ height: "100%" }} />
          </span>
        </div>
        <p className="mt-4 text-sm text-neutral-500">The advance rate a Tier-A Monaris Score unlocks today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-12 items-stretch">
        {/* left column */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="relative overflow-hidden rounded-[24px] p-7 card-soft" style={{ background: "linear-gradient(160deg,#E9FC66,#DBF227 55%,#C8FF00)" }}>
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/60 backdrop-blur">
              <TrendingUp className="w-5 h-5 text-[#0d0d0d]" />
            </span>
            <p className="disp mt-16 text-2xl sm:text-[28px] font-bold leading-snug text-[#0d0d0d]">
              Estimate your instant liquidity in seconds with the Monaris advance calculator
            </p>
          </div>
          <div className="rounded-[24px] bg-white card-soft p-6 flex-1">
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-[8px] bg-paper px-2.5 py-1.5 text-[11px] font-medium text-neutral-600">
                <span className="h-2 w-2 rounded-[2px] bg-neutral-300" /> Your invoices
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-[8px] bg-paper px-2.5 py-1.5 text-[11px] font-medium text-neutral-600">
                <span className="h-2 w-2 rounded-[2px] bg-volt" /> Instant advances
              </span>
            </div>
            <div className="mt-6 grid grid-cols-5 gap-4 items-end h-44">
              {MONTHS.map(({ m, inv, adv }) => (
                <div key={m} className="flex flex-col items-center gap-1.5">
                  <div className="w-full flex items-end gap-1 h-36">
                    <div className="flex-1 rounded-[6px] bg-neutral-200" style={{ height: `${inv}%` }} />
                    <div className="flex-1 rounded-[6px] bg-volt" style={{ height: `${adv}%` }} />
                  </div>
                  <span className="text-[10px] text-neutral-400">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right: interactive calculator */}
        <div className="lg:col-span-7 rounded-[24px] bg-white card-soft p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="text-sm font-medium text-neutral-600">Invoice amount (USDC)</span>
              <span className="mt-2 flex items-center rounded-xl border border-[#E5E7EB] bg-white px-4 h-12 focus-within:border-volt-dark transition-colors">
                <input
                  value={amt}
                  onChange={(e) => setAmt(e.target.value)}
                  onBlur={blurFormat(setAmt)}
                  inputMode="numeric"
                  aria-label="Invoice amount in USDC"
                  className="w-full bg-transparent text-[15px] font-semibold text-ink tnum outline-none"
                />
                <Info className="w-4 h-4 text-neutral-300" />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-neutral-600">Monthly volume (USDC)</span>
              <span className="mt-2 flex items-center rounded-xl border border-[#E5E7EB] bg-white px-4 h-12 focus-within:border-volt-dark transition-colors">
                <input
                  value={vol}
                  onChange={(e) => setVol(e.target.value)}
                  onBlur={blurFormat(setVol)}
                  inputMode="numeric"
                  aria-label="Monthly volume in USDC"
                  className="w-full bg-transparent text-[15px] font-semibold text-ink tnum outline-none"
                />
                <Info className="w-4 h-4 text-neutral-300" />
              </span>
            </label>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-600">Payment terms you replace</span>
              <span className="whitespace-nowrap rounded-full bg-volt px-3 py-1 text-xs font-semibold text-ink">Net {term}</span>
            </div>
            <input
              type="range"
              min={0}
              max={2}
              step={1}
              value={termIdx}
              onChange={(e) => setTermIdx(+e.target.value)}
              aria-label="Payment terms you replace"
              aria-valuetext={`Net ${term}`}
              className="mt-3"
              style={sliderFill((termIdx / 2) * 100)}
            />
            <div className="mt-2 flex justify-between text-[11px] text-neutral-400">
              <span>Net 30</span>
              <span>Net 60</span>
              <span>Net 90</span>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-600">Advance rate · Monaris Score</span>
              <span className="whitespace-nowrap rounded-full bg-volt px-3 py-1 text-xs font-semibold text-ink">{rate}%</span>
            </div>
            <input
              type="range"
              min={50}
              max={90}
              step={5}
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
              aria-label="Advance rate from Monaris Score"
              aria-valuetext={`${rate}%`}
              className="mt-3"
              style={sliderFill(((rate - 50) / 40) * 100)}
            />
            <div className="mt-2 flex justify-between text-[11px] text-neutral-400">
              <span>50%</span>
              <span>60%</span>
              <span>70%</span>
              <span>80%</span>
              <span>90%</span>
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-paper bg-grad p-6 text-center">
            <p className="text-sm text-neutral-500">Advance today:</p>
            <p ref={outRef} className="mt-1 text-4xl sm:text-5xl font-bold text-ink tnum" aria-live="polite">
              <SplitMoney value={advance} />
            </p>
            <p className="mt-2 text-xs text-neutral-500" aria-live="polite">
              ≈ ${money(monthly)} unlocked monthly · instead of waiting Net {term}
            </p>
            <div className="mt-5 flex items-center justify-center gap-3">
              <button onClick={pop} className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0d] text-white px-6 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition-all">
                Calculate
              </button>
              <button onClick={reset} className="inline-flex items-center gap-2 rounded-full bg-white bg-grad px-5 py-2.5 text-sm font-medium text-neutral-600 hover:text-ink transition-colors">
                Reset <RefreshCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-neutral-400 text-center">
            <span className="text-volt-text">*</span> Estimates are illustrative and depend on your Monaris Score, pool liquidity, and invoice verification. Not an offer of credit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
