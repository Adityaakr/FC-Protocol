import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code2, FileCode, Box, Webhook } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Credit Engine",
    description: "Read limits, usage, and events.",
  },
  {
    icon: FileCode,
    title: "Treasury Engine",
    description: "Allocate capital into whitelisted strategies.",
  },
  {
    icon: Box,
    title: "Strategy Adapters",
    description: "Plug your own strategies into Monaris Protocol under strict risk caps.",
  },
  {
    icon: Webhook,
    title: "Risk Hooks",
    description: "Subscribe to risk events and customize your own responses.",
  },
];

const codeSnippets = [
  { method: "drawCredit", params: "(user, amount)" },
  { method: "allocateToStrategy", params: "(strategyId, user, amount)" },
  { method: "realizePnL", params: "(strategyId, user, pnl)" },
];

export const BuildersSection = () => {
  return (
    <section id="builders" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-black mb-4 leading-tight tracking-tight">
            Built for <span className="text-emerald-600">builders</span> too.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Developers can build apps on top of Monaris Protocol, not just use Monaris.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Monaris Protocol exposes a clean set of contracts and data models for credit, treasury, strategies, and risk. You can build your own wallets, dashboards, or agent frameworks on top of it.

            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-emerald-500/40 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-4 shadow-sm group-hover:from-emerald-100 group-hover:to-emerald-200 group-hover:scale-105 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-emerald-600 group-hover:text-emerald-700 transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-black mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg" className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:border-emerald-700 hover:text-emerald-700 transition-all">
                View Protocol Docs
              </Button>
            </div>
          </motion.div>

          {/* Right: Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-3xl p-8 border-2 border-gray-700 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-400 font-mono">monaris-sdk.ts</span>
            </div>
            
            <div className="space-y-3 font-mono text-xs leading-relaxed">
              <div className="text-gray-500">
                <span className="text-purple-400">import</span>{" "}
                <span className="text-gray-400">{'{'}</span>{" "}
                <span className="text-cyan-300">MonarisSDK</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-cyan-300">zkTLS</span>
                <span className="text-gray-400">,</span>{" "}
                <span className="text-cyan-300">StrategyAdapter</span>
                <span className="text-gray-400">{'}'}</span>{" "}
                <span className="text-purple-400">from</span>{" "}
                <span className="text-green-300">'@monaris/sdk'</span>
              </div>
              
              <div className="pt-2 space-y-2">
                <div className="text-gray-500">
                  <span className="text-gray-400">//</span> 1. Initialize SDK & verify offchain balances
                </div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">sdk</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-purple-400">new</span>{" "}
                  <span className="text-yellow-300">MonarisSDK</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-orange-300">provider</span>
                  <span className="text-gray-400">)</span>
                </div>
                <div className="pt-1">
                  <span className="text-gray-500">
                    <span className="text-gray-400">//</span> Verify Coinbase & bank balances via zkTLS
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">verifiedBalance</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">zkTLS</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">verifyOffchainBalance</span>
                  <span className="text-gray-400">(</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-300">coinbase</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">'api_key_xxx'</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-6">
                  <span className="text-cyan-300">bank</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">'plaid_token_xxx'</span>
                </div>
                <div className="pl-4">
                  <span className="text-gray-400">{'}'}</span>
                </div>
                <div>
                  <span className="text-gray-400">)</span>
                </div>
              </div>
              
              <div className="pt-2 space-y-2">
                <div className="text-gray-500">
                  <span className="text-gray-400">//</span> 2. Query credit account with verified income
                </div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">account</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">sdk</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">getCreditAccount</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-orange-300">userAddr</span>
                  <span className="text-gray-400">,</span>{" "}
                  <span className="text-cyan-300">verifiedBalance</span>
                  <span className="text-gray-400">)</span>
                </div>
                <div>
                  <span className="text-yellow-300">console</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">log</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-green-300">`Credit Limit: $</span>
                  <span className="text-gray-400">${'{'}</span>
                  <span className="text-orange-300">account</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-cyan-300">limit</span>
                  <span className="text-gray-400">{'}'}</span>
                  <span className="text-green-300">`</span>
                  <span className="text-gray-400">)</span>
                </div>
              </div>
              
              <div className="pt-2 space-y-2">
                <div className="text-gray-500">
                  <span className="text-gray-400">//</span> 3. Check realized PNL & allocate to strategy
                </div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">pnl</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">sdk</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">getRealizedPnL</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-orange-300">userAddr</span>
                  <span className="text-gray-400">)</span>
                </div>
                <div>
                  <span className="text-yellow-300">console</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">log</span>
                  <span className="text-gray-400">(</span>
                  <span className="text-green-300">`Total PNL: $</span>
                  <span className="text-gray-400">${'{'}</span>
                  <span className="text-orange-300">pnl</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-cyan-300">total</span>
                  <span className="text-gray-400">{'}'}</span>
                  <span className="text-green-300">`</span>
                  <span className="text-gray-400">)</span>
                </div>
                <div className="pt-1">
                  <span className="text-gray-500">
                    <span className="text-gray-400">//</span> Allocate to delta-neutral strategy adapter
                  </span>
                </div>
                <div>
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-yellow-300">sdk</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">allocateStrategy</span>
                  <span className="text-gray-400">(</span>
                </div>
                <div className="pl-4">
                  <span className="text-orange-300">userAddr</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">StrategyAdapter</span>
                  <span className="text-gray-400">.</span>
                  <span className="text-green-400">DELTA_NEUTRAL_VAULT</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">amount</span>
                  <span className="text-gray-400">:</span>{" "}
                  <span className="text-green-300">10000</span>
                </div>
                <div>
                  <span className="text-gray-400">)</span>
                </div>
              </div>
            </div>
            
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
