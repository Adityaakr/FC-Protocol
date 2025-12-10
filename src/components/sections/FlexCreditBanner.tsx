import { motion } from "framer-motion";
import { Twitter, Github, FileText } from "lucide-react";

export const FlexCreditBanner = () => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Yellow/lime green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#c4f542] via-[#d4f76e] to-[#e0f99a]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center overflow-hidden"
        >
          <h2 className="text-[3.5rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-serif font-light italic leading-none mb-8 text-black/50 break-words" style={{ fontFamily: 'Georgia, "Times New Roman", serif', letterSpacing: '0.02em' }}>
            Monaris
          </h2>
          
          {/* Footer Links */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-400 transition-colors cursor-not-allowed opacity-60"
              aria-label="Docs"
              onClick={(e) => e.preventDefault()}
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm font-medium">Docs (Coming Soon)</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-400 transition-colors cursor-not-allowed opacity-60"
              aria-label="GitHub"
              onClick={(e) => e.preventDefault()}
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="https://x.com/monaris_fi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
              <span className="text-sm font-medium">Twitter</span>
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-gray-600 mt-6">© Monaris, 2025.</p>
        </motion.div>
      </div>
    </section>
  );
};
