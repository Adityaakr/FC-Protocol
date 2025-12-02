import { motion } from "framer-motion";
import { User, Users, Zap, Bot, Building2, Briefcase, TrendingUp, Globe, Layers, Database } from "lucide-react";

const personas = [
  {
    icon: User,
    title: "Stablecoin freelancers",
    description: "Paid in USDC, but no credit card that understands their income.",
    benefit: "FlexCredit gives them an onchain account + revolving credit + a safe place to run yield.",
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
    benefit: "Use FlexCredit to manage runway, allocate to low-risk strategies, and protect during market shocks.",
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
    benefit: "FlexCredit gives them credit + treasury automation + risk layer.",
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
    benefit: "FC provides programmable credit lines, on-chain allowances, budget constraints, and automated treasury management—all anchored in human-owned credit with full audit trails.",
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
      {/* Green to yellow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7cb342] via-[#c0d725] to-[#e8f442]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Built for Everyone Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <span className="text-sm font-bold text-cyan-700 uppercase tracking-wide">USE CASES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight tracking-tight">
            <span className="text-black">Built for </span><span className="text-cyan-500">Everyone</span>
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
              <div className="h-full bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mb-6 group-hover:from-cyan-100 group-hover:to-cyan-200 transition-all duration-300 shadow-sm">
                  <persona.icon className="w-8 h-8 text-cyan-600" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-black mb-3 tracking-tight">
                  {persona.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 font-medium leading-relaxed">{persona.description}</p>

                {/* Benefit */}
                <div className="bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl p-4 mb-6">
                  <p className="text-sm text-gray-800 font-semibold leading-relaxed">{persona.benefit}</p>
                </div>

                {/* Features (for AI Agents) */}
                {persona.features && (
                  <div className="space-y-2.5">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Key Features:</p>
                    {persona.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
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
            <span className="text-black">Enterprise Credit </span><span className="text-cyan-500">Layer</span>
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
              <div className="h-full bg-white/95 backdrop-blur-sm border border-white/50 rounded-3xl p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mb-6 group-hover:from-cyan-100 group-hover:to-cyan-200 transition-all duration-300 shadow-sm">
                  <feature.icon className="w-8 h-8 text-cyan-600" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-black mb-3 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed font-medium">{feature.description}</p>

                {/* Key Features */}
                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Key Features:</p>
                  {feature.keyFeatures.map((keyFeature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
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
