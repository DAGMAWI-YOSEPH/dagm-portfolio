import { AboutContent } from "@/components/AboutContent";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "About — Dagm. Y",
  description: "Learn more about Dagmawi Yoseph — Top Rated Freelance WordPress Developer from Ethiopia.",
};

export default function AboutPage() {
  return (
    <>
      <main className="flex-1">
        <div className="max-w-[1200px] mx-auto px-8">
          <AboutContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
