import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const duneEmbeds = [
  {
    title: "Cumulative Volume Since Launch",
    src: "https://dune.com/embeds/6983972/10901888",
  },
  {
    title: "Recent Volume Share",
    src: "https://dune.com/embeds/6984132/10902045",
  },
];

export const MonarisTractionSection = () => {
  return (
    <section id="traction" className="bg-[#f3f3f3] px-5 pt-6 pb-12">
      <div className="mx-auto max-w-[2050px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:mb-[4.5rem]"
        >
          <h2 className="text-center text-4xl font-medium tracking-tight text-black underline decoration-[2px] underline-offset-[10px] sm:text-5xl lg:text-[56px]">
            Monaris Overview
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
          {duneEmbeds.map((embed, index) => (
            <motion.div
              key={embed.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="overflow-hidden rounded-[18px] bg-[#070812] shadow-[0_12px_32px_-18px_rgba(0,0,0,0.7)]"
            >
              <iframe
                title={embed.title}
                src={embed.src}
                className="w-full border-0 bg-[#070812]"
                style={{ height: "clamp(420px, 42vw, 700px)" }}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <a
            href="https://dune.com/supplychain/monaris-co?utm_source=share&utm_medium=copy&utm_campaign=dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#0b0b12] px-[18px] py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#171722]"
          >
            View full dashboard
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
