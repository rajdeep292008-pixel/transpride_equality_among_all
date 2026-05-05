import { Button } from "@/components/ui/button";

const actions = [
  {
    icon: "❤️",
    title: "Donate",
    description: "Support organizations working for transgender rights. Even a small contribution can provide shelter, healthcare, or legal aid.",
  },
  {
    icon: "🤝",
    title: "Volunteer",
    description: "Join local NGOs, participate in community events, or offer your professional skills to trans support organizations.",
  },
  {
    icon: "📢",
    title: "Spread Awareness",
    description: "Share information on social media, have conversations with friends and family, and challenge transphobia when you see it.",
  },
  {
    icon: "🗳️",
    title: "Advocate",
    description: "Write to your representatives, support inclusive policies, and participate in pride events and awareness campaigns.",
  },
];

export function GetInvolvedSection() {
  return (
    <section id="get-involved" className="py-20 sm:py-28" aria-label="Get involved">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action banner */}
        <div className="reveal rounded-3xl gradient-pride animate-gradient p-10 sm:p-14 text-center mb-16 shadow-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Take Action Now
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Change doesn't happen by watching. It happens when people like you decide to act.
            Every voice, every action, every rupee makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="bg-background text-foreground hover:bg-background/90" asChild>
              <a href="https://humsafar.org" target="_blank" rel="noopener noreferrer">Donate Now</a>
            </Button>
            <Button variant="hero-outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20" asChild>
              <a href="#contact">Join the Movement</a>
            </Button>
          </div>
        </div>

        {/* Ways to help */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 text-center"
            >
              <span className="text-4xl mb-4 block">{action.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{action.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{action.description}</p>
            </div>
          ))}
        </div>

        {/* Social share */}
        <div className="reveal mt-12 text-center">
          <p className="text-muted-foreground mb-4">Share this page and spread awareness</p>
          <div className="flex items-center justify-center gap-3">
            {["Twitter", "Facebook", "WhatsApp", "LinkedIn"].map((platform) => (
              <button
                key={platform}
                className="px-4 py-2 text-sm font-medium rounded-full bg-accent text-accent-foreground hover:bg-pride-blue/10 hover:text-pride-blue transition-colors"
                aria-label={`Share on ${platform}`}
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
