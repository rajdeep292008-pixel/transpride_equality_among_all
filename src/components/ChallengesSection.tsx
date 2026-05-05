const stats = [
  { number: "71%", label: "of transgender people in India face discrimination in employment", icon: "💼" },
  { number: "62%", label: "report being denied healthcare services", icon: "🏥" },
  { number: "50%", label: "have experienced violence or harassment", icon: "⚠️" },
  { number: "40%", label: "have attempted self-harm due to social stigma", icon: "💔" },
];

const challenges = [
  {
    title: "Workplace Discrimination",
    description: "Many transgender individuals are denied employment or face hostile work environments, pushing them into informal and unsafe jobs.",
  },
  {
    title: "Healthcare Barriers",
    description: "Access to gender-affirming healthcare, mental health services, and basic medical care remains limited and often discriminatory.",
  },
  {
    title: "Social Stigma & Family Rejection",
    description: "Many are disowned by families, leading to homelessness, poverty, and isolation from support systems.",
  },
  {
    title: "Legal & Identity Challenges",
    description: "Obtaining identity documents that match one's gender identity remains a complex, often humiliating bureaucratic process.",
  },
];

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-20 sm:py-28 bg-surface" aria-label="Challenges faced">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Challenges <span className="text-gradient-pride">They Face</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Understanding the struggles is key to driving meaningful change.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="reveal text-center p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <span className="text-3xl mb-3 block">{stat.icon}</span>
              <div className="text-3xl sm:text-4xl font-bold text-gradient-pride">{stat.number}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Challenges cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {challenges.map((challenge, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all group"
            >
              <h3 className="text-lg font-semibold text-foreground group-hover:text-pride-blue transition-colors">
                {challenge.title}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
