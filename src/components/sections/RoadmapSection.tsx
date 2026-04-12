import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  ArrowRightLeft,
  Bot,
  CreditCard,
  FileCheck2,
  Network,
  ShieldCheck,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type RoadmapStatus =
  | "Live"
  | "Expanding"
  | "In Build"
  | "Next"
  | "Designed"
  | "Phased Rollout";

type FilterKey = "all" | "live" | "build" | "next";

type DetailBlock = {
  title: string;
  body: string;
};

type Phase = {
  id: string;
  phase: string;
  phaseNumber: string;
  title: string;
  status: RoadmapStatus;
  summary: string;
  includes: string[];
  whyItMatters: string;
  unlocksNext: string;
  detailParagraphs?: string[];
  detailBlocks?: DetailBlock[];
  detailFooter?: string;
  icon: React.ComponentType<{ className?: string }>;
};

const roadmapPhases: Phase[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    phaseNumber: "01",
    title: "Private Money Movement",
    status: "Live",
    summary:
      "Private-by-default stablecoin transfers and the privacy foundation beneath Monaris.",
    includes: [
      "Monaris Private",
      "Shielded payment routing",
      "Multi-wallet support across EVM and Solana",
      "Auto repayments from buyer",
      "Seamless one click UX",
    ],
    whyItMatters:
      "Money movement has to be private and reliable before the rest of the system can compound on top of it.",
    unlocksNext:
      "This creates the base layer for receivables, proof, and account-level financial signal.",
    icon: WalletCards,
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    phaseNumber: "02",
    title: "Cashflow, Receivables & Proof",
    status: "Live",
    summary:
      "Invoices, receivables, and cashflow history become structured financial signal.",
    includes: [
      "Monaris AR/AP",
      "Invoice drafts and receivables tracking",
      "Lite Score, instant credit profile from existing wallet history",
      "Payment history via Monaris Path",
    ],
    whyItMatters:
      "Stablecoin activity becomes much more useful once settlements, invoices, and inflows are converted into reusable financial context.",
    unlocksNext:
      "This phase feeds the reputation and underwriting logic behind Monaris Score and Monaris Credit.",
    icon: FileCheck2,
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    phaseNumber: "03",
    title: "Monaris Score",
    status: "In Build",
    summary:
      "A portable, privacy-preserving financial reputation layer built from real cashflow behavior.",
    includes: [
      "Cashflow-based score",
      "ZK-provable, prove creditworthiness without exposing data",
      "Score API and dashboard",
      "Open infrastructure, other protocols can integrate your Score",
    ],
    whyItMatters:
      "Users and businesses need portable proof that reflects how they actually operate, not just how much idle collateral they hold.",
    unlocksNext:
      "This becomes the decision layer for settlement-aware credit, financing, and better capital access.",
    icon: ShieldCheck,
  },
  {
    id: "phase-3-5-pay",
    phase: "Phase 3.5",
    phaseNumber: "03.5",
    title: "Monaris Pay",
    status: "In Build",
    summary:
      "A private payment rail for stablecoins. Send, receive, settle, and schedule across chains from one place.",
    includes: [
      "Payment links and invoicing flows",
      "Recurring payments and payroll scheduling",
      "Settlement tracking tied to Score",
    ],
    whyItMatters:
      "Monaris Pay turns account activity into structured payment behavior that can feed the wider Monaris system.",
    unlocksNext:
      "This creates the payment layer between the account, Score, and future credit products.",
    detailParagraphs: [
      "Monaris Pay is the action layer on top of the Private Money Account. Create a payment link, share it with a client, and they pay in any stablecoin on any chain. Set up recurring payments for contractors or subscriptions. Every settled payment feeds directly into your Monaris Score, turning routine money movement into credit-building activity. Private by default.",
    ],
    icon: ArrowRightLeft,
  },
  {
    id: "phase-3-5-earn",
    phase: "Phase 3.5",
    phaseNumber: "03.5",
    title: "Monaris Earn",
    status: "In Build",
    summary:
      "Put idle stablecoins to work through controlled treasury strategies, with built-in risk limits and Storm Shield integration.",
    includes: [
      "Reserve, earn, and allocate buckets",
      "Configurable risk tiers and capital caps",
      "Auto-routing to safety when Storm Shield activates",
    ],
    whyItMatters:
      "Earn improves capital efficiency without repositioning Monaris as a generic yield product.",
    unlocksNext:
      "This keeps treasury activity tightly connected to account risk and protection logic.",
    detailParagraphs: [
      "Monaris Earn is a mode inside your Monaris account, not a standalone vault. When capital sits idle between payments or invoice settlements, Earn routes it into controlled strategies with visible allocation rules, capital caps, and risk tiers you choose. If your Storm Shield status moves from Normal to Watch, capital automatically routes back to Reserve, protecting your account before positions become fragile. You pick the exposure level. Monaris handles the execution and protection.",
    ],
    icon: TrendingUp,
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    phaseNumber: "04",
    title: "Monaris Credit",
    status: "Next",
    summary:
      "Cashflow-backed access to capital powered by settlement behavior and live score data.",
    includes: [
      "Invoice advances",
      "BNPL and short-duration credit lines",
      "Dynamic underwriting, better behavior, better terms",
    ],
    whyItMatters:
      "Credit becomes more useful when it responds to payments, settlements, and working capital cycles instead of static collateral thresholds.",
    unlocksNext:
      "This opens the path to automated repayments, treasury coordination, and business finance operations.",
    icon: CreditCard,
  },
  {
    id: "phase-5",
    phase: "Phase 5",
    phaseNumber: "05",
    title: "Monaris Business + Mona AI",
    status: "Designed",
    summary:
      "Treasury, payroll, automation, and AI-native finance operations for users and businesses.",
    includes: [
      "Business treasury and payroll",
      "Mona AI financial automation",
      "One financial identity across every chain",
      "Automate payrolls & embedded finance",
    ],
    whyItMatters:
      "Finance operations get stronger when movement, repayment, treasury, and automation all live inside one system.",
    unlocksNext:
      "This creates the operating layer that can feed liquidity, protocol activity, and the wider Monaris economy.",
    icon: Bot,
  },
  {
    id: "phase-6",
    phase: "Phase 6",
    phaseNumber: "06",
    title: "Monaris Economy",
    status: "Phased Rollout",
    summary:
      "One money asset, one governance asset, one staked security layer, layered on top of real usage, liquidity, and protocol activity.",
    includes: [
      "USDM+, yield-bearing cash and settlement layer",
      "MNAR, governance, coordination, and rewards",
      "sMNAR, staking, security, and alignment",
    ],
    whyItMatters:
      "The network becomes stronger when usage, liquidity, and incentives are aligned around real financial activity.",
    unlocksNext:
      "This is the long-term coordination layer for a stablecoin-native financial ecosystem.",
    detailParagraphs: [
      "Monaris keeps the economy simple: one money asset, one governance asset, and one staked security layer.",
    ],
    detailBlocks: [
      {
        title: "USDM+",
        body:
          "The yield-bearing cash layer. 1:1 redeemable against stablecoins. The default settlement asset inside Monaris, used for invoicing, BNPL settlement, treasury balances, advance pool accounting, and programmable repayments. Idle USDM+ earns yield from productive protocol activity, making it the money users actually touch every day.",
      },
      {
        title: "MNAR",
        body:
          "The governance and coordination token. MNAR holders vote on risk parameters, fee structures, credit model updates, treasury policy, and chain expansion priorities. MNAR also provides fee discounts on Monaris Credit, Score API access, and premium treasury features. Builder incentives, partner coordination, and ecosystem rewards flow through MNAR, tied to real usage, not emissions.",
      },
      {
        title: "sMNAR",
        body:
          "Staked MNAR. The security and alignment layer. sMNAR holders receive a share of protocol revenue, boosted governance weight, and serve as the first-loss backstop for the advance pool. If defaults exceed risk reserves, staked MNAR can be slashed, aligning stakers' incentives with sound underwriting. sMNAR also bonds settlement-router operators, data attestation providers, and future credit-risk delegates.",
      },
    ],
    detailFooter:
      "Each token activates only after the prior product phases demonstrate real usage, liquidity, and ecosystem participation. The economy is earned, not launched.",
    icon: Network,
  },
];

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: "all", label: "All" },
  { key: "live", label: "Live" },
  { key: "build", label: "In Build" },
  { key: "next", label: "Coming Next" },
];

