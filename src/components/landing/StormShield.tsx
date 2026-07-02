import { Check, Clock, RefreshCw, Shield, TrendingDown } from "lucide-react";

/* Static "Healthy" state: the prototype's interactive state machine was dead code
   (it bound to markup that doesn't exist), so the visible static card is the spec. */
const StormShield = () => (
  <div
    className="lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:self-center rounded-[24px] card-soft p-7 relative overflow-hidden flex flex-col"
    style={{ background: "linear-gradient(180deg,#FDFFF0 0%,#F3FAD2 60%,#E9F7B4 100%)", border: "1px solid rgba(163,201,8,.35)" }}
  >
    <div className="pointer-events-none absolute -top-28 -right-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle,rgba(200,255,0,.35),transparent 70%)" }} />
    <span
      className="relative inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold text-ink"
      style={{ background: "rgba(200,255,0,.35)", border: "1px solid rgba(163,201,8,.4)" }}
    >
      <Shield className="w-3.5 h-3.5 text-ink" />
      Built-in protection
    </span>
    <h3 className="disp relative mt-4 text-[26px] leading-tight font-bold text-ink">
      Storm Shield <span className="text-ink/40">watches every position.</span>
    </h3>
    <p className="relative mt-3 text-[13.5px] leading-relaxed text-neutral-600">
      As risk rises Monaris automatically de-risks, routes reserves, and schedules repayments, before losses reach your operations.
    </p>

    <div className="relative mt-5 rounded-2xl p-5 bg-white card-soft" style={{ border: "1px solid rgba(19,23,32,.06)" }}>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-[10px] font-semibold tracking-[.16em] text-neutral-400 uppercase">Utilization now</div>
          <div className="disp mt-1 text-[40px] font-bold leading-none text-volt-text">42%</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-semibold tracking-[.16em] text-neutral-400 uppercase">Status</div>
          <div className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-volt-text">
            <span className="w-2 h-2 rounded-full bg-volt animate-pulse motion-reduce:animate-none" />
            <span>Healthy</span>
          </div>
        </div>
      </div>
      <div className="relative mt-5 h-2.5 rounded-full" style={{ background: "linear-gradient(90deg,#C8FF00 0%,#C8FF00 55%,#A3C908 62%,#F59E0B 78%,#DC2626 100%)" }}>
        <span className="absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-white shadow ring-1 ring-[#131720]/10" style={{ left: "42%" }} />
        <span className="absolute -top-1 bottom-0 w-px bg-[#131720]/30" style={{ left: "80%", height: "18px" }} />
      </div>
      <div className="mt-2.5 flex justify-between text-[10.5px] font-semibold">
        <span className="whitespace-nowrap text-volt-text">Healthy 0 to 60</span>
        <span className="whitespace-nowrap" style={{ color: "#B45309" }}>Elevated 60 to 80</span>
        <span className="whitespace-nowrap" style={{ color: "#B42318" }}>Storm 80+</span>
      </div>
    </div>

    <div className="relative mt-4 flex items-center gap-3 rounded-2xl px-4 py-3 bg-white/80" style={{ border: "1px solid rgba(19,23,32,.05)" }}>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white card-soft">
        <RefreshCw className="w-4 h-4 text-volt-text" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[12.5px] font-bold text-ink">Auto reserve routing</div>
        <div className="text-[11px] text-neutral-500 truncate">Automatically allocates reserves as risk changes.</div>
      </div>
      <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-[8px] px-2.5 py-1.5 text-[11.5px] font-bold text-volt-text" style={{ background: "rgba(200,255,0,.30)" }}>
        <Check className="w-3.5 h-3.5" />
        Enabled
      </span>
    </div>

    <div className="relative mt-2 space-y-2">
      <div className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/80" style={{ border: "1px solid rgba(19,23,32,.05)" }}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-volt">
          <Check className="w-3.5 h-3.5 text-[#0d0d0d]" />
        </span>
        <div className="flex-1 text-[12.5px] font-medium text-ink/80">Routed 12% to buffer</div>
        <span className="text-[11px] text-neutral-400">2m ago</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/80" style={{ border: "1px solid rgba(19,23,32,.05)" }}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper">
          <Clock className="w-3.5 h-3.5 text-volt-text" />
        </span>
        <div className="flex-1 text-[12.5px] font-medium text-ink/80">Repayment scheduled from cashflow</div>
        <span className="text-[11px] text-neutral-400">1h ago</span>
      </div>
      <div className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-white/80" style={{ border: "1px solid rgba(19,23,32,.05)" }}>
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-paper">
          <TrendingDown className="w-3.5 h-3.5 text-volt-text" />
        </span>
        <div className="flex-1 text-[12.5px] font-medium text-ink/80">Exposure cooled by 8%</div>
        <span className="text-[11px] text-neutral-400">3h ago</span>
      </div>
    </div>
  </div>
);

export default StormShield;
