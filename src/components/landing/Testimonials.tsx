import { TESTIMONIALS, Testimonial } from "./data";

const VerifiedBadge = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#7CB518" aria-hidden="true">
    <path d="M9.6 3.2a6 6 0 0 1-.5.4c-.3.2-.6.3-1 .4l-.6.07c-.8.06-1.2.1-1.5.2a2.7 2.7 0 0 0-1.66 1.66c-.12.33-.15.73-.2 1.53l-.07.63a2.7 2.7 0 0 1-.4.98l-.4.5c-.52.6-.78.9-.94 1.24a2.7 2.7 0 0 0 0 2.34c.16.32.42.63.94 1.24l.4.5c.2.3.33.63.4.98l.07.63c.06.8.1 1.2.2 1.54a2.7 2.7 0 0 0 1.66 1.65c.33.12.73.15 1.53.21l.63.07c.35.07.69.21.98.4l.5.4c.6.53.9.79 1.24.94.74.35 1.6.35 2.34 0 .32-.15.63-.41 1.24-.94l.5-.4c.3-.2.63-.33.98-.4l.63-.07c.8-.06 1.2-.1 1.54-.21a2.7 2.7 0 0 0 1.65-1.65c.12-.34.15-.74.21-1.54l.07-.63c.07-.35.21-.69.4-.98l.4-.5c.53-.61.79-.92.94-1.24.35-.74.35-1.6 0-2.34-.15-.32-.41-.63-.94-1.24l-.4-.5a2.7 2.7 0 0 1-.4-.98l-.07-.63c-.06-.8-.1-1.2-.21-1.53a2.7 2.7 0 0 0-1.65-1.66c-.34-.12-.74-.15-1.54-.2l-.63-.07a2.7 2.7 0 0 1-.98-.4l-.5-.4c-.61-.52-.92-.78-1.24-.94a2.7 2.7 0 0 0-2.34 0zm6.8 6.66a.8.8 0 0 0-1.15-1.15l-4.85 4.85-1.6-1.6a.8.8 0 0 0-1.15 1.15l2.17 2.17a.8.8 0 0 0 1.15 0z" />
  </svg>
);

/* mr-* instead of container gap: with per-card margins the track's -50% loop
   pitch is exact, avoiding the prototype's half-gap seam jump */
const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <article className="shrink-0 w-[280px] sm:w-[360px] md:w-[400px] mr-4 sm:mr-5 rounded-2xl bg-white bg-grad card-soft p-5">
    <div className="flex items-center gap-3">
      <img src={t.img} alt={t.n} className="h-9 w-9 rounded-full object-cover" loading="lazy" />
      <div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-ink">{t.n}</span>
          <VerifiedBadge />
        </div>
        <p className="text-xs text-neutral-500">{t.r}</p>
      </div>
    </div>
    <p className="mt-4 text-sm sm:text-[15px] text-neutral-600 tracking-tight">{t.q}</p>
  </article>
);

const MarqueeRow = ({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) => (
  <div className={`flex will-change-transform w-max ${reverse ? "mq-r" : "mq-l"}`}>
    {items.map((t, i) => (
      <TestimonialCard key={i} t={t} />
    ))}
    <div aria-hidden="true" className="flex">
      {items.map((t, i) => (
        <TestimonialCard key={i} t={t} />
      ))}
    </div>
  </div>
);

const ROW_1 = TESTIMONIALS.slice(0, 3);
const ROW_2 = [...TESTIMONIALS.slice(3, 5), ...TESTIMONIALS.slice(0, 1)];

const Testimonials = () => (
  <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
    <div className="rounded-3xl bg-white bg-grad card-soft p-6 sm:p-8 relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl" style={{ background: "rgba(200,255,0,.18)" }} />
      <div className="text-center mb-10 relative">
        <div className="flex items-center justify-between text-[13px] sm:text-sm font-medium uppercase tracking-tight text-volt-text">
          <span>Testimonials</span>
          <span>(01)</span>
        </div>
        <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-[#131720]/15 to-transparent" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-3">
          <h2 className="disp text-3xl sm:text-4xl md:text-5xl font-bold text-left text-ink">Trusted by stablecoin teams</h2>
          <p className="text-sm sm:text-base text-neutral-500 text-left max-w-[42ch]">
            Real feedback from businesses using Monaris to finance receivables and settle privately.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-paper bg-grad">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-paper to-transparent z-10" />
        <div className="py-6 sm:py-7">
          <MarqueeRow items={ROW_1} />
        </div>
        <div className="h-px w-full bg-[#131720]/10" />
        <div className="py-6 sm:py-7">
          <MarqueeRow items={ROW_2} reverse />
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
