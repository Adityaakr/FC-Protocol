import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/img-fav.png";

const navItems = [
  { label: "Product", href: "#product" },
  { label: "Treasury & Credit", href: "#melt" },
  { label: "Risk Layer", href: "#risk" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img 
              src={logoImage} 
              alt="Monaris Logo" 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl object-contain"
            />
            <div className="flex flex-col">
              <span className="relative inline-block font-brand font-medium text-xl lg:text-2xl text-black tracking-tight">
                Monaris
                <span className="pointer-events-none absolute -bottom-1 left-0 right-0 h-1 bg-[linear-gradient(90deg,#6ede3f_0%,#53c72f_60%,#3fa92b_100%)] rounded-full blur-[0.6px] opacity-85" />
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" disabled className="cursor-not-allowed">
              Docs (Coming Soon)
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-500/90 hover:to-lime-500/90 text-white shadow-md"
              onClick={() => window.open('https://form.typeform.com/to/c6vpCpMA', '_blank')}
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="outline" size="sm" className="w-full" disabled>
                Docs (Coming Soon)
              </Button>
              <Button 
                size="sm" 
                className="w-full bg-gradient-to-r from-emerald-500 to-lime-500 hover:from-emerald-500/90 hover:to-lime-500/90 text-white"
                onClick={() => window.open('https://form.typeform.com/to/c6vpCpMA', '_blank')}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
