import { Twitter, Github, MessageCircle } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/flex.png" 
                alt="FlexCredit Logo" 
                className="w-12 h-12 rounded-xl object-contain"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-foreground">FlexCredit</span>
                <span className="text-xs text-muted-foreground -mt-1">powered by FC</span>
              </div>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#product"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Product
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Social & Copyright */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
              >
                <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-colors"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
            <div className="pt-4 space-y-1">
              <p className="text-xs text-muted-foreground">© FlexCredit / FC, 2025.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
