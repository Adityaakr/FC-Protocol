import { motion } from "framer-motion";
import { AlertCircle, FileX, Zap, BarChart3, Bot } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "You can get paid in stablecoins and still have no usable credit profile.",
  },
  {
    icon: FileX,
    text: "Working capital stays trapped in invoices, receivables, and delayed settlements.",
  },
  {
    icon: Zap,
    text: "Treasury is still manual across wallets, chains, and protocols.",
  },
  {
    icon: BarChart3,
    text: "Most crypto credit is collateral-first, not cashflow-aware.",
  },
  {
    icon: Bot,
    text: "There is still no private operating layer for stablecoin-native PayFi.",
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
            Stablecoin cashflow still lacks a{" "}
            <span className="relative inline-block text-blue-600">
              real financial layer
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-400/30 rounded-full" />
            </span>
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
                    People already earn, save, and move serious value in stablecoins. Freelancers, global teams, merchants, and crypto-native businesses already manage meaningful cashflow onchain every month.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-800">
                    But that activity still behaves like disconnected wallets, not a real financial system.{" "}
                    <span className="font-bold text-emerald-700 bg-emerald-100/70 px-1.5 py-0.5 rounded">
                      There is no standard layer for private payments, no PayFi infrastructure for BNPL, invoice financing, or settlement-aware credit, and no unified treasury and protection system across the account.
                    </span>
                  </p>
                  
                  <ul className="space-y-4 text-gray-900 pt-2">
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No private neo-payments.</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No PayFi-powered credit.</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No financing tied to settlement behavior.</span>
                    </li>
                    <li className="flex items-start gap-4 group">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 mt-2 flex-shrink-0 shadow-sm" />
                      <span className="font-semibold text-base leading-relaxed">No unified treasury and risk layer.</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6 mt-8 border-t-2 border-gray-200">
                    <p className="text-black font-bold text-lg leading-relaxed tracking-tight">
                      Monaris changes that by turning stablecoin cashflow into private neo-finance infrastructure.
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
