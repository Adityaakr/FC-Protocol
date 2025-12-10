import { motion } from "framer-motion";
import { Wallet, CreditCard, Brain, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Wallet,
    tag: "Stablecoin Treasury",
    title: "Onchain Bank Account",
    description:
      "Deposit your stablecoins into Monaris to get a clean onchain account experience: balances, history, and programmable routing of your funds.",
  },
  {
    icon: CreditCard,
    tag: "Income-backed, zero extra collateral",
    title: "Credit Line",
    description:
      "Monaris Protocol's credit engine translates your income and cashflow profile into a revolving credit line — without requiring you to over-collateralize with idle assets.",
  },
  {
    icon: TrendingUp,
    tag: "AI-Powered Yield",
    title: "Delta-Neutral DeFi Yield",
    description:
      "AI-powered strategies that earn delta-neutral DeFi yield for users across DeFi, optimizing returns while minimizing market exposure risk.",
  },
  {
    icon: Brain,
    tag: "Strategies + Storm Protection",
    title: "Automated Treasury",
    description:
      "Allocate to vetted strategies and let Monaris automatically rebalance, repay, or protect you during market storms.",
  },
];

export const ProductSection = () => {
  return (
    <section id="product" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Light blue gradient background (lighter) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eaf4fb] via-[#f2f8fc] to-[#f7fbff]" />
      
      {/* Sophisticated dotted waveform pattern - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-64 opacity-20 pointer-events-none">
        <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          {/* Waveform pattern with 5 peaks */}
          {[0, 1, 2, 3, 4].map((waveIndex) => {
            const baseX = 100 + waveIndex * 250;
            const centerY = 150;
            
            return (
              <g key={`wave-${waveIndex}`}>
                {/* Vertical center line */}
                {[...Array(30)].map((_, i) => (
                  <rect
                    key={`v-${waveIndex}-${i}`}
                    x={baseX - 2}
                    y={i * 10}
                    width="4"
                    height="4"
                    fill="rgba(0, 0, 0, 0.8)"
                  />
                ))}
                
                {/* Horizontal center line */}
                {[...Array(50)].map((_, i) => (
                  <rect
                    key={`h-${i}`}
                    x={i * 24}
                    y={centerY - 2}
                    width="4"
                    height="4"
                    fill="rgba(0, 0, 0, 0.6)"
                  />
                ))}
                
                {/* Diamond/waveform shape */}
                {[...Array(15)].map((_, row) => {
                  const distance = Math.abs(row - 7);
                  const width = 15 - distance * 2;
                  
                  return [...Array(Math.max(1, width))].map((_, col) => {
                    const offsetX = (col - width / 2) * 8;
                    const offsetY = (row - 7) * 10;
                    
                    return (
                      <rect
                        key={`d-${waveIndex}-${row}-${col}`}
                        x={baseX + offsetX - 2}
                        y={centerY + offsetY - 2}
                        width="4"
                        height="4"
                        fill="rgba(0, 0, 0, 0.7)"
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-4 leading-tight tracking-tight">
            Monaris: a <span className="text-emerald-600">account, credit line, AI yield, and treasury brain</span> in one app.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full bg-white/95 backdrop-blur-sm border border-emerald-500/20 rounded-3xl p-8 hover:shadow-2xl hover:border-emerald-500/40 hover:shadow-emerald-500/10 transition-all duration-300">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 group-hover:from-emerald-100 group-hover:to-emerald-200 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <feature.icon className="w-8 h-8 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                </div>

                {/* Tag */}
                <div className="inline-block mb-4">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200/50">
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-black mb-4 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed font-medium">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
