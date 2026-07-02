import gesim from "@/assets/monaris/testimonials/gesim.png";
import founderRecurring from "@/assets/monaris/testimonials/founder-recurring.png";
import founderStablecoin from "@/assets/monaris/testimonials/founder-stablecoin.png";
import financeLead from "@/assets/monaris/testimonials/finance-lead.png";
import operator from "@/assets/monaris/testimonials/operator.png";

export interface Testimonial {
  n: string;
  r: string;
  img: string;
  q: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    n: "Gesim",
    r: "CEO",
    img: gesim,
    q: "Would love to use Monaris for automated treasury and one-click private payments. It feels like the missing financial layer for stablecoin businesses.",
  },
  {
    n: "Early-stage founder",
    r: "Business with recurring volume",
    img: founderRecurring,
    q: "I don’t want competitors or customers seeing how much revenue my business is generating, but I still need credit backed by that cashflow. Monaris solves both — private one-click payments today, and cashflow-backed credit on top.",
  },
  {
    n: "Founder",
    r: "Stablecoin-native business",
    img: founderStablecoin,
    q: "Stablecoin payments are fast, but they don’t automatically help us access credit. Monaris changes that by turning our recurring cashflow into a private credit signal we can actually use.",
  },
  {
    n: "Finance lead",
    r: "Digital services company",
    img: financeLead,
    q: "Our biggest concern is exposing revenue, customers, and payment activity on public rails. Monaris gives us the privacy we need while still making our cashflow useful for underwriting.",
  },
  {
    n: "Operator",
    r: "Early-stage recurring revenue business",
    img: operator,
    q: "Monaris feels like the missing layer between payments and credit. We can receive money, keep activity private, and use our business cashflow to unlock working capital when needed.",
  },
];

export const TERMS = [30, 60, 90];

export const DOCS_URL = "https://docs.monaris.co";
export const SITE_URL = "https://www.monaris.co";
export const X_URL = "https://x.com/monaris_fi";
