import { Calendar, FileText, Repeat, TrendingUp, Workflow } from "lucide-react";
import SectionBadge from "./SectionBadge";
import CursorTag from "./CursorTag";
import StormShield from "./StormShield";

/* 13 gauge segments, -130° to +130°, first 7 lit lime-to-volt */
const GAUGE_SEGMENTS = [
  { rot: -130.0, fill: "#E7F98A" },
  { rot: -108.3, fill: "#E0F667" },
  { rot: -86.7, fill: "#D9F344" },
  { rot: -65.0, fill: "#D2F022" },
  { rot: -43.3, fill: "#CDF60E" },
  { rot: -21.7, fill: "#C8FF00" },
  { rot: 0.0, fill: "#B7E900" },
  { rot: 21.7, fill: "#EAEDDF" },
  { rot: 43.3, fill: "#EAEDDF" },
  { rot: 65.0, fill: "#EAEDDF" },
  { rot: 86.7, fill: "#EAEDDF" },
  { rot: 108.3, fill: "#EAEDDF" },
  { rot: 130.0, fill: "#EAEDDF" },
];

const Treasury = () => (
  <section id="treasury" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
    <div className="text-center">
      <SectionBadge icon={Workflow} iconClassName="text-volt-text">How Monaris works</SectionBadge>
      <h2 className="disp mt-4 text-4xl sm:text-6xl font-bold text-ink">
        Automated treasury <span className="text-ink/45">with built-in protection.</span>
      </h2>
      <p className="mt-4 mx-auto max-w-xl text-[15px] leading-relaxed text-neutral-500">
        Reserves, strategies, and repayments run themselves. Each piece is designed with intention, and protection engages before things break.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5">
      {/* 01 · Reserves */}
      <div className="lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:self-center rounded-[24px] bg-white bg-grad card-soft p-7 flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <div className="disp text-[30px] font-bold text-ink leading-none">$284,600</div>
            <div className="mt-2 flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold text-volt-text">
              <TrendingUp className="w-3.5 h-3.5" />
              +$18,400 <span className="font-medium text-neutral-400">vs last month</span>
            </div>
          </div>
          <div className="flex flex-col items-start pt-1">
            <CursorTag label="Reserves" />
          </div>
        </div>

        {/* chart */}
        <div className="mt-14">
          <div className="flex items-end justify-between gap-4 h-60">
            <div className="flex-1 rounded-[14px] bg-[#EAEDDF]" style={{ height: "40%" }} />
            <div className="flex-1 rounded-[14px] bg-[#EAEDDF]" style={{ height: "65%" }} />
            <div
              className="relative flex-1 rounded-[14px] bg-ink"
              style={{ height: "92%", backgroundImage: "repeating-linear-gradient(50deg,rgba(255,255,255,.10) 0 2px,transparent 2px 7px)" }}
            >
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-volt px-2.5 py-1 text-[11px] font-bold text-[#0d0d0d] shadow-md">+3%</span>
            </div>
            <div className="flex-1 rounded-[14px] bg-[#EAEDDF]" style={{ height: "48%" }} />
            <div className="relative flex-1 rounded-[14px] bg-volt" style={{ height: "88%" }}>
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-volt-text card-soft">+5%</span>
            </div>
          </div>
          <div className="mt-3 flex justify-between gap-4 text-[11.5px] font-medium text-neutral-400">
            {["Mar", "Apr", "May", "Jun", "Jul"].map((m) => (
              <span key={m} className="flex-1 text-center">{m}</span>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <h3 className="disp text-[20px] font-bold text-ink">Know your reserves. Instantly.</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">
            Capital stays liquid and ring-fenced in buckets for payments, payroll, and operations. Cleanly summarized, easy to track.
          </p>
        </div>

        {/* buckets */}
        <div className="mt-7">
          <div className="h-px bg-[#131720]/[0.08] mb-5" />
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[12px] font-semibold text-ink">Payments</span>
              <div className="flex-1 h-1.5 rounded-full bg-paper overflow-hidden">
                <div className="h-full rounded-full bg-volt" style={{ width: "72%" }} />
              </div>
              <span className="w-9 text-right text-[12px] font-bold text-ink">72%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[12px] font-semibold text-ink">Payroll</span>
              <div className="flex-1 h-1.5 rounded-full bg-paper overflow-hidden">
                <div className="h-full rounded-full bg-lime-soft" style={{ width: "54%" }} />
              </div>
              <span className="w-9 text-right text-[12px] font-bold text-ink">54%</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-[12px] font-semibold text-ink">Operations</span>
              <div className="flex-1 h-1.5 rounded-full bg-paper overflow-hidden">
                <div className="h-full rounded-full bg-[#D7DBC9]" style={{ width: "38%" }} />
              </div>
              <span className="w-9 text-right text-[12px] font-bold text-ink">38%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 02 · Strategies */}
      <div className="lg:col-start-2 lg:row-start-1 rounded-[24px] bg-white bg-grad card-soft p-7 flex flex-col">
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex items-start gap-4">
            <div className="shrink-0 pt-1">
              <div className="text-[11px] font-medium text-neutral-400">Idle balance</div>
              <div className="mt-0.5 text-[17px] font-bold text-ink whitespace-nowrap">$96,400</div>
              <div className="mt-1.5 inline-flex rounded-full bg-[#E4F76B] px-2 py-0.5 text-[10.5px] font-bold text-volt-text">+6%</div>
            </div>
            <div className="relative flex-1 flex justify-center min-w-0">
              <div className="relative w-[190px] h-[158px]">
                <svg viewBox="0 0 180 150" className="w-full h-full">
                  {GAUGE_SEGMENTS.map(({ rot, fill }) => (
                    <g key={rot} transform={`rotate(${rot} 90 90)`}>
                      <rect x="81" y="6" width="18" height="36" rx="9" fill={fill} />
                    </g>
                  ))}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                  <div className="disp text-[34px] font-bold text-ink leading-none">55%</div>
                  <div className="mt-1 text-[11.5px] font-medium text-neutral-400">deployed</div>
                </div>
                <div className="absolute -right-8 -bottom-1 z-10 flex flex-col items-start">
                  <CursorTag label="Rebalance" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-[11.5px] font-medium text-neutral-500">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-volt" />Deployed 55%</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-[#DFF25E]" />Liquid 30%</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap"><span className="w-2 h-2 rounded-full bg-[#D3D8C2]" />Buffer 15%</span>
          </div>
        </div>
        <div className="pt-6">
          <h3 className="disp text-[20px] font-bold text-ink">Idle capital, put to work.</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">Route balances through controlled strategies with visible rules and allocation limits.</p>
        </div>
      </div>

      {/* 03 · Repayments */}
      <div className="lg:col-start-2 lg:row-start-2 rounded-[24px] bg-white bg-grad card-soft p-7 flex flex-col">
        <div className="relative">
          <div className="absolute -bottom-4 left-[30%] z-10 flex flex-col items-start">
            <CursorTag label="On time" />
          </div>
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-volt">
                <FileText className="w-4 h-4 text-[#0d0d0d]" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13.5px] font-semibold text-ink truncate">Invoice #204</div>
                <div className="text-[11.5px] text-neutral-400 truncate">Northwind · settled privately</div>
              </div>
              <div className="text-[13.5px] font-bold text-ink">$12,400</div>
              <span className="whitespace-nowrap rounded-full bg-volt px-2.5 py-1 text-[10.5px] font-bold text-[#0d0d0d]">Repaid</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-soft">
                <Repeat className="w-4 h-4 text-volt-text" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13.5px] font-semibold text-ink truncate">Advance #31</div>
                <div className="text-[11.5px] text-neutral-400">From settlement waterfall</div>
              </div>
              <div className="text-[13.5px] font-bold text-ink">$4,000</div>
              <span className="whitespace-nowrap rounded-full bg-lime-soft px-2.5 py-1 text-[10.5px] font-bold text-volt-text">Auto-repaid</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 opacity-50">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <Calendar className="w-4 h-4 text-neutral-400" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[13.5px] font-semibold text-ink truncate">Payroll batch · Jul</div>
                <div className="text-[11.5px] text-neutral-400">Reserved bucket</div>
              </div>
              <div className="text-[13.5px] font-bold text-ink">$8,200</div>
              <span className="whitespace-nowrap rounded-full border border-neutral-200 px-2.5 py-1 text-[10.5px] font-bold text-neutral-500">Scheduled</span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-6">
          <h3 className="disp text-[20px] font-bold text-ink">Every repayment, right on time.</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">Cashflow and settlements repay credit the moment they land, complete with details.</p>
        </div>
      </div>

      {/* 04 · Storm Shield */}
      <StormShield />
    </div>
  </section>
);

export default Treasury;
