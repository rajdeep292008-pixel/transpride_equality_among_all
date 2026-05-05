import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ChallengesSection } from "@/components/ChallengesSection";
import { StoriesSection } from "@/components/StoriesSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { GetInvolvedSection } from "@/components/GetInvolvedSection";
import { RightsSection } from "@/components/RightsSection";
import { AllySection } from "@/components/AllySection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "TransPride – Equality Has No Gender | Transgender Awareness" },
      { name: "description", content: "Promoting equality, dignity, and inclusion for transgender individuals. Learn, support, and take action for transgender rights in India and beyond." },
      { property: "og:title", content: "TransPride – Equality Has No Gender" },
      { property: "og:description", content: "Promoting equality, dignity, and inclusion for transgender individuals." },
    ],
  }),
});

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ChallengesSection />
        <StoriesSection />
        <ResourcesSection />
        <GetInvolvedSection />
        <RightsSection />
        <AllySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