const flywheelSteps = [
  "Stablecoin cashflow",
  "Private money movement",
  "Monaris Score",
  "PayFi-backed credit",
  "Automated treasury",
  "Network economy",
];

const statusConfig: Record<
  RoadmapStatus,
  { bg: string; text: string; dot: string }
> = {
  Live: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600",
    dot: "bg-emerald-500",
  },
  Expanding: {
    bg: "bg-lime-500/10",
    text: "text-lime-600",
    dot: "bg-lime-500",
  },
  "In Build": {
    bg: "bg-sky-500/10",
    text: "text-sky-600",
    dot: "bg-sky-500",
  },
  Next: {
    bg: "bg-amber-500/10",
    text: "text-amber-600",
    dot: "bg-amber-500",
  },
  Designed: {
    bg: "bg-slate-500/8",
    text: "text-slate-500",
    dot: "bg-slate-400",
  },
  "Phased Rollout": {
    bg: "bg-violet-500/10",
    text: "text-violet-600",
    dot: "bg-violet-500",
  },
};

function matchesFilter(status: RoadmapStatus, filter: FilterKey) {
  if (filter === "all") return true;
  if (filter === "live") return status === "Live";
  if (filter === "build") return status === "In Build";
  return status === "Next" || status === "Designed" || status === "Phased Rollout";
}

