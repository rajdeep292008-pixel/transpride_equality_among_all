import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-pride-blue/10 text-pride-blue mb-6">
            🏳️‍⚧️ Transgender Awareness
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight animate-fade-up-delay-1">
          <span className="text-gradient-pride">Equality</span>{" "}
          <span className="text-foreground">Has No Gender</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up-delay-2">
          Every person deserves to live with dignity, respect, and the freedom to be who they truly are.
          Together, we can build a world where gender identity is celebrated, not feared.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Button variant="hero" size="xl" asChild>
            <a href="#about">Learn More</a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#get-involved">Support Now</a>
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
