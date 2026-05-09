import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { WorksSection } from "@/components/WorksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-8">
          <HeroSection />
          <IntroSection />
          <WorksSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
