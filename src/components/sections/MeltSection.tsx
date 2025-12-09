import { motion } from "framer-motion";
import { Database, TrendingUp, Shield, Boxes } from "lucide-react";

const engineFeatures = [
  {
    icon: Database,
    title: "Credit Engine",
    description: "Computes credit limits from income buckets, behavior, and exposure.",
  },
  {
    icon: TrendingUp,
    title: "Treasury Engine",
    description: "Decides how much stays as cash, how much goes into strategies, how much is reserved as buffer.",
  },
  {
    icon: Shield,
    title: "Risk & Storm Shield",
    description: "Monitors positions, triggers progressive protection before liquidation cliffs.",
  },
  {
    icon: Boxes,
    title: "Strategy Adapters",
    description: "Plug in delta-neutral & hedged strategies, with strict caps and risk bands.",
  },
];

export const MeltSection = () => {
  return (
    <section id="melt" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Light gray/white gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Sophisticated dotted waveform pattern - center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-64 opacity-15 pointer-events-none">
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
            <span className="text-blue-600">FC Protocol</span>: the engine behind Monaris.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text & Bullets */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-5">
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                FC is the credit, treasury, and risk protocol that powers Monaris and future apps.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                It tracks user cashflow, credit usage, strategy allocations, and risk profile.
              </p>
              <p className="text-lg text-gray-600 font-medium leading-relaxed">
                It's designed to sit under multiple apps, not just Monaris.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {engineFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-4 shadow-sm">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-display font-bold text-black mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="space-y-6">
                {/* Top: Monaris App */}
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl px-6 py-4 shadow-sm">
                    <div className="font-display font-bold text-lg text-blue-600">Monaris App</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">User Interface Layer</div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>

                {/* Middle: FC Protocol */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-300 rounded-2xl p-6 shadow-sm">
                  <div className="text-center mb-4">
                    <div className="font-display font-bold text-xl text-black">FC Protocol</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
                      <div className="text-xs font-bold text-black">Credit Engine</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
                      <div className="text-xs font-bold text-black">Treasury Engine</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
                      <div className="text-xs font-bold text-black">Risk Layer</div>
                    </div>
                    <div className="bg-white rounded-xl p-3 text-center border border-gray-200 shadow-sm">
                      <div className="text-xs font-bold text-black">Strategy Adapters</div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-0.5 h-8 bg-blue-300" />
                </div>

                {/* Bottom: External DeFi */}
                <div className="text-center">
                  <div className="inline-block bg-gray-100 border-2 border-gray-300 rounded-2xl px-6 py-4 shadow-sm">
                    <div className="font-display font-bold text-black">External DeFi</div>
                    <div className="text-xs text-gray-600 mt-1 font-medium">Lending • Perps • DEXs • State Channels</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
