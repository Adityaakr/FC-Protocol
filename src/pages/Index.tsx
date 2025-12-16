import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { MeltSection } from "@/components/sections/MeltSection";
import { MonarisArchitectureSection } from "@/components/sections/MonarisArchitectureSection";
import { RiskSection } from "@/components/sections/RiskSection";
// import { UseCasesSection } from "@/components/sections/UseCasesSection";
// import { BuildersSection } from "@/components/sections/BuildersSection";
import { FlexCreditBanner as MonarisBanner } from "@/components/sections/FlexCreditBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <MeltSection />
        <MonarisArchitectureSection />
        <RiskSection />
        {/* <UseCasesSection />
        <BuildersSection /> */} 

      </main>
      <MonarisBanner />
    </div>
  );
};

export default Index;
