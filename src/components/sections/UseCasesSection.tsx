import { motion } from "framer-motion";
import { User, Users, Zap, Bot, Building2, Briefcase, TrendingUp, Globe, Layers, Database } from "lucide-react";

const personas = [
  {
    icon: User,
    title: "Stablecoin freelancers",
    description: "Paid in USDC, but no credit card that understands their income.",
    benefit: "Monaris gives them an onchain account + revolving credit + a safe place to run yield.",
    features: [
      "Income-based credit lines",
      "Smart debt/credit account management",
      "Subscription + autopay support",
      "Spending limits and protected balances",
      "Low-risk yield strategies",
      "No traditional credit score required"
    ]
  },
  {
    icon: Users,
    title: "Small onchain teams / DAOs",
    description: "Team treasuries and grants in USDC.",
    benefit: "Use Monaris to manage runway, allocate to low-risk strategies, and protect during market shocks.",
    features: [
      "Multi-sig treasury management",
      "Runway optimization tools",
      "Conservative yield strategies",
      "Storm Shield downside protection",
      "Team spending limits",
      "Grant capital deployment"
    ]
  },
  {
    icon: Zap,
    title: "Onchain-native builders & traders",
    description: "Hold USDC but tired of manually moving between protocols.",
    benefit: "Monaris gives them credit + treasury automation + risk layer.",
    features: [
      "Revolving credit lines for trading capital",
      "Automated yield optimization across protocols",
      "Real-time portfolio rebalancing",
      "Storm Shield protection during volatility",
      "Gas-efficient multi-protocol strategies",
      "One-click strategy deployment"
    ]
  },
  {
    icon: Bot,
    title: "AI Agents (Agentic Finance)",
    description: "Autonomous agents that need budgets, spending limits, and treasury automation.",
    benefit: "Monaris Protocol provides programmable credit lines, on-chain allowances, budget constraints, and automated treasury management—all anchored in human-owned credit with full audit trails.",
    features: [
      "Autonomous transactions",
      "On-chain allowances",
      "Budget constraints",
      "Task-level payments",
      "Treasury automation"
    ]
  },
];

const institutionalFeatures = [
  {
    icon: Briefcase,
    title: "Corporate Treasury Automation",
    description: "Manage working capital with automated credit lines tied to receivables. Reduce idle cash, optimize payment timing, and maintain liquidity across multiple chains and currencies.",
    keyFeatures: [
      "Multi-chain liquidity pools",
      "Automated rebalancing",
      "Real-time cash forecasting"
    ]
  },
  {
    icon: TrendingUp,
    title: "Institutional Liquidity Provision",
    description: "Deploy capital into diversified credit pools with transparent risk bands. Earn yield on stablecoins while supporting the on-chain economy with full audit trails and performance analytics.",
    keyFeatures: [
      "Risk-adjusted returns",
      "Portfolio diversification",
      "Real-time reporting dashboards"
    ]
  },
  {
    icon: Building2,
    title: "B2B Payment Financing",
    description: "Extend credit to business customers at point-of-sale. Enable larger transactions without upfront capital. Automated underwriting based on verified on-chain payment history.",
    keyFeatures: [
      "Invoice financing",
      "Net terms automation",
      "Credit scoring APIs"
    ]
  },
  {
    icon: Globe,
    title: "Cross-Border Settlement",
    description: "Facilitate instant cross-border payments with embedded credit lines. Eliminate wire funding requirements and FX risk through programmable treasury management.",
    keyFeatures: [
      "T+0 settlement",
      "Multi-currency support",
      "Hedging strategies"
    ]
  },
  {
    icon: Layers,
    title: "Supply Chain Finance",
    description: "Unlock working capital for suppliers and distributors. Track goods movement on-chain and release payments automatically. Dynamic credit based on verified shipment data.",
    keyFeatures: [
      "Smart contract escrows",
      "Milestone-based releases",
      "Vendor onboarding tools"
    ]
  },
  {
    icon: Database,
    title: "White-Label Credit Infrastructure",
    description: "Embed Protean's credit engine into your platform. Offer branded credit products to your users with full control over risk parameters, pricing, and user experience.",
    keyFeatures: [
      "API-first architecture",
      "Custom risk models",
      "Branded checkout flows"
    ]
  },
];

export const UseCasesSection = () => {
  return (
    <section id="use-cases" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-lime-300/25 to-emerald-500/15 -z-10" />
      
      {/* Multi-colored dotted pattern */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `
          radial-gradient(circle, rgba(34, 197, 94, 0.25) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(132, 204, 22, 0.2) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(74, 222, 128, 0.15) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px, 60px 60px, 80px 80px',
        backgroundPosition: '0 0, 20px 20px, 40px 40px'
      }} />
      
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
            <span className="text-black">Built for </span><span className="text-emerald-600">Everyone</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            From individual earners, large institutions to AI agents and developers
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
                <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4 mb-6">
                  <p className="text-sm text-gray-800 font-semibold leading-relaxed">{persona.benefit}</p>
                </div>

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
            Institutional-grade tools for liquidity management, corporate treasury optimization, and programmable credit lines
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
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium">{feature.description}</p>

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
