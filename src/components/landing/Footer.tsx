import { ArrowRight, BookOpen, FileText, Globe, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { DOCS_URL, SITE_URL, X_URL } from "./data";

/* Internal anchors are written as "/#x" (not "#x") so the footer also works from
   /blog/* routes: same-document fragment nav on the landing, full navigation back
   to the landing elsewhere. */

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

// Cinematic footer: looping video fills a rounded-[32px] panel (the shared
// section pattern — same container + radius as Finale), Instrument Serif display
// type, liquid-glass controls. Deep navy paints until the video loads. All copy
// and links are unchanged from the previous lime-panel footer.
const serif = { fontFamily: "'Instrument Serif', serif" };
const muted = "text-[hsl(240,4%,66%)]";

const Footer = () => (
  <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 mb-14">
    <div className="relative overflow-hidden rounded-[32px] bg-[hsl(201,100%,13%)] text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <div className="relative z-10 px-6 sm:px-12 pt-20 sm:pt-24">
      {/* statement */}
      <div className="flex flex-col items-center text-center">
        <div className="liquid-glass animate-fade-rise inline-flex items-center gap-2 rounded-full px-5 py-2 text-[11px] font-semibold uppercase tracking-[.18em]">
          <img src={logoMark} alt="" aria-hidden="true" className="h-3.5 w-3.5 invert" />
          Private. Programmable. Instant.
        </div>
        <h2
          className="animate-fade-rise mt-8 max-w-5xl text-5xl sm:text-7xl font-normal leading-[0.95] tracking-[-2.46px]"
          style={serif}
        >
          Your <em className={`not-italic ${muted}`}>cashflow</em> is ready to{" "}
          <em className={`not-italic ${muted}`}>work for you.</em>
        </h2>
        <p className={`animate-fade-rise-delay mt-8 max-w-2xl text-base sm:text-lg leading-relaxed ${muted}`}>
          Turn receivables into instant liquidity with financial-grade privacy, and build credit with every settlement.
        </p>
        <div className="animate-fade-rise-delay-2 mt-12 flex flex-wrap justify-center gap-3">
          <a
            href="/#top"
            className="liquid-glass inline-flex items-center gap-2 whitespace-nowrap rounded-full px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            Launch app{" "}
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-volt">
              <ArrowRight className="w-3 h-3 text-[#0d0d0d]" />
            </span>
          </a>
          <a
            href={DOCS_URL}
            className="liquid-glass inline-flex items-center gap-2 whitespace-nowrap rounded-full px-8 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03]"
          >
            <BookOpen className="w-4 h-4" /> Read the docs
          </a>
        </div>
      </div>

      <div className="h-px bg-white/15 my-14" />

      {/* link columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/50 mb-4">Product</h4>
          <ul className="space-y-3 text-[14px] font-medium text-white/75">
            <li><a href="/#calculator" className="hover:text-white transition-colors">Advance calculator</a></li>
            <li><a href="/#credit" className="hover:text-white transition-colors">Credit engine</a></li>
            <li><a href="/#advantage" className="hover:text-white transition-colors">Selective disclosure</a></li>
            <li><a href="/#credit" className="hover:text-white transition-colors">Monaris Score</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/50 mb-4">Resources</h4>
          <ul className="space-y-3 text-[14px] font-medium text-white/75">
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><a href={DOCS_URL} className="hover:text-white transition-colors">Documentation</a></li>
            <li><a href={DOCS_URL} className="hover:text-white transition-colors">API reference</a></li>
            <li><a href="/#treasury" className="hover:text-white transition-colors">How it works</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/50 mb-4">Company</h4>
          <ul className="space-y-3 text-[14px] font-medium text-white/75">
            <li><a href={SITE_URL} className="hover:text-white transition-colors">About</a></li>
            <li><a href={X_URL} className="hover:text-white transition-colors">X / Twitter</a></li>
            <li><a href="/#top" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold uppercase tracking-[.16em] text-white/50 mb-4">We'd love to hear from you</h4>
          <a
            href="mailto:hello@monaris.co"
            className="text-[17px] font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors"
          >
            hello@monaris.co
          </a>
          <div className="mt-5 flex gap-2.5">
            <a href={X_URL} aria-label="X" className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href={SITE_URL} aria-label="Website" className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <Globe className="w-4 h-4" />
            </a>
            <a href={DOCS_URL} aria-label="Docs" className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* giant wordmark, cropped at bottom */}
      <div className="mt-14 overflow-hidden select-none" style={{ fontSize: "clamp(52px,16.5vw,236px)", height: ".66em" }} aria-hidden="true">
        <div className="disp font-bold text-volt text-center whitespace-nowrap" style={{ lineHeight: 1, letterSpacing: "-.02em" }}>Monaris</div>
      </div>

      {/* bottom bar */}
      <div className="relative border-t border-white/15 py-5 flex justify-center items-center">
        <p className="text-[12.5px] text-white/60">© 2026 Monaris, all rights reserved.</p>
      </div>
      </div>
    </div>
  </footer>
);

export default Footer;
