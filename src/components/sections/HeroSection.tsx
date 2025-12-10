import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Wallet, Sparkles, PieChart, Activity, Send, Receipt, Clock, CheckCircle2, AlertCircle, Settings, Bell, ChevronDown, Play, Pause, Power, ToggleLeft, ToggleRight, Home, Building2, Users, Eye, EyeOff, Download, CreditCard, BarChart3, Plus, ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import { IconHome, IconCreditCard, IconChartBar, IconShield, IconActivity } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import dashboardHero from "@/assets/dashboard-hero.png";
import { FloatingDock } from "@/components/ui/floating-dock";

export const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const progress = useMotionValue(251.2);
  const smoothProgress = useSpring(progress, { 
    stiffness: 50,
    damping: 30,
    mass: 1
  });

  const dockItems = [
    {
      title: "Home",
      href: "#",
      icon: <IconHome className="w-full h-full text-slate-900" />,
    },
    {
      title: "Credit",
      href: "#",
      icon: <IconCreditCard className="w-full h-full text-slate-900" />,
    },
    {
      title: "Treasury",
      href: "#",
      icon: <IconChartBar className="w-full h-full text-slate-900" />,
    },
    {
      title: "Shield",
      href: "#",
      icon: <IconShield className="w-full h-full text-slate-900" />,
    },
    {
      title: "Activity",
      href: "#",
      icon: <IconActivity className="w-full h-full text-slate-900" />,
    },
  ];

  useEffect(() => {
    progress.set(isHovered ? 62.8 : 251.2);
  }, [isHovered, progress]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      {/* Premium gradient background with mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-emerald-500/[0.02] to-lime-400/[0.03] -z-10" />
      
      {/* Multi-colored dotted pattern */}
      <div className="absolute inset-0 -z-10" style={{
        backgroundImage: `
          radial-gradient(circle, rgba(34, 197, 94, 0.32) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(132, 204, 22, 0.26) 1.5px, transparent 1.5px),
          radial-gradient(circle, rgba(74, 222, 128, 0.2) 1.5px, transparent 1.5px)
        `,
        backgroundSize: '40px 40px, 60px 60px, 80px 80px',
        backgroundPosition: '0 0, 20px 20px, 40px 40px'
      }} />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(132,204,22,0.06),transparent_50%)] -z-10" />
      
      {/* Animated gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-lime-400/8 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 -z-10 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(34, 197, 94, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.5) 1px, transparent 1px)`,
        backgroundSize: '100px 100px'
      }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-emerald-500/40 backdrop-blur-sm shadow-[0_6px_20px_-12px_rgba(16,94,57,0.45)]">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span className="text-sm font-semibold text-emerald-600">
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
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground leading-[1.05] tracking-tight"
              >
                Banking meets{" "}
                <span className="relative inline-block">
                  DeFi
                  <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400/08 via-lime-400/08 to-emerald-400/08 blur-[0.5px]" />
                </span>
              </motion.h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl sm:text-xl lg:text-2xl xl:text-3xl font-display font-semibold leading-tight tracking-tight"
              >
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-500 to-lime-500 bg-clip-text text-transparent">
                  Borrow against the future. Autopilot Money OS for stablecoins credit, AI treasury automation, and market-neutral yield.
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Monaris turns your income into a single onchain account for balances, payments, and cashflow, plus an income-backed, under-collateralized credit line. On top, an AI-powered treasury allocates idle funds into strategies with progressive protection instead of cliff liquidations.
              </motion.p>
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
                className="group relative bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-500/90 hover:to-lime-500/90 text-white shadow-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-semibold overflow-hidden"
                onClick={() => window.open('https://form.typeform.com/to/c6vpCpMA', '_blank')}
              >
                <span className="relative z-10 flex items-center">
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const element = document.querySelector('#problem');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group border-2 border-border hover:border-emerald-500/50 text-foreground hover:bg-emerald-500/5 text-base sm:text-lg h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg"
              >
                See the Problem
                <TrendingUp className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>

            {/* Flow indicators - Modern Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-6">
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Income & Cashflow Backed</span>
              </div>
              <ArrowRight className="text-emerald-600 w-5 h-5" />
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Credit & Strategies</span>
              </div>
               <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-foreground">AI earns market-neutral DeFi yield</span>
              </div>
              <ArrowRight className="text-emerald-600 w-5 h-5" />
              <div className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-sm font-medium text-foreground">Storm Shield</span>
              </div>
            </div>
          </motion.div>

          {/* Right: iPhone 15 Pro Mobile Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex items-center justify-center max-w-full overflow-hidden"
          >
            {/* iPhone 15 Pro Frame - Realistic */}
            <div className="relative w-[320px] max-w-full mx-auto overflow-hidden">
              {/* Phone Frame/Bezel - More realistic */}
              <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3rem] p-[5px] shadow-none ring-1 ring-gray-200">
                {/* Screen Glass Effect */}
                <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 rounded-[2.8rem] overflow-hidden shadow-inner">
                  {/* iPhone Status Bar / Dynamic Island */}
                  <div className="relative h-12 flex items-center justify-center bg-white">
                    {/* Dynamic Island - iPhone 15 Pro */}
                    <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[110px] h-7 bg-black rounded-full shadow-lg z-10"></div>
                    {/* Status Bar Info */}
                    <div className="absolute top-2.5 left-4 right-4 flex items-center justify-between text-slate-700 text-[10px] font-semibold">
                      <div>1:20 PM</div>
                      <div className="flex items-center gap-1">
                        {/* Signal bars */}
                        <div className="flex items-end gap-0.5">
                          <div className="w-1 h-1 bg-slate-700 rounded-sm"></div>
                          <div className="w-1 h-1.5 bg-slate-700 rounded-sm"></div>
                          <div className="w-1 h-2 bg-slate-700 rounded-sm"></div>
                          <div className="w-1 h-2.5 bg-slate-700 rounded-sm"></div>
                  </div>
                        {/* WiFi */}
                        <svg className="w-3.5 h-2.5" viewBox="0 0 20 14" fill="none">
                          <path d="M10 0C6 0 2.5 1.5 0 4L10 14L20 4C17.5 1.5 14 0 10 0Z" fill="#1f2937"/>
                        </svg>
                        {/* Battery */}
                        <div className="w-5 h-2.5 border border-slate-700 rounded-sm relative">
                          <div className="absolute right-0 top-0.5 w-0.5 h-1.5 bg-slate-700 rounded-r"></div>
                          <div className="w-full h-full bg-slate-700 rounded-sm" style={{ width: '90%' }}></div>
                  </div>
                </div>
                </div>
              </div>

                  {/* Main Dashboard Container - Glassmorphism Design */}
                  <div
                    className="relative overflow-y-auto [&::-webkit-scrollbar]:hidden [&::-webkit-scrollbar-corner]:bg-transparent"
                    style={{ height: '560px', scrollbarWidth: 'none' as const }}
                  >
                    {/* Full-bleed Nature Wallpaper Background */}
                    <div className="absolute inset-0">
                      {/* Light gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                      {/* Soft overlay for readability */}
                      <div className="absolute inset-0 bg-white/60"></div>
                      {/* Subtle texture overlay - Enhanced */}
                      <div className="absolute inset-0 opacity-[0.12]" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                      {/* Additional depth layer */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)]"></div>
                      </div>

                  {/* Bottom gradient fill to avoid blank space */}
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-white/80 to-white pointer-events-none" />


                    {/* Dashboard Content - Glassmorphism */}
                    <div className="relative px-4 pt-7 pb-28 space-y-5">
                      {/* Hero Center - Large Balance */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center"
                      >
                        <div className="text-4xl font-semibold text-slate-900 mb-1.5 tracking-tight">$687,180.00</div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-xs text-slate-700 font-medium">687,180.00 USDC</span>
                    </div>
                  </motion.div>

                      {/* Quick Actions Row - 3 Circular Buttons */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center justify-center gap-7"
                      >
                        {[
                          { icon: ArrowDownCircle, label: 'Deposit' },
                          { icon: ArrowUpCircle, label: 'Borrow' },
                          { icon: BarChart3, label: 'Allocate' },
                        ].map((action, i) => (
                          <motion.button
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                            whileHover={{ scale: 1.12, y: -6 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-col items-center gap-2"
                          >
                            <div className="w-14 h-14 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center hover:bg-slate-50 transition">
                              <action.icon className="w-6 h-6 text-slate-700" strokeWidth={2.4} />
                      </div>
                            <span className="text-[10px] font-semibold text-slate-800">{action.label}</span>
                          </motion.button>
                        ))}
                  </motion.div>

                      {/* Account Snapshot - Glass Card */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.01 }}
                        className="backdrop-blur-xl bg-white/90 rounded-3xl border border-slate-200 shadow-xl p-4 hover:bg-white transition-all"
                  >
                        <div className="text-[10px] font-bold text-slate-800 mb-3 uppercase tracking-widest">Account Snapshot</div>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between py-0.5">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Available to Borrow</span>
                            <span className="text-sm font-bold text-slate-900">$17,000</span>
                      </div>
                          <div className="flex items-center justify-between py-0.5">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Treasury Deployed</span>
                            <span className="text-sm font-bold text-slate-900">32%</span>
                          </div>
                          <div className="flex items-center justify-between py-0.5">
                            <span className="text-[10px] text-slate-500 uppercase tracking-wide font-medium">Net Cashflow (30d)</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-emerald-600">+$2,400</span>
                              <div className="h-7 w-20 flex items-end gap-0.5">
                                {[40, 50, 45, 60, 55, 70, 65, 75, 80, 85].map((height, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                                    className="flex-1 bg-gradient-to-t from-emerald-500 via-emerald-400 to-lime-300 rounded-t shadow-sm"
                                  ></motion.div>
                                ))}
                        </div>
                      </div>
                      </div>
                    </div>
                  </motion.div>

                      {/* Recent Activity - Glass Card */}
                  <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        whileHover={{ scale: 1.01 }}
                        className="backdrop-blur-xl bg-white rounded-3xl border border-slate-200 shadow-lg p-4 hover:bg-slate-50 transition-all"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">Recent Activity</div>
                          <motion.button
                            whileHover={{ scale: 1.08, x: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-[9px] text-slate-600 hover:text-slate-800 font-semibold flex items-center gap-1 transition-colors"
                          >
                            View all <ArrowRight className="w-2.5 h-2.5" />
                          </motion.button>
                        </div>
                        <div className="space-y-3">
                          {[
                            { icon: TrendingUp, label: 'Income received', amount: '+$5000', time: '2h ago' },
                            { icon: CreditCard, label: 'Credit drawn', amount: '-$150', time: '5h ago' },
                            { icon: Sparkles, label: 'Strategy yield', amount: '+$45', time: '1d ago' },
                            { icon: Send, label: 'Payment sent', amount: '-$1200', time: '2d ago' },
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                              whileHover={{ x: 4, scale: 1.02 }}
                              className="flex items-center justify-between py-1 rounded-lg hover:bg-slate-100 transition-all cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                                  <item.icon className="w-4 h-4 text-slate-700" />
                                </div>
                                <div>
                                  <div className="text-[11px] font-semibold text-slate-900">{item.label}</div>
                                  <div className="text-[9px] text-slate-500 font-medium">{item.time}</div>
                                </div>
                      </div>
                              <span className="text-xs font-bold text-slate-800">{item.amount}</span>
                            </motion.div>
                          ))}
                      </div>
                      </motion.div>
                      </div>

                    </div>
                </div>
              </div>
            </div>
            {/* Bottom shadow base and Floating Dock */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[320px] max-w-full h-16 bg-gradient-to-t from-white via-white/80 to-transparent rounded-full blur-lg z-10 pointer-events-none"></div>
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 flex justify-center">
              <FloatingDock
                desktopClassName="w-[260px] max-w-full h-14 items-center justify-around bg-white border border-slate-200 rounded-full shadow-xl backdrop-blur px-3 py-2"
                mobileClassName="translate-y-4"
                items={dockItems}
              />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
