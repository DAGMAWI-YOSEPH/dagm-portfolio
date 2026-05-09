import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { WorksSection } from "@/components/WorksSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="w-full px-8 lg:px-16">
          <HeroSection />
          <IntroSection />
          <WorksSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
