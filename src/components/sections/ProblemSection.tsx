import { motion } from "framer-motion";
import { AlertCircle, FileX, Zap, BarChart3, Bot } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "You get paid in stablecoins, but you don't get a fair credit line.",
  },
  {
    icon: FileX,
    text: "Treasury is manual: moving funds between wallets, chains, and protocols.",
  },
  {
    icon: Zap,
    text: "DeFi liquidations are brutal: instant nukes, no soft landing.",
  },
  {
    icon: BarChart3,
    text: "No unified view of cash, credit, and strategy risk in one place.",
  },
  {
    icon: Bot,
    text: "AI that earns market-neutral DeFi yield.",
  },
];

export const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Lime green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c4f542] via-[#d4f76e] to-[#e0f99a]" />
      
      {/* Dotted pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.4) 1.5px, transparent 1.5px)`,
        backgroundSize: '25px 25px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-4 leading-tight tracking-tight">
            Today, your stablecoin income has{" "}
            <span className="relative inline-block text-blue-600">
              no real credit
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-400/30 rounded-full" />
            </span>
            {" "}for Humans & AI Agents.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-start">
          {/* Left: Pain points - Clean white cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="group bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-white/50 hover:border-red-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center flex-shrink-0 group-hover:from-red-100 group-hover:to-red-200 transition-all duration-300 shadow-sm">
                    <problem.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-base text-gray-900 font-semibold pt-2.5 leading-relaxed tracking-tight">{problem.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Missing Layer Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200 relative overflow-hidden">
              {/* FlexCredit Logo */}
              
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-black mb-8 tracking-tight text-center">
                  The missing layer
                </h3>
                
                <div className="space-y-6 text-gray-800">
                  <p className="text-lg leading-relaxed font-medium text-gray-700">
                    People already earn, save, and spend in stablecoins. Freelancers, onchain teams, and
                    crypto-native users handle thousands sometimes millions in stablecoins monthly.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-800">
                    But there is <strong className="text-black font-bold bg-yellow-100/50 px-1 rounded">No bank-like experience, no fair credit, no automated treasury, no risk OS, and no standard layer for agentic finance</strong>{" "}
                    on top of payments.
                  </p>
                  
                  <ul className="space-y-4 text-gray-900 pt-2">
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No under-collateralized credit.</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No automated treasury management.</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No storm protection layer.</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6 mt-8 border-t-2 border-gray-200">
                    <p className="text-black font-bold text-lg leading-relaxed tracking-tight">
                    FlexCredit fixes this by turning your income into a full financial operating system.
                    </p>
                  </div>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
