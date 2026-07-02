import { ArrowRight, BookOpen, FileText, Globe, Twitter, Zap } from "lucide-react";
import { DOCS_URL, SITE_URL, X_URL } from "./data";

const Footer = () => (
  <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-14">
    <div className="relative overflow-hidden rounded-[32px] p-8 sm:p-12 pb-0" style={{ background: "linear-gradient(180deg,#E9FC66,#DBF227 55%,#C8FF00)" }}>
      {/* top: statement + actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-ink/60">
            <Zap className="w-3.5 h-3.5" />Private. Programmable. Instant.
          </div>
          <h2 className="disp mt-3 text-4xl sm:text-5xl font-bold leading-[1.05] text-ink">
            Your cashflow is ready
            <br />
            to <span className="text-ink/50">work for you.</span>
          </h2>
        </div>
        <div className="lg:col-span-5 flex flex-col lg:items-end gap-5 lg:text-right">
          <p className="text-[14.5px] leading-relaxed text-ink/65 max-w-sm">
            Turn receivables into instant liquidity with financial-grade privacy, and build credit with every settlement.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#top" className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
              Launch app{" "}
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-volt">
                <ArrowRight className="w-3 h-3 text-[#0d0d0d]" />
              </span>
            </a>
            <a href={DOCS_URL} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white/75 px-5 py-2.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">
              <BookOpen className="w-4 h-4" /> Read the docs
            </a>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#131720]/15 my-9" />

      {/* link columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-ink/50 mb-4">Product</h4>
          <ul className="space-y-3 text-[14px] font-medium text-ink/70">
            <li><a href="#calculator" className="hover:text-ink transition-colors">Advance calculator</a></li>
            <li><a href="#credit" className="hover:text-ink transition-colors">Credit engine</a></li>
            <li><a href="#advantage" className="hover:text-ink transition-colors">Selective disclosure</a></li>
            <li><a href="#credit" className="hover:text-ink transition-colors">Monaris Score</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-ink/50 mb-4">Resources</h4>
          <ul className="space-y-3 text-[14px] font-medium text-ink/70">
            <li><a href={DOCS_URL} className="hover:text-ink transition-colors">Documentation</a></li>
            <li><a href={DOCS_URL} className="hover:text-ink transition-colors">API reference</a></li>
            <li><a href="#treasury" className="hover:text-ink transition-colors">How it works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-ink/50 mb-4">Company</h4>
          <ul className="space-y-3 text-[14px] font-medium text-ink/70">
            <li><a href={SITE_URL} className="hover:text-ink transition-colors">About</a></li>
            <li><a href={X_URL} className="hover:text-ink transition-colors">X / Twitter</a></li>
            <li><a href="#top" className="hover:text-ink transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-ink/50 mb-4">We'd love to hear from you</h4>
          <a href="mailto:hello@monaris.co" className="text-[17px] font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink transition-colors">
            hello@monaris.co
          </a>
          <div className="mt-5 flex gap-2.5">
            <a href={X_URL} aria-label="X" className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-ink/70 hover:text-ink transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={SITE_URL} aria-label="Website" className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-ink/70 hover:text-ink transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href={DOCS_URL} aria-label="Docs" className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center text-ink/70 hover:text-ink transition-colors">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* giant wordmark, cropped at bottom */}
      <div className="mt-12 overflow-hidden select-none" style={{ fontSize: "clamp(52px,16.5vw,236px)", height: ".66em" }} aria-hidden="true">
        <div className="disp font-bold text-ink text-center whitespace-nowrap" style={{ lineHeight: 1, letterSpacing: "-.02em" }}>Monaris</div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-[#131720]/15 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[12.5px] text-ink/60">© 2026 Monaris, all rights reserved.</p>
        <p className="text-[11.5px] text-ink/50 font-mono tracking-wide">Built by Monaris · powered by Payy</p>
      </div>
    </div>
  </footer>
);

export default Footer;
