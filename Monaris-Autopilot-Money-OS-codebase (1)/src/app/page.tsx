"use client";

import { motion } from "framer-motion";

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01"/>
    </svg>
  );
}

function BotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="8" width="18" height="12" rx="2"/>
      <path d="M12 8V5M8 13v2M16 13v2M7 17h2M15 17h2"/>
      <circle cx="12" cy="2" r="2"/>
    </svg>
  );
}

function TeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}

function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="1" y="4" width="22" height="16" rx="2"/>
      <path d="M1 10h22"/>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
    </svg>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/40 font-sans overflow-x-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 py-4 sm:py-6 md:px-8 md:py-12">
        <motion.div 
          className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-slate-800 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-2 md:mb-3 tracking-tight">
            How Monaris Works
          </h1>
          <p className="text-xs sm:text-sm md:text-lg lg:text-2xl text-slate-600 font-medium">Autopilot Money OS</p>
        </motion.div>

        <div className="relative aspect-[16/9] w-full hidden md:block" style={{ perspective: "2000px" }}>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transform: "rotateX(55deg) rotateZ(-45deg) scale(0.7)",
              transformStyle: "preserve-3d"
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center md:scale-100">
              <LeftSection />
              <CenterSection />
              <RightSection />
              <BottomSection />
              <FlowArrows />
              <ScaleBadge />
            </div>
          </div>
        </div>

        <div className="block md:hidden overflow-x-auto">
          <div className="relative min-w-[800px] aspect-[16/9]" style={{ perspective: "2000px" }}>
            <div 
              className="absolute inset-0 flex items-center justify-center"
              style={{ 
                transform: "rotateX(55deg) rotateZ(-45deg) scale(0.7)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <LeftSection />
                <CenterSection />
                <RightSection />
                <BottomSection />
                <FlowArrows />
                <ScaleBadge />
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="mt-4 sm:mt-6 md:mt-8 lg:mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 px-4">
            Enterprise-grade infrastructure powering the future of autonomous finance
          </p>
        </motion.div>
      </div>
    </div>
  );
}



