import { Activity, Check, Eye, Lock, ShieldCheck } from "lucide-react";

const EXPOSED_ROWS = ["Counterparties", "Volumes", "Margins", "Strategy"];

const CASHFLOW_BARS = [
  { cls: "bg-volt/40", h: "35%" },
  { cls: "bg-volt/55", h: "55%" },
  { cls: "bg-volt/70", h: "45%" },
  { cls: "bg-volt/80", h: "70%" },
  { cls: "bg-volt/90", h: "60%" },
  { cls: "bg-volt", h: "90%" },
  { cls: "bg-volt-bright", h: "100%" },
];

const Advantage = () => (
  <section id="advantage" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
    <div className="rounded-3xl bg-white bg-grad card-soft p-6 sm:p-8">
      <div className="flex gap-6 items-center px-1 flex-wrap">
        <h2 className="disp text-[40px] sm:text-6xl lg:text-7xl font-bold leading-[.9] text-ink">The Monaris advantage.</h2>
        <span className="w-px bg-[#131720]/15 h-10 hidden sm:block" />
        <p className="text-sm sm:text-base text-neutral-500 tracking-tight">Everything that holds stablecoin businesses back, removed</p>
      </div>
      <div className="h-px bg-[#131720]/10 mt-4" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-8">
        {/* PROBLEM */}
        <div className="lg:col-span-4 bg-paper bg-grad rounded-[28px] p-6 sm:p-8 relative flex flex-col">
          <span className="absolute -top-3.5 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-[#DC2626]/30 bg-white text-xs text-[#B42318] font-medium card-soft">PROBLEM</span>
          <div className="relative h-48 sm:h-52 rounded-2xl bg-white border border-[#E5E7EB] overflow-hidden flex items-center justify-center p-5">
            <div className="w-full space-y-2.5">
              <div className="flex items-center gap-3 rounded-xl bg-white border border-[#E5E7EB] px-3.5 py-3 card-soft">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#16A34A]/10 ring-1 ring-[#16A34A]/20">
                  <Check className="w-4 h-4 text-[#16A34A]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] font-semibold text-ink">Payment received</div>
                  <div className="text-[10.5px] text-neutral-400">Settled instantly</div>
                </div>
                <span className="text-[13px] font-bold text-ink tnum">$24,000</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-[#DC2626]/20 px-3.5 py-3" style={{ background: "rgba(220,38,38,.04)" }}>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-[#DC2626]/10 ring-1 ring-[#DC2626]/20">
                  <Lock className="w-4 h-4 text-[#DC2626]" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[12px] font-semibold text-ink">Credit available</div>
                  <div className="text-[10.5px] text-[#B42318]">No borrowing power</div>
                </div>
                <span className="text-[13px] font-bold text-[#B42318] tnum">$0</span>
              </div>
            </div>
          </div>
          <h3 className="disp mt-6 text-3xl sm:text-4xl font-bold text-ink">Payments settle. Credit does not.</h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-[52ch]">
            Stablecoin businesses can receive money instantly, but their cashflow still does not translate into borrowing power, credit history, or usable working capital.
          </p>
        </div>

        {/* CHALLENGE */}
        <div className="lg:col-span-4 bg-paper bg-grad rounded-[28px] p-6 sm:p-8 relative flex flex-col">
          <span className="absolute -top-3.5 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-[#F59E0B]/40 bg-white text-xs text-[#B45309] font-medium card-soft">CHALLENGE</span>
          <div className="relative h-48 sm:h-52 rounded-2xl border border-[#E5E7EB] overflow-hidden bg-white p-4 flex items-center justify-center">
            <div className="w-full rounded-xl bg-white border border-[#E5E7EB] p-4 card-soft">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold text-ink">Underwriting data</span>
                <span className="inline-flex items-center gap-1 rounded-full ring-1 ring-[#F59E0B]/25 px-2 py-0.5 text-[9.5px] font-semibold text-[#B45309]" style={{ background: "rgba(245,158,11,.12)" }}>
                  <Eye className="w-3 h-3" />Public
                </span>
              </div>
              <div className="space-y-2.5">
                {EXPOSED_ROWS.map((label) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Eye className="w-3.5 h-3.5 shrink-0 text-[#B45309]" />
                    <span className="flex-1 text-[11.5px] text-neutral-500">{label}</span>
                    <span className="text-[11px] font-semibold text-ink/60">Exposed</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <h3 className="disp mt-6 text-3xl sm:text-4xl font-bold text-ink">Underwriting exposes too much.</h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-[52ch]">
            To unlock credit, businesses must prove revenue, invoices, receivables, and repayment ability. On public rails, that proof can leak counterparties, volumes, margins, and business strategy.
          </p>
        </div>

        {/* ADVANTAGE */}
        <div className="lg:col-span-4 bg-grad rounded-[28px] p-6 sm:p-8 relative flex flex-col" style={{ background: "linear-gradient(200deg,#F2FFC4,#FBFFE8 60%)" }}>
          <span className="absolute -top-3.5 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-volt-dark/40 bg-volt text-xs text-ink font-semibold card-soft">THE ADVANTAGE</span>
          <div className="relative h-48 sm:h-52 rounded-2xl bg-white border border-volt-dark/25 overflow-hidden p-4 flex items-center justify-center">
            <div className="w-full h-full rounded-xl bg-dark p-3.5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-volt/20">
                    <Activity className="w-3.5 h-3.5 text-volt" />
                  </span>
                  <span className="text-[11px] font-semibold text-white/85">Cashflow</span>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-volt/15 ring-1 ring-volt/25 px-2 py-0.5 text-[9.5px] font-semibold text-volt">
                  <ShieldCheck className="w-3 h-3" />Private
                </span>
              </div>
              <div className="flex items-end justify-center gap-1.5 h-16">
                {CASHFLOW_BARS.map(({ cls, h }, i) => (
                  <div key={i} className={`w-3 rounded-[2px] ${cls}`} style={{ height: h }} />
                ))}
              </div>
              <div className="flex items-center justify-between rounded-[8px] bg-volt/10 ring-1 ring-volt/20 px-3 py-2">
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-medium text-white/75">
                  <Check className="w-3.5 h-3.5 text-volt" />Credit unlocked
                </span>
                <span className="text-[13px] font-bold text-volt tnum">$120,000</span>
              </div>
            </div>
          </div>
          <h3 className="disp mt-6 text-3xl sm:text-4xl font-bold text-ink">Capital from private, verifiable cashflow.</h3>
          <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-[52ch]">
            Monaris lets businesses use stablecoin cashflow as the basis for credit, proving what lenders need, keeping sensitive data private, and turning every invoice and payment into a stronger financial identity.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Advantage;
