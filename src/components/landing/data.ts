export interface Testimonial {
  n: string;
  r: string;
  av: string;
  q: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { n: "Michael Chen", r: "CEO, Northwind", av: "#C8FF00", q: "Monaris let us finance a six-figure invoice without leaking a single number onchain. Game-changer for treasury." },
  { n: "Emily Rodriguez", r: "Finance lead, Atlas Freight", av: "#bdb2ff", q: "Selective disclosure finally makes onchain invoicing usable. Our financier saw exactly what they needed." },
  { n: "David Kim", r: "Ops, Cobalt", av: "#7Fb5ff", q: "Advances hit our wallet in seconds and auto-repaid from the settlement waterfall. Zero reconciliation." },
  { n: "Sarah Nguyen", r: "CFO, Vela Logistics", av: "#9EE06A", q: "We settled $214K privately on Payy in under two seconds. This is what PayFi should feel like." },
  { n: "Dmitri Vasquez", r: "LP, Meridian Capital", av: "#F59E0B", q: "Real receivables, privacy-safe risk views, 8% yield. The first onchain credit I would actually underwrite." },
  { n: "Aria Donnelly", r: "Risk, Orenda", av: "#C8FF00", q: "The Monaris Score is verifiable without exposing the borrower. That is the unlock for private credit." },
];

export const TERMS = [30, 60, 90];

export const DOCS_URL = "https://docs.monaris.co";
export const SITE_URL = "https://www.monaris.co";
export const X_URL = "https://x.com/monaris_fi";
