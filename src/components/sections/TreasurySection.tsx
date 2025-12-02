import { motion } from "framer-motion";
import { DollarSign, TrendingUp, ArrowRightLeft, BarChart } from "lucide-react";

const steps = [
  {
    icon: DollarSign,
    title: "USDC Incomes Come In",
    description: "Freelancers and teams get paid in stablecoins into their FlexCredit account.",
    badge: "+ $1,200 USDC from client",
  },
  {
    icon: TrendingUp,
    title: "FlexCredit Assigns a Credit Line",
    description: "FC's credit engine assigns a starter limit based on cashflow, behavior, and risk profile.",
    badge: "Credit line: $1,500 | Available: $1,500",
  },
  {
    icon: ArrowRightLeft,
    title: "You Draw Credit or Allocate",
    description: "User can draw from their credit to smooth cashflow, or allocate to strategies with one click.",
    badge: "Draw $300 • Allocate $400",
  },
  {
    icon: BarChart,
    title: "Treasury Engine Rebalances",
    description: "FlexCredit keeps target ratios between cash, strategies, and buffer; you see one unified view.",
    badge: "Cash 50% • Strategies 30% • Buffer 20%",
  },
];

export const TreasurySection = () => {
  return (
    <section id="treasury" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How <span className="text-gradient">credit and automated treasury</span> work in FlexCredit.
          </h2>
        </motion.div>

        {/* Step-by-step flow */}
        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -z-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">{step.description}</p>

                  {/* Badge */}
                  <div className="bg-accent/50 border border-primary/20 rounded-lg px-3 py-2 text-xs font-medium text-foreground">
                    {step.badge}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto border-l-2 border-primary pl-4 text-left">
            Everything is transparent: balances, credit usage, allocations, and protective actions are visible in one
            place.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
