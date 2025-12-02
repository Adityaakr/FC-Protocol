import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Wallet, Sparkles, BarChart3, PieChart } from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Premium gradient background with mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/[0.02] to-cyan-500/[0.03] -z-10" />
      
      {/* Multi-colored dotted pattern */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `
          radial-gradient(circle, rgba(59, 130, 246, 0.35) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(6, 182, 212, 0.28) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(139, 92, 246, 0.22) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px, 60px 60px, 80px 80px',
        backgroundPosition: '0 0, 20px 20px, 40px 40px'
      }} />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.06),transparent_50%)] -z-10" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 -z-10 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-cyan-500/10 to-primary/10 border border-primary/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
                  Next-Gen Banking
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-[1.05] tracking-tight"
              >
                Banking meets{" "}
                <span className="relative inline-block">
                  DeFi
                  <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary/30 to-cyan-500/30 blur-sm" />
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-1xl sm:text-2xl lg:text-3xl xl:text-4xl font-display font-semibold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-primary bg-clip-text text-transparent animate-gradient">
                  Income, cashflow backed Credit Lines & AI that earns delta-neutral yield for YOU
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              >
FlexCredit turns your income into an onchain bank account with balances, payments, cashflow, and an income-backed, under-collateralized credit line. On top, it runs an automated treasury that allocates idle funds into strategies with progressive liquidation protection.          </motion.p>
            </div>

            {/* Premium CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-600/90 text-white shadow-lg hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#problem');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group border-2 border-border hover:border-primary/50 text-foreground hover:bg-primary/5 text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                See the Problem
                <TrendingUp className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            {/* Flow indicators - Modern Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Income & Cashflow Backed</span>
              </div>
              <ArrowRight className="text-primary w-5 h-5" />
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Credit & Strategies</span>
              </div>
               <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">AI earns delta-neutral DeFi yield</span>
              </div>
              <ArrowRight className="text-primary w-5 h-5" />
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground">Storm Shield</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:scale-105"
          >
            {/* Main Dashboard Card - Glassmorphism */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-card/95 via-card/90 to-card/95 backdrop-blur-xl">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-cyan-500/[0.03] pointer-events-none" />
              
              {/* Dashboard Header */}
              <div className="relative bg-gradient-to-r from-primary/[0.08] via-cyan-500/[0.05] to-primary/[0.08] border-b border-white/5 px-6 py-5 flex items-center justify-between backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center ring-1 ring-primary/20">
                    <Wallet className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground tracking-tight">Earning</div>
                    <div className="text-xs text-muted-foreground">Main Account</div>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary via-cyan-500 to-primary shadow-lg" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-cyan-500 blur-md opacity-50" />
                </div>
              </div>

              {/* Balance Section */}
              <div className="relative p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Total Balance - Enhanced */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="group relative bg-gradient-to-br from-primary/[0.08] via-primary/[0.04] to-transparent rounded-2xl p-5 border border-primary/10 hover:border-primary/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
                        <span className="font-medium">Total balance</span>
                        <span className="text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full bg-primary/10">+Keep on savings</span>
                      </div>
                      <div className="text-3xl font-display font-bold text-foreground mb-2 tracking-tight">$12,450</div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="font-medium">$500 UTTS</span>
                        <ArrowRight className="w-3 h-3 text-primary" />
                        <span className="font-medium">$000 OUTTS</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Credit Line - Enhanced */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    className="group relative bg-gradient-to-br from-cyan-500/[0.08] via-cyan-500/[0.04] to-transparent rounded-2xl p-5 border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="text-xs text-muted-foreground mb-2 flex items-center justify-between">
                        <span className="font-medium">Credit line</span>
                        <span className="text-cyan-600 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10">Borrow available</span>
                      </div>
                      <div className="text-3xl font-display font-bold text-foreground mb-2 tracking-tight">$1,000</div>
                      <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                        <span className="font-medium">$00 UTTS</span>
                        <ArrowRight className="w-3 h-3 text-cyan-600" />
                        <span className="font-medium">$0000 UTTS</span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Charts Section - Premium */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Delta-neutral yield chart - Refined */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl p-5 border border-white/5 backdrop-blur-sm overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-1">
                        <PieChart className="w-3.5 h-3.5 text-primary" />
                        <div className="text-xs font-bold text-foreground tracking-tight">Delta-neutral yield</div>
                      </div>
                      <div className="text-[10px] text-muted-foreground mb-4 font-medium">Managed risk profile</div>
                      <div className="flex items-center justify-center h-24 relative">
                        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="6" className="text-muted-foreground/10" />
                          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="6" strokeDasharray="251.2" strokeDashoffset="62.8" strokeLinecap="round" className="drop-shadow-lg" />
                          <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                              <stop offset="100%" stopColor="rgb(6, 182, 212)" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-display font-bold text-primary">75%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center mt-3">
                        <div className="text-[11px] text-muted-foreground font-medium">Responsible yield</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Money-to-Fuel Shield chart - Refined */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.45 }}
                    className="relative bg-gradient-to-br from-muted/40 to-muted/20 rounded-2xl p-5 border border-white/5 backdrop-blur-sm overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="w-3.5 h-3.5 text-cyan-600" />
                        <div className="text-xs font-bold text-foreground tracking-tight">Money-to-Fuel Shield</div>
                      </div>
                      <div className="flex items-end justify-between h-32 gap-1.5 mt-6">
                        <div className="flex-1 bg-gradient-to-t from-primary/40 to-primary/60 rounded-t-xl shadow-sm" style={{ height: '40%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary/50 to-primary/70 rounded-t-xl shadow-sm" style={{ height: '60%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary/60 to-primary/80 rounded-t-xl shadow-sm" style={{ height: '75%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary/70 to-primary/90 rounded-t-xl shadow-sm" style={{ height: '90%' }}></div>
                        <div className="flex-1 bg-gradient-to-t from-primary/80 to-primary rounded-t-xl shadow-lg" style={{ height: '100%' }}></div>
                      </div>
                      <div className="flex justify-between text-[9px] text-muted-foreground mt-3 font-medium">
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span className="text-primary font-semibold">Storm shielded</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Active Strategies Card - Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-card/95 to-card/90 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-2 font-semibold tracking-wide">Active Strategies</div>
                <div className="text-5xl font-display font-bold bg-gradient-to-br from-primary to-cyan-600 bg-clip-text text-transparent">3</div>
              </div>
            </motion.div>

            {/* Floating Credit Utilization Card - Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-card/95 to-card/90 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl" />
              <div className="relative">
                <div className="text-xs text-muted-foreground mb-2 font-semibold tracking-wide">Credit Utilization</div>
                <div className="flex items-baseline gap-1">
                  <div className="text-5xl font-display font-bold text-foreground">30</div>
                  <div className="text-2xl font-display font-bold text-muted-foreground">%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
