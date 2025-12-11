import { motion } from "framer-motion";
import { User, Users, Zap, Bot, Building2, Briefcase, TrendingUp, Globe, Layers, Database } from "lucide-react";

const personas = [
  {
    icon: User,
    title: "Stablecoin earners & freelancers",
    description: "Paid in USDC, but still juggling wallets, invoices, and no real credit line.",
    benefit: "Monaris gives them a stablecoin account, revolving credit, and a safe place to earn low-risk yield.",
    mobileOneLiner: "Turn your USDC income into an account, credit line, and safe yield in one app.",
    features: [
      "Income-based credit lines (no heavy over-collateralization)",
      "Smart debt + repayment management in one place",
      "Subscriptions, autopay, and scheduled payouts",
      "Spending limits and protected “don’t touch” balances",
      "Conservative, market-neutral yield strategies"
    ]
  },
  {
    icon: Users,
    title: "Onchain teams, DAOs & treasuries",
    description: "Hold USDC for runway and grants, but treasury and spending are managed in spreadsheets and chats.",
    benefit: "Monaris helps teams manage runway, allocate to low-risk strategies, and stay protected when markets move.",
    mobileOneLiner: "Runway, spend controls, and low-risk yield for USDC treasuries in one place.",
    features: [
      "Shared onchain account that works with multi-sig wallets",
      "Runway, cash-burn, and treasury health at a glance",
      "Policy-based allocations into conservative strategies",
      "Storm Shield downside protection (progressive derisking)",
      "Team cards / spending limits, approvals, and budgets",
      "Grants, payroll, and vendor payouts in stablecoins"
    ]
  },
  {
    icon: Zap,
    title: "Onchain-native builders & traders",
    description: "Keep USDC spread across protocols for credit and yield, with no unified risk or automation.",
    benefit: "Monaris gives them a credit line, AI-assisted treasury routing, and a built-in risk layer.",
    mobileOneLiner: "One account for USDC, credit, and AI-routed yield with guardrails.",
    features: [
      "Revolving credit lines for trading and working capital",
      "Automated allocation across curated market-neutral strategies",
      "Real-time rebalancing within policy bands (cash / buffer / strategies)",
      "Storm Shield protection during volatility and depegs",
      "One-click strategy deployment from a single account"
    ]
  },
  {
    icon: Bot,
    title: "AI agents & agentic finance",
    description: "Agents need budgets, limits, and auditability—not raw keys to a treasury wallet.",
    benefit: "Monaris Protocol gives agents programmable credit, onchain allowances, and treasury policies—anchored in human-owned credit with full audit trails.",
    mobileOneLiner: "Give AI agents budgets, limits, and audit trails instead of a raw wallet.",
    features: [
      "Agent sub-accounts with per-task budgets and spend limits",
      "Onchain allowances and time-boxed authorizations",
      "Strategy and venue whitelists enforced by policy",
      "Task-level payments, refunds, and reporting",
      "Complete audit log of every agent action",
      "Easy integration for agent frameworks and wallets (API / SDK)"
    ]
  },
];