export const RoadmapSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const visiblePhases = roadmapPhases.filter((phase) =>
    matchesFilter(phase.status, activeFilter),
  );

  return (
    <section id="roadmap" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/40 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(16,185,129,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(132,204,22,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">
                ROADMAP
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-display font-bold text-black mb-4 leading-tight tracking-tight">
              Building the{" "}
              <span className="text-emerald-600">
                private cashflow operating system
              </span>{" "}
              for the stablecoin economy
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-4xl font-medium leading-relaxed">
              We&apos;re rolling it out in layers: first money movement, then proof,
              then credit, then full money automation, and finally the network economy
              that powers it all.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 lg:justify-end"
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                  activeFilter === filter.key
                    ? "border-emerald-500 bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-md"
                    : "border-emerald-200 bg-white/80 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-50",
                )}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          <div className="hidden xl:block absolute left-0 right-0 top-[6.8rem] h-0.5 bg-gradient-to-r from-transparent via-lime-400/60 to-transparent" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visiblePhases.map((phase, index) => {
              const Icon = phase.icon;

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative"
                >
                  <div className="hidden xl:block absolute left-1/2 -top-6 h-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-lime-400/0 to-lime-400/70" />
                  <div className="h-full bg-white/95 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-emerald-600 uppercase tracking-[0.18em] mb-1">
                            {phase.phase}
                          </p>
                          <h3
                            className={cn(
                              "font-display font-bold text-black tracking-tight",
                              phase.id === "phase-2"
                                ? "text-base sm:text-lg leading-tight"
                                : "text-xl sm:text-2xl",
                            )}
                          >
                            {phase.id === "phase-2" ? (
                              <>
                                Cashflow,
                                <br />
                                <span className="whitespace-nowrap">
                                  Receivables & Proof
                                </span>
                              </>
                            ) : (
                              phase.title
                            )}
                          </h3>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "inline-flex shrink-0 rounded-full border px-3 py-1 text-xs font-bold",
                          statusStyles[phase.status],
                        )}
                      >
                        {phase.status === "Live" ? "Live (Closed Beta)" : phase.status}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mb-4">
                      {phase.summary}
                    </p>

                    <div className="space-y-2">
                      {phase.includes.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <div className="rounded-[2rem] border border-emerald-500/20 bg-white/90 backdrop-blur-sm p-6 shadow-xl shadow-emerald-500/10">
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-[0.2em] mb-5 text-center">
              Monaris Flywheel
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {flywheelSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className="rounded-full border border-emerald-200 bg-gradient-to-r from-emerald-50 to-lime-50 px-4 py-2.5">
                    <span className="text-sm font-semibold text-gray-800">{step}</span>
                  </div>
                  {index < flywheelSteps.length - 1 ? (
                    <span className="text-emerald-600 text-lg font-bold" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