function LeftSection() {
  const users = [
    { icon: UserIcon, label: "Freelancers & creators" },
    { icon: TeamIcon, label: "Onchain teams / DAOs" },
    { icon: BuildingIcon, label: "Businesses & platforms" },
    { icon: BotIcon, label: "AI agents (Agentic Finance)" },
  ];

  const offchainSources = [
    "Bank accounts / payroll APIs",
    "Exchanges & custodians",
    "Accounting / invoicing platforms",
  ];

  return (
    <motion.div 
      className="absolute left-[2%] top-[15%]"
      style={{ transform: "translateZ(20px)" }}
      {...fadeInUp}
      transition={{ delay: 0.1 }}
    >
      <div className="relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white text-[9px] md:text-xs font-semibold shadow-lg whitespace-nowrap">
            Stablecoin income in
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 w-[calc(100%+32px)] h-[calc(100%+32px)] opacity-10">
            <div className="grid grid-cols-6 gap-1 p-2">
              {[...Array(24)].map((_, i) => (
                <UserIcon key={i} className="w-2 h-2 md:w-3 md:h-3 text-teal-600" />
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/90 to-teal-50/80 backdrop-blur-xl rounded-2xl p-3 md:p-4 shadow-xl shadow-teal-500/10 border border-teal-200/50 relative z-10">
            <h3 className="text-[10px] md:text-xs font-bold text-slate-700 mb-2 md:mb-3 text-center">
              Stablecoin Users & Treasuries
            </h3>
            <div className="grid grid-cols-2 gap-1.5 md:gap-2">
              {users.map((user, idx) => (
                <div 
                  key={idx}
                  className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg p-1.5 md:p-2 border border-teal-300/30 hover:border-teal-400/50 transition-all"
                >
                  <user.icon className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 text-teal-600" />
                  <p className="text-[7px] md:text-[8px] text-slate-600 text-center leading-tight">{user.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-4 space-y-1">
          <p className="text-[8px] md:text-[9px] text-slate-500 font-medium mb-1 md:mb-2">Off-chain sources:</p>
          {offchainSources.map((source, idx) => (
            <div 
              key={idx}
              className="bg-white/60 backdrop-blur rounded-lg px-2 py-1 md:px-3 md:py-1.5 border border-slate-200/50 shadow-sm"
            >
              <p className="text-[7px] md:text-[8px] text-slate-600">{source}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CenterSection() {
  const modules = [
    {
      title: "Onchain Account Layer",
      subtitle: "Unified ledger - Balances - Payments - History",
      color: "from-cyan-500 to-teal-500",
      badge: null
    },
    {
      title: "Identity & Policy Engine",
      subtitle: "Humans & AI agents - Roles - Spend policies",
      color: "from-teal-500 to-emerald-500",
      badge: null
    },
    {
      title: "Income-Backed Credit Engine",
      subtitle: "Credit limits from stablecoin income + risk bands",
      badge: "Borrow against the future",
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Treasury Autopilot",
      subtitle: "Cash - Buffer - Strategies - Rebalancing",
      color: "from-teal-500 to-cyan-500",
      badge: null
    },
    {
      title: "Storm Shield Risk OS",
      subtitle: "Progressive derisking - No cliff liquidations",
      color: "from-cyan-500 to-blue-500",
      badge: null
    },
  ];

  return (
    <motion.div 
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: "translateX(-50%) translateY(-50%) translateZ(40px)" }}
      {...fadeInUp}
      transition={{ delay: 0.3 }}
    >
      <div className="relative">
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-3xl p-4 md:p-6 shadow-2xl shadow-slate-900/30 border border-slate-600/50 min-w-[280px] md:min-w-[420px] lg:min-w-[520px]">
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs md:text-sm">M</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-sm md:text-lg">Monaris Core</h2>
              <p className="text-teal-300 text-[9px] md:text-xs">Autopilot Money OS</p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-1.5 md:gap-2 mb-4 md:mb-6">
            {modules.map((module, idx) => (
              <div 
                key={idx}
                className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-2 md:p-3 border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${module.color} mb-1.5 md:mb-2`} />
                <h4 className="text-white font-semibold text-[8px] md:text-[10px] mb-0.5 md:mb-1 leading-tight">{module.title}</h4>
                <p className="text-slate-400 text-[6px] md:text-[7px] leading-tight">{module.subtitle}</p>
                {module.badge && (
                  <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 px-1 py-0.5 md:px-1.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full">
                    <span className="text-[5px] md:text-[6px] font-bold text-white whitespace-nowrap">{module.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 rounded-xl p-2 md:p-3 mb-3 md:mb-4">
            <div className="flex items-center justify-between text-[7px] md:text-[8px] text-slate-400">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-[8px] md:text-[10px]">2</span>
                <span>Computes credit limit</span>
              </div>
              <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 text-teal-400" />
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[8px] md:text-[10px]">3</span>
                <span>Allocates by policy</span>
              </div>
              <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 text-emerald-400" />
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[8px] md:text-[10px]">4</span>
                <span>Risk monitoring</span>
                <ShieldIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-cyan-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full border border-teal-400/30">
              <span className="text-teal-300 text-[8px] md:text-[10px] font-medium">Autopilot treasury: Cash - Buffer - Strategies</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function RightSection() {
  const strategies = [
    "Market-neutral vaults",
    "Perp hedging strategies",
    "DeFi yield partners",
    "RWA / T-bill partners",
  ];

  const payments = [
    { icon: CreditCardIcon, label: "Cards & spend" },
    { icon: GlobeIcon, label: "Off-ramp & FX rails" },
    { icon: BotIcon, label: "Apps, wallets, AI agents" },
  ];

  const chains = ["ETH", "SOL", "ARB", "OP"];

  return (
    <motion.div 
      className="absolute right-[2%] top-[20%]"
      style={{ transform: "translateZ(30px)" }}
      {...fadeInUp}
      transition={{ delay: 0.5 }}
    >
      <div className="space-y-3 md:space-y-4">
        <div className="bg-gradient-to-br from-white/90 to-cyan-50/80 backdrop-blur-xl rounded-2xl p-3 md:p-4 shadow-xl shadow-cyan-500/10 border border-cyan-200/50">
          <h3 className="text-[10px] md:text-xs font-bold text-slate-700 mb-2 md:mb-3 text-center">
            Strategy Venues (on-chain)
          </h3>
          <div className="grid grid-cols-2 gap-1.5 md:gap-2">
            {strategies.map((strategy, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-cyan-300/30"
              >
                <p className="text-[7px] md:text-[8px] text-slate-600 text-center">{strategy}</p>
              </div>
            ))}
          </div>
          <p className="text-[7px] md:text-[8px] text-slate-500 text-center mt-2">Curated, market-neutral strategies</p>
          
          <div className="flex justify-center gap-1 md:gap-2 mt-2 md:mt-3">
            {chains.map((chain, idx) => (
              <div 
                key={idx}
                className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <span className="text-[6px] md:text-[7px] font-bold text-slate-500">{chain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/90 to-emerald-50/80 backdrop-blur-xl rounded-2xl p-3 md:p-4 shadow-xl shadow-emerald-500/10 border border-emerald-200/50">
          <h3 className="text-[10px] md:text-xs font-bold text-slate-700 mb-2 md:mb-3 text-center">
            Payments & Uses
          </h3>
          <div className="space-y-1.5 md:space-y-2">
            {payments.map((payment, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg px-2 py-1.5 md:px-3 md:py-2 border border-emerald-300/30"
              >
                <payment.icon className="w-3 h-3 md:w-4 md:h-4 text-emerald-600" />
                <p className="text-[7px] md:text-[8px] text-slate-600">{payment.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg">
            <span className="text-white text-[8px] md:text-[9px] font-semibold">Humans & AI agents act within policies</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BottomSection() {
  const services = [
    { icon: DatabaseIcon, label: "On-chain data indexers & oracles" },
    { icon: GlobeIcon, label: "Off-chain data connectors (banks, payroll, bureaus)" },
    { icon: ShieldIcon, label: "Credit bureaus / risk data" },
    { icon: BotIcon, label: "AI orchestration layer (signals to actions)" },
    { icon: ChartIcon, label: "Monitoring, analytics & reporting" },
  ];

  return (
    <motion.div 
      className="absolute left-1/2 bottom-[5%] -translate-x-1/2 w-[85%]"
      style={{ transform: "translateX(-50%) translateZ(10px)" }}
      {...fadeInUp}
      transition={{ delay: 0.7 }}
    >
      <div className="bg-gradient-to-r from-slate-100/90 via-slate-50/95 to-slate-100/90 backdrop-blur-xl rounded-2xl p-3 md:p-4 shadow-xl border border-slate-200/50">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <h3 className="text-[10px] md:text-xs font-bold text-slate-700">Data, AI & Integrations</h3>
          <div className="flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full border border-purple-200/50">
            <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-[8px] md:text-[10px]">6</span>
            <span className="text-[7px] md:text-[8px] text-purple-700 font-medium">Continuous data feedback for credit, risk & automation</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-1.5 md:gap-3">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="relative bg-white/80 rounded-xl p-2 md:p-3 border border-slate-200/50 shadow-sm hover:shadow-md transition-all"
            >
              <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-0.5 h-6 md:h-10 bg-gradient-to-t from-purple-400/50 to-transparent" />
              <service.icon className="w-4 h-4 md:w-5 md:h-5 mx-auto mb-1 md:mb-2 text-slate-500" />
              <p className="text-[6px] md:text-[7px] text-slate-600 text-center leading-tight">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function FlowArrows() {
  return (
    <>
      <motion.div 
        className="absolute left-[22%] top-[32%]"
        style={{ transform: "translateZ(50px)" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-1 md:gap-2">
          <div className="w-12 md:w-20 lg:w-28 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-cyan-500 border-y-[3px] md:border-y-[4px] border-y-transparent" />
          </div>
          <div className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-teal-500 rounded-full">
            <span className="text-white font-bold text-[8px] md:text-[10px]">1</span>
            <span className="text-white text-[6px] md:text-[8px] whitespace-nowrap">Income & deposits</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute right-[22%] top-[28%]"
        style={{ transform: "translateZ(50px)" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center gap-1 md:gap-2">
          <div className="flex items-center gap-1 px-1.5 py-0.5 md:px-2 md:py-1 bg-cyan-500 rounded-full">
            <span className="text-white font-bold text-[8px] md:text-[10px]">5</span>
            <span className="text-white text-[6px] md:text-[8px] whitespace-nowrap">Capital to strategies & use</span>
          </div>
          <div className="w-10 md:w-16 lg:w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[6px] md:border-l-[8px] border-l-emerald-500 border-y-[3px] md:border-y-[4px] border-y-transparent" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function ScaleBadge() {
  return (
    <motion.div 
      className="absolute left-1/2 top-[8%] -translate-x-1/2"
      style={{ transform: "translateX(-50%) translateZ(60px)" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-xl rounded-full shadow-xl border border-slate-600/50">
        <div className="flex -space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border border-slate-700" />
          ))}
        </div>
        <span className="text-white text-[8px] md:text-[10px] font-semibold">100M+ users - Multi-region, high-scale architecture</span>
      </div>
    </motion.div>
  );
}

function MobileLayout() {
  return null;
}
