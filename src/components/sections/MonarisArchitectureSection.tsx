import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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

export const MonarisArchitectureSection = () => {
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return; // only center on mobile

    // Center the scroll position so middle (Core) is visible
    requestAnimationFrame(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        el.scrollLeft = maxScroll / 2;
      }
    });
  }, []);

  return (
    <section id="monaris-architecture" className="bg-gradient-to-br from-slate-50 via-cyan-50/30 to-teal-50/40 font-sans overflow-x-hidden">
      <div className="w-full max-w-[1800px] mx-auto px-4 py-2 sm:py-3 md:px-8 md:py-4">
        <motion.div 
          className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-0 lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
    
        </motion.div>

        {/* Desktop version - redesigned based on original Monaris codebase with larger sizes */}
        <div className="relative aspect-[16/9] w-full hidden lg:block overflow-hidden" style={{ perspective: "2000px" }}>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transform: "rotateX(35deg) rotateZ(-40deg) scale(0.8)",
              transformStyle: "preserve-3d",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility"
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center lg:scale-100" style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility"
            }}>
              <DesktopLeftSection />
              <DesktopCenterSection />
              <DesktopRightSection />
              <DesktopBottomSection />
              <DesktopFlowArrows />
              <DesktopScaleBadge />
            </div>
          </div>
        </div>

        {/* Tablet version (kept for medium screens) */}
        <div className="relative aspect-[16/9] w-full hidden md:block lg:hidden" style={{ perspective: "2000px" }}>
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{ 
              transform: "rotateX(55deg) rotateZ(-45deg) scale(0.7)",
              transformStyle: "preserve-3d",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility"
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center md:scale-100" style={{
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility"
            }}>
              <LeftSection />
              <CenterSection />
              <RightSection />
              <BottomSection />
              <FlowArrows />
              <ScaleBadge />
            </div>
          </div>
        </div>

        {/* Mobile version */}
        <div className="block md:hidden overflow-x-auto">
          <div className="relative min-w-[800px] aspect-[16/9] h-[70vh] max-h-[600px]" style={{ perspective: "2000px" }}>
            <div 
              className="absolute inset-0 flex items-center justify-start"
              style={{ 
                transform: "rotateX(30deg) rotateZ(-25deg) scale(0.95) translateX(-15%)",
                transformStyle: "preserve-3d",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility"
              }}
            >
              <div className="relative w-full h-full flex items-center justify-start ml-[10%]" style={{
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
                textRendering: "optimizeLegibility"
              }}>
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
          className="mt-2 sm:mt-3 md:mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-[10px] sm:text-xs md:text-sm text-slate-500 px-4">
            Enterprise-grade infrastructure powering the future of autonomous finance
          </p>
        </motion.div>
      </div>
    </section>
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
          <div className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full text-white text-sm md:text-xs font-bold shadow-lg whitespace-nowrap">
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

          <div className="bg-white rounded-2xl p-4 md:p-4 shadow-xl shadow-teal-500/10 border-2 border-teal-500/50 relative z-10">
            <h3 className="text-sm md:text-xs font-bold text-slate-900 mb-3 md:mb-3 text-center">
              Stablecoin Users & Treasuries
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-2">
              {users.map((user, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg p-2 md:p-2 border-2 border-teal-500/30 hover:border-teal-500/50 transition-all"
                >
                  <user.icon className="w-5 h-5 md:w-5 md:h-5 mx-auto mb-1.5 text-teal-600" />
                  <p className="text-xs md:text-[8px] text-slate-900 font-semibold text-center leading-tight">{user.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 md:mt-4 space-y-1.5">
          <p className="text-sm md:text-[9px] text-slate-900 font-bold mb-1.5 md:mb-2">Off-chain sources:</p>
          {offchainSources.map((source, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg px-3 py-1.5 md:px-3 md:py-1.5 border-2 border-teal-500/30 shadow-sm"
            >
              <p className="text-xs md:text-[8px] text-slate-900 font-semibold">{source}</p>
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
        <div className="bg-gradient-to-br from-slate-800 via-teal-900/40 to-slate-800 rounded-3xl p-5 md:p-6 shadow-2xl shadow-teal-900/30 border-2 border-teal-500/30 min-w-[580px] md:min-w-[800px] lg:min-w-[950px]">
          <div className="flex items-center justify-center gap-3 md:gap-3 mb-5 md:mb-6">
            <div className="w-8 h-8 md:w-8 md:h-8 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center overflow-hidden">
              <img src="/mon-s.png" alt="Monaris" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white font-bold text-base md:text-lg">Monaris Core</h2>
              <p className="text-teal-300 text-xs md:text-xs font-semibold">Autopilot Money OS</p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4 md:gap-5 mb-5 md:mb-6">
            {modules.map((module, idx) => (
              <div 
                key={idx}
                className="relative bg-slate-800/80 rounded-xl p-4 md:p-4.5 border-2 border-teal-500/20 hover:border-teal-500/40 transition-all group overflow-hidden"
              >
                <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${module.color} mb-3 md:mb-3`} />
                <h4 className="text-white font-bold text-[12px] md:text-[13px] mb-2 md:mb-2.5 leading-tight">{module.title}</h4>
                <p className="text-teal-200 font-semibold text-[11px] md:text-[12px] leading-tight">{module.subtitle}</p>
                {module.badge && (
                  <div className="absolute -top-2 -right-2 md:-top-2 md:-right-2 px-2.5 py-1 md:px-2.5 md:py-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-lg z-10">
                    <span className="text-[10px] md:text-[11px] font-bold text-white whitespace-nowrap">{module.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-800/80 rounded-xl p-4 md:p-3 mb-4 md:mb-4 border-2 border-teal-500/30">
            <div className="flex items-center justify-between gap-1 md:gap-2 text-xs md:text-[9px] text-teal-200">
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-6 h-6 md:w-5 md:h-5 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-sm md:text-[10px]">2</span>
                <span className="font-bold whitespace-nowrap">Computes credit limit</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 md:w-4 md:h-4 text-teal-400 flex-shrink-0" />
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-6 h-6 md:w-5 md:h-5 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-sm md:text-[10px]">3</span>
                <span className="font-bold whitespace-nowrap">Allocates by policy</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 md:w-4 md:h-4 text-teal-400 flex-shrink-0" />
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="w-6 h-6 md:w-5 md:h-5 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-sm md:text-[10px]">4</span>
                <span className="font-bold whitespace-nowrap">Risk monitoring</span>
                <ShieldIcon className="w-4 h-4 md:w-3 md:h-3 text-teal-400 flex-shrink-0" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-4 py-2 md:px-4 md:py-2 bg-gradient-to-r from-teal-500/30 to-cyan-500/30 rounded-full border-2 border-teal-400/50">
              <span className="text-teal-200 text-sm md:text-[11px] font-bold">Autopilot treasury: Cash - Buffer - Strategies</span>
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
      className="absolute right-[-30%] top-[20%]"
      style={{ transform: "translateX(-10%) translateZ(30px)" }}
      {...fadeInUp}
      transition={{ delay: 0.5 }}
    >
      <div className="space-y-3 md:space-y-4">
        <div className="bg-white rounded-2xl p-4 md:p-4 shadow-xl shadow-teal-500/10 border-2 border-teal-500/50">
          <h3 className="text-sm md:text-xs font-bold text-slate-900 mb-3 md:mb-3 text-center">
            Strategy Venues (on-chain)
          </h3>
          <div className="grid grid-cols-2 gap-2 md:gap-2">
            {strategies.map((strategy, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg px-3 py-2 md:px-3 md:py-2 border-2 border-teal-500/30"
              >
                <p className="text-xs md:text-[8px] text-slate-900 font-semibold text-center">{strategy}</p>
              </div>
            ))}
          </div>
          <p className="text-xs md:text-[8px] text-slate-800 font-semibold text-center mt-2">Curated, market-neutral strategies</p>
          
          <div className="flex justify-center gap-1.5 md:gap-2 mt-3 md:mt-3">
            {chains.map((chain, idx) => (
              <div 
                key={idx}
                className="w-6 h-6 md:w-6 md:h-6 rounded-full bg-white border-2 border-teal-500/50 flex items-center justify-center"
              >
                <span className="text-xs md:text-[7px] font-bold text-slate-900">{chain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-4 shadow-xl shadow-teal-500/10 border-2 border-teal-500/50">
          <h3 className="text-sm md:text-xs font-bold text-slate-900 mb-3 md:mb-3 text-center">
            Payments & Uses
          </h3>
          <div className="space-y-2 md:space-y-2">
            {payments.map((payment, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 md:gap-2 bg-white rounded-lg px-3 py-2 md:px-3 md:py-2 border-2 border-teal-500/30"
              >
                <payment.icon className="w-5 h-5 md:w-4 md:h-4 text-teal-600" />
                <p className="text-xs md:text-[8px] text-slate-900 font-semibold">{payment.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="px-4 py-2 md:px-4 md:py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full shadow-lg">
            <span className="text-white text-sm md:text-[9px] font-semibold">Humans & AI agents act within policies</span>
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
      className="absolute left-1/2 bottom-[-35%] -translate-x-1/2 w-[85%]"
      style={{ transform: "translateX(-50%) translateY(35%) translateZ(10px)" }}
      {...fadeInUp}
      transition={{ delay: 0.7 }}
    >
      <div className="bg-white rounded-2xl p-4 md:p-4 shadow-xl border-2 border-teal-500/50">
        <div className="flex items-center justify-between mb-3 md:mb-3">
          <h3 className="text-sm md:text-xs font-bold text-slate-900">Data, AI & Integrations</h3>
          <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-full border-2 border-teal-500/50">
            <span className="w-5 h-5 md:w-5 md:h-5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xs md:text-[10px]">6</span>
            <span className="text-xs md:text-[8px] text-teal-900 font-semibold">Continuous data feedback for credit, risk & automation</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 md:gap-3">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="relative bg-white rounded-xl p-2.5 md:p-3 border-2 border-teal-500/30 shadow-sm hover:shadow-md transition-all"
            >
              <div className="absolute -top-1 md:-top-2 left-1/2 -translate-x-1/2 w-0.5 h-8 md:h-10 bg-gradient-to-t from-teal-400/50 to-transparent" />
              <service.icon className="w-5 h-5 md:w-5 md:h-5 mx-auto mb-1.5 md:mb-2 text-teal-600" />
              <p className="text-[10px] md:text-[7px] text-slate-900 font-semibold text-center leading-tight">{service.label}</p>
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
          <div className="flex items-center gap-1.5 px-3 py-1.5 md:px-2 md:py-1 bg-teal-500 rounded-full">
            <span className="text-white font-bold text-sm md:text-[10px]">1</span>
            <span className="text-white text-xs md:text-[8px] whitespace-nowrap font-semibold">Income & deposits</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute right-[0%] top-[28%]"
        style={{ transform: "translateX(-15%) translateZ(50px)" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center gap-1 md:gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 md:px-2 md:py-1 bg-cyan-500 rounded-full">
            <span className="text-white font-bold text-sm md:text-[10px]">5</span>
            <span className="text-white text-xs md:text-[8px] whitespace-nowrap font-semibold">Capital to strategies & use</span>
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
      <div className="flex items-center gap-2 md:gap-3 px-4 py-2 md:px-4 md:py-2 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 backdrop-blur-xl rounded-full shadow-xl border-2 border-teal-500/50">
        <div className="flex -space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-4 h-4 md:w-4 md:h-4 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-teal-500" />
          ))}
        </div>
        <span className="text-white text-sm md:text-[10px] font-semibold">5.3T+ Unsecured Credit Offchain, Money Market</span>
      </div>
    </motion.div>
  );
}

// Desktop-only versions - redesigned based on original Monaris codebase with larger sizes
function DesktopLeftSection() {
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
          <div className="px-4 py-2 lg:px-5 lg:py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full text-white text-sm lg:text-base font-semibold shadow-lg whitespace-nowrap">
            Stablecoin income in
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 -top-4 w-[calc(100%+32px)] h-[calc(100%+32px)] opacity-10">
            <div className="grid grid-cols-6 gap-1 p-2">
              {[...Array(24)].map((_, i) => (
                <UserIcon key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-teal-600" />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl border-2 border-teal-400 relative z-10">
            <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4 text-center" style={{ fontWeight: 800 }}>
              Stablecoin Users & Treasuries
            </h3>
            <div className="grid grid-cols-2 gap-2 lg:gap-3">
              {users.map((user, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-lg lg:rounded-xl p-3 lg:p-4 border-2 border-teal-400 hover:border-teal-500 transition-all"
                >
                  <user.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 text-teal-600" />
                  <p className="text-base lg:text-lg text-slate-900 text-center leading-snug font-bold">{user.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 lg:mt-5 space-y-1.5 lg:space-y-2">
          <p className="text-base lg:text-lg text-slate-900 font-bold mb-2">Off-chain sources:</p>
          {offchainSources.map((source, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-lg lg:rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 border-2 border-slate-300 shadow-sm"
            >
              <p className="text-base lg:text-lg text-slate-900 font-bold">{source}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function DesktopRightSection() {
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
      className="absolute right-[-30%] top-[20%]"
      style={{ transform: "translateZ(30px)" }}
      {...fadeInUp}
      transition={{ delay: 0.5 }}
    >
      <div className="space-y-4 lg:space-y-5">
        <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl border-2 border-teal-300">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4 text-center" style={{ fontWeight: 800 }}>
            Strategy Venues (on-chain)
          </h3>
          <div className="grid grid-cols-2 gap-2 lg:gap-3">
            {strategies.map((strategy, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-lg lg:rounded-xl px-3 py-2 lg:px-4 lg:py-3 border-2 border-teal-400"
              >
                <p className="text-base lg:text-lg text-slate-900 text-center font-bold">{strategy}</p>
              </div>
            ))}
          </div>
          <p className="text-base lg:text-lg text-slate-900 text-center mt-3 font-bold">Curated, market-neutral strategies</p>
          
          <div className="flex justify-center gap-2 lg:gap-3 mt-3 lg:mt-4">
            {chains.map((chain, idx) => (
              <div 
                key={idx}
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <span className="text-xs lg:text-sm font-bold text-slate-500">{chain}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl border-2 border-teal-200">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-3 lg:mb-4 text-center" style={{ fontWeight: 800 }}>
            Payments & Uses
          </h3>
          <div className="space-y-2 lg:space-y-3">
            {payments.map((payment, idx) => (
              <div 
                key={idx}
                className="flex items-center gap-2 lg:gap-3 bg-white rounded-lg lg:rounded-xl px-3 py-2 lg:px-4 lg:py-3 border-2 border-teal-300"
              >
                <payment.icon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-600" />
                <p className="text-base lg:text-lg text-slate-900 font-bold">{payment.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <div className="px-4 py-2 lg:px-5 lg:py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full shadow-lg">
            <span className="text-white text-sm lg:text-base font-semibold">Humans & AI agents act within policies</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Desktop Center Section - redesigned with larger sizes
function DesktopCenterSection() {
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
      color: "from-cyan-500 to-teal-500",
      badge: null
    },
    {
      title: "Income-Backed Credit Engine",
      subtitle: "Credit limits from stablecoin income + risk bands",
      badge: "Borrow against the future",
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "Treasury Autopilot",
      subtitle: "Cash - Buffer - Strategies - Rebalancing",
      color: "from-cyan-500 to-teal-500",
      badge: null
    },
    {
      title: "Storm Shield Risk OS",
      subtitle: "Progressive derisking - No cliff liquidations",
      color: "from-cyan-500 to-teal-500",
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
        <div className="bg-gradient-to-br from-slate-800 via-teal-900/20 to-slate-800 rounded-3xl lg:rounded-4xl p-6 lg:p-8 shadow-2xl border-2 border-teal-500/30 min-w-[520px] lg:min-w-[680px]">
          <div className="flex items-center justify-center gap-3 lg:gap-4 mb-6 lg:mb-8">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center overflow-hidden">
              <img src="/mon-s.png" alt="Monaris" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-white font-bold text-2xl lg:text-3xl" style={{ fontWeight: 900 }}>Monaris Core</h2>
              <p className="text-teal-300 text-base lg:text-lg font-bold">Autopilot Money OS</p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 lg:gap-3 mb-6 lg:mb-8">
            {modules.map((module, idx) => (
              <div 
                key={idx}
                className="relative bg-slate-800/80 rounded-xl lg:rounded-2xl p-3 lg:p-4 border-2 border-teal-500/20 hover:border-teal-500/40 transition-all group"
              >
                <div className={`w-full h-1.5 lg:h-2 rounded-full bg-gradient-to-r ${module.color} mb-2 lg:mb-3`} />
                <h4 className="text-white font-bold text-sm lg:text-base mb-1 leading-snug" style={{ fontWeight: 700 }}>{module.title}</h4>
                <p className="text-slate-200 text-sm lg:text-base leading-snug font-bold">{module.subtitle}</p>
                {module.badge && (
                  <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 px-2 py-1 lg:px-2.5 lg:py-1.5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full">
                    <span className="text-[10px] lg:text-xs font-bold text-white whitespace-nowrap">{module.badge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-slate-800/80 rounded-xl lg:rounded-2xl p-3 lg:p-4 mb-4 lg:mb-5 border-2 border-teal-500/30">
            <div className="flex items-center justify-between text-base lg:text-lg text-white font-bold">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-xs lg:text-sm">2</span>
                <span>Computes credit limit</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-400" />
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-xs lg:text-sm">3</span>
                <span>Allocates by policy</span>
              </div>
              <ArrowRightIcon className="w-5 h-5 lg:w-6 lg:h-6 text-teal-400" />
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-teal-500/30 text-teal-300 flex items-center justify-center font-bold text-xs lg:text-sm">4</span>
                <span>Risk monitoring</span>
                <ShieldIcon className="w-4 h-4 lg:w-5 lg:h-5 text-teal-400" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="px-4 py-2 lg:px-5 lg:py-3 bg-gradient-to-r from-teal-500/30 to-teal-600/30 rounded-full border-2 border-teal-400/50">
              <span className="text-teal-200 text-sm lg:text-base font-semibold">Autopilot treasury: Cash - Buffer - Strategies</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DesktopFlowArrows() {
  return (
    <>
      <motion.div 
        className="absolute left-[22%] top-[32%]"
        style={{ transform: "translateZ(50px)" }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="w-20 lg:w-32 h-1.5 lg:h-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] lg:border-l-[10px] border-l-teal-600 border-y-[4px] lg:border-y-[5px] border-y-transparent" />
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full">
            <span className="text-white font-bold text-sm lg:text-base">1</span>
            <span className="text-white text-xs lg:text-sm whitespace-nowrap">Income & deposits</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="absolute right-[12%] top-[28%]"
        style={{ transform: "translateZ(50px)" }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 lg:gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full">
            <span className="text-white font-bold text-sm lg:text-base">5</span>
            <span className="text-white text-xs lg:text-sm whitespace-nowrap">Capital to strategies & use</span>
          </div>
          <div className="w-16 lg:w-28 h-1.5 lg:h-2 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] lg:border-l-[10px] border-l-teal-600 border-y-[4px] lg:border-y-[5px] border-y-transparent" />
          </div>
        </div>
      </motion.div>
    </>
  );
}

function DesktopScaleBadge() {
  return (
    <motion.div 
      className="absolute left-1/2 top-[8%] -translate-x-1/2"
      style={{ transform: "translateX(-50%) translateZ(60px)" }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <div className="flex items-center gap-3 lg:gap-4 px-5 py-2.5 lg:px-6 lg:py-3 bg-gradient-to-r from-slate-800 via-teal-900/40 to-slate-800 rounded-full shadow-xl border-2 border-teal-500/50">
        <div className="flex -space-x-1">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-teal-500 shadow-lg" />
          ))}
        </div>
        <span className="text-white text-sm lg:text-base font-semibold">5.3 Trillion Unsecured Credit Offchain, Money Market</span>
      </div>
    </motion.div>
  );
}

// Desktop-only version of BottomSection - matches original with larger sizes
function DesktopBottomSection() {
  const services = [
    { icon: DatabaseIcon, label: "On-chain data indexers & oracles" },
    { icon: GlobeIcon, label: "Off-chain data connectors (banks, payroll, bureaus)" },
    { icon: ShieldIcon, label: "Credit bureaus / risk data" },
    { icon: BotIcon, label: "AI orchestration layer (signals to actions)" },
    { icon: ChartIcon, label: "Monitoring, analytics & reporting" },
  ];

  return (
    <motion.div 
      className="absolute left-1/2 bottom-[-35%] -translate-x-1/2 w-[65%]"
      style={{ transform: "translateX(-50%) translateZ(10px)" }}
      {...fadeInUp}
      transition={{ delay: 0.7 }}
    >
      <div className="bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-xl border-2 border-teal-200">
        <div className="flex items-center justify-between mb-3 lg:mb-4">
          <h3 className="text-lg lg:text-xl font-bold text-slate-900" style={{ fontWeight: 800 }}>Data, AI & Integrations</h3>
          <div className="flex items-center gap-2 lg:gap-3 px-3 py-1.5 lg:px-4 lg:py-2 bg-gradient-to-r from-teal-50 to-teal-100 rounded-full border-2 border-teal-400">
            <span className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white flex items-center justify-center font-bold text-xs lg:text-sm">6</span>
            <span className="text-base lg:text-lg text-teal-900 font-bold">Continuous data feedback for credit, risk & automation</span>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 lg:gap-4">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="relative bg-white rounded-xl lg:rounded-2xl p-3 lg:p-4 border-2 border-teal-300 shadow-sm hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="absolute -top-2 lg:-top-3 left-1/2 -translate-x-1/2 w-0.5 h-8 lg:h-12 bg-gradient-to-t from-teal-400/50 to-transparent" />
              <service.icon className="w-6 h-6 lg:w-8 lg:h-8 mx-auto mb-2 lg:mb-3 text-teal-600" />
              <p className="text-base lg:text-lg text-slate-900 text-center leading-snug font-bold">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