const institutionalFeatures = [
  {
    icon: Briefcase,
    title: "Corporate Treasury Automation",
    description: "Use Monaris to manage working capital in stablecoins with automated credit lines tied to receivables. Instead of idle balances and manual cash juggling, treasuries get policy-based allocation, Storm Shield protection, and clear runway visibility.",
    mobileOneLiner: "Automate stablecoin working capital with credit lines and treasury policies.",
    keyFeatures: [
      "Multi-entity, multi-chain stablecoin treasuries",
      "Receivables-linked working-capital credit",
      "Policy rebalancing across cash/buffer/strategies",
      "Real-time cash/runway dashboards with limits"
    ]
  },
  {
    icon: TrendingUp,
    title: "Institutional Liquidity Provision",
    description: "Deploy capital into diversified, risk-banded credit and yield pools. Monaris routes into curated, market-neutral strategies with strict limits and Storm Shield protection, while giving institutions full transparency on risk, performance, and flows.",
    mobileOneLiner: "Deploy stablecoin liquidity into risk-banded, market-neutral credit pools.",
    keyFeatures: [
      "Risk-tiered stablecoin credit & yield pools",
      "Market-neutral, hedged strategies; drawdown/venue caps",
      "Diversification across venues and strategies",
      "Real-time performance analytics + audit trails"
    ]
  },
  {
    icon: Building2,
    title: "Embedded B2B Credit & Payment Financing",
    description: "Embed Monaris credit directly into your payment or marketplace flow. Offer net terms, invoice financing, and higher ticket sizes to your customers, powered by programmable credit limits and underwriting on verified onchain/offchain payment history.",
    mobileOneLiner: "Embed net terms and invoice financing into your B2B payments with Monaris credit.",
    keyFeatures: [
      "Embedded invoice/receivables financing at checkout",
      "Net terms + working capital for merchants/partners",
      "Programmable limits + risk via API/webhooks",
      "Credit scoring + decisioning APIs for your products"
    ]
  }
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-lime-300/25 to-emerald-500/15 -z-10" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,197,94,0.12),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(132,204,22,0.1),transparent_50%)] -z-10" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-emerald-400/12 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-lime-300/12 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '0.75s' }} />
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      {/* Vertical dotted bands */}
      <div className="absolute inset-0 -z-10 pointer-events-none" style={{
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 8px,
            rgba(148, 163, 184, 0.35) 8px,
            rgba(148, 163, 184, 0.35) 10px
          ),
          repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 8px,
            rgba(148, 163, 184, 0.35) 8px,
            rgba(148, 163, 184, 0.35) 10px
          ),
          repeating-linear-gradient(
            to bottom,
            transparent 0,
            transparent 8px,
            rgba(148, 163, 184, 0.35) 8px,
            rgba(148, 163, 184, 0.35) 10px
          )
        `,
        backgroundSize: '2px 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 0, 32% 0, 68% 0',
        opacity: 0.35
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Built for Everyone Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">USE CASES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight tracking-tight">
            <span className="text-black">Built for the </span><span className="text-emerald-600">Stablecoin Economy</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium hidden md:block">
            One Money OS for individuals, teams, power users, and AI agents.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium md:hidden">
            One Money OS — for people, teams, and agents.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/95 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 hover:shadow-2xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                  <persona.icon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-black mb-3 tracking-tight">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 font-medium leading-relaxed">{persona.description}</p>

                {/* Benefit */}
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4 mb-6 hidden md:block">
                  <p className="text-sm text-gray-800 font-semibold leading-relaxed">{persona.benefit}</p>
                </div>
                {/* Mobile one-liner */}
                {persona.mobileOneLiner && (
                  <p className="md:hidden text-sm text-emerald-700 font-semibold leading-relaxed mb-6">
                    “{persona.mobileOneLiner}”
                  </p>
                )}

                {/* Features (for AI Agents) */}
                {persona.features && (
                  <div className="space-y-2.5 pt-4 border-t border-emerald-500/10">
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">Key Features:</p>
                    {persona.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Credit Layer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-tight">
            <span className="text-black">Enterprise Credit </span><span className="text-emerald-600">Layer</span>
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto font-medium leading-relaxed">
            Institutional-grade rails for stablecoin treasuries, liquidity providers, and B2B platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {institutionalFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/95 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 hover:shadow-2xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-emerald-200 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                  <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-black mb-4 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium hidden md:block">{feature.description}</p>
                {/* Mobile one-liner */}
                {feature.mobileOneLiner && (
                  <p className="md:hidden text-sm text-emerald-700 font-semibold leading-relaxed mb-6">
                    “{feature.mobileOneLiner}”
                  </p>
                )}

                {/* Key Features */}
                <div className="space-y-2.5 pt-4 border-t border-emerald-500/10">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-3">Key Features:</p>
                  {feature.keyFeatures.map((keyFeature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{keyFeature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
