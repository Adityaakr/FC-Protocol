import { motion } from "framer-motion";
import { TrendingDown, Shield, AlertTriangle } from "lucide-react";

const strategies = [
  {
    title: "Delta-neutral vaults",
    description: "Spot + short positions maintaining zero net directional exposure",
  },
  {
    title: "Market-neutral basis plays",
    description: "Basis trading capturing funding rate spreads without price risk",
  },
  {
    title: "LP + hedge strategies",
    description: "Liquidity provision with delta-hedged protection layers",
  },
];

const riskSteps = [
  {
    icon: Shield,
    status: "Normal",
    label: "All good",
    description: "Portfolio healthy, all metrics in safe zones",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: AlertTriangle,
    status: "Watch",
    label: "Storm watch: reducing risk",
    description: "Risk metrics elevated, beginning protective measures",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: TrendingDown,
    status: "Storm Shield",
    label: "Auto-protection engaged",
    description: "Partial repayment / de-risking in progress",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

export const RiskSection = () => {
  return (
    <section id="risk" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Dark teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d4d] via-[#1e5a5a] to-[#234f4f]" />
      
      {/* Lime green accent strip at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c4f542] via-[#d4f76e] to-[#c4f542]" />
      
      {/* Dotted lightbulb pattern in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 800" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Multiple lightbulb shapes made of dots */}
          {[0, 1, 2, 3].map((bulbIndex) => {
            const baseX = 150 + bulbIndex * 300;
            const baseY = 400;
            
            return (
              <g key={`bulb-${bulbIndex}`}>
                {/* Lightbulb top (rounded) */}
                {[...Array(20)].map((_, row) => {
                  const y = baseY - 150 + row * 8;
                  const radius = Math.sin((row / 20) * Math.PI) * 40;
                  const dotsInRow = Math.max(1, Math.floor(radius / 4));
                  
                  return [...Array(dotsInRow)].map((_, col) => {
                    const x = baseX + (col - dotsInRow / 2) * 8;
                    return (
                      <circle
                        key={`bulb-${bulbIndex}-top-${row}-${col}`}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="rgba(100, 255, 218, 0.6)"
                      />
                    );
                  });
                })}
                
                {/* Lightbulb middle (narrower) */}
                {[...Array(8)].map((_, row) => {
                  const y = baseY + 10 + row * 6;
                  const dotsInRow = 6 - Math.floor(row / 2);
                  
                  return [...Array(dotsInRow)].map((_, col) => {
                    const x = baseX + (col - dotsInRow / 2) * 8;
                    return (
                      <circle
                        key={`bulb-${bulbIndex}-mid-${row}-${col}`}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="rgba(100, 255, 218, 0.5)"
                      />
                    );
                  });
                })}
                
                {/* Lightbulb base */}
                {[...Array(6)].map((_, row) => {
                  return [...Array(8)].map((_, col) => {
                    const x = baseX + (col - 4) * 6;
                    const y = baseY + 60 + row * 6;
                    return (
                      <circle
                        key={`bulb-${bulbIndex}-base-${row}-${col}`}
                        cx={x}
                        cy={y}
                        r="1.5"
                        fill="rgba(100, 255, 218, 0.4)"
                      />
                    );
                  });
                })}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight tracking-tight">
            Market-neutral strategies and{" "}
            <span className="text-cyan-400">'storm shield' protection</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* A. Delta-Neutral & Market-Neutral Strategies */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">
                Yield without being naked long
              </h3>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                Monaris integrates hedged and delta-neutral strategies via Monaris Protocol's strategy adapters — think spot + short,
                basis trades, or LP + hedge setups.
              </p>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                You see expected returns, risk tiers, and capital caps per strategy.
              </p>
            </div>

            <div className="space-y-4">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-5 hover:border-cyan-400/60 hover:bg-white/15 transition-all duration-300"
                >
                  <h4 className="font-display font-bold text-white mb-2 tracking-tight">{strategy.title}</h4>
                  <p className="text-sm text-gray-300 font-medium leading-relaxed">{strategy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* B. Progressive Liquidation & Storm Shield */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-3 tracking-tight">
                Don't get nuked by liquidations
              </h3>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                Instead of letting you hit a hard liquidation cliff, Monaris Protocol's risk layer tracks health factors and risk
                metrics.
              </p>
              <p className="text-gray-300 mb-6 font-medium leading-relaxed">
                When things get spicy, the storm shield can auto-deallocate from strategies, auto-repay part of your
                credit, or move assets into safer buckets.
              </p>
            </div>

            <div className="space-y-4">
              {riskSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-5 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-display font-bold text-black">{step.status}</h4>
                        <span className={`text-xs font-bold ${step.color}`}>• {step.label}</span>
                      </div>
                      <p className="text-sm text-gray-700 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
