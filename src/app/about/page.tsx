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
        <div className="w-full px-8 lg:px-16">
          <AboutContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
