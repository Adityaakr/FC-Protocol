import Hero from "@/components/landing/Hero";
import Statement from "@/components/landing/Statement";
import Audiences from "@/components/landing/Audiences";
import CalculatorSection from "@/components/landing/CalculatorSection";
import CreditLayer from "@/components/landing/CreditLayer";
import Testimonials from "@/components/landing/Testimonials";
import Treasury from "@/components/landing/Treasury";
import Advantage from "@/components/landing/Advantage";
import Finale from "@/components/landing/Finale";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen overflow-x-hidden">
    <Hero />
    <main>
      <Statement />
      <Audiences />
      <CalculatorSection />
      <CreditLayer />
      <Testimonials />
      <Treasury />
      <Advantage />
      <Finale />
    </main>
    <Footer />
  </div>
);

export default Index;
