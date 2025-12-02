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
    description: "Plug your own strategies into FC under strict risk caps.",
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
            Built for <span className="text-cyan-500">builders</span> too.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Developers can build apps on top of FC, not just use FlexCredit.
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
              FC exposes a clean set of contracts and data models for credit, treasury, strategies, and risk. You can build your own wallets, dashboards, or agent frameworks on top of it.

            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mb-4 shadow-sm">
                    <feature.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <h4 className="font-display font-bold text-black mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5">
                View Protocol Docs
              </Button>
            </div>
          </motion.div>

          {/* Right: Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200"
          >
            <div className="space-y-6">
              {/* FlexCredit App - Top Layer */}
              <div className="flex justify-center">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl px-8 py-6 text-center">
                  <h3 className="text-xl font-bold text-blue-600 mb-1">FlexCredit App</h3>
                  <p className="text-sm text-gray-600">User Interface Layer</p>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-0.5 h-12 bg-blue-300"></div>
              </div>

              {/* FC Protocol - Middle Layer */}
              <div className="bg-gray-100 border-2 border-gray-300 rounded-3xl p-6">
                <h3 className="text-2xl font-bold text-black text-center mb-6">FC Protocol</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center">
                    <p className="font-bold text-black">Credit Engine</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center">
                    <p className="font-bold text-black">Treasury Engine</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center">
                    <p className="font-bold text-black">Risk Layer</p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 text-center">
                    <p className="font-bold text-black">Strategy Adapters</p>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-0.5 h-12 bg-blue-300"></div>
              </div>

              {/* External DeFi - Bottom Layer */}
              <div className="flex justify-center">
                <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl px-8 py-6 text-center max-w-md">
                  <h3 className="text-xl font-bold text-black mb-2">External DeFi</h3>
                  <p className="text-sm text-gray-600">Lending • Perps • DEXs • State Channels</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
