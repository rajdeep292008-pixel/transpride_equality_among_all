export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-label="About transgender identity">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Understanding <span className="text-gradient-pride">Transgender</span> Identity
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Knowledge is the first step toward empathy and inclusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 reveal">
            <div className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">What does Transgender mean?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A transgender person is someone whose gender identity differs from the sex they were assigned at birth.
                Gender identity is a deeply personal sense of being male, female, or non-binary — it is not a choice,
                a phase, or a mental illness. It is a natural part of human diversity.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">Gender Identity vs. Sexual Orientation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Gender identity is about who you <em>are</em>. Sexual orientation is about who you are <em>attracted to</em>.
                They are different things. A transgender person can be straight, gay, bisexual, or any other orientation — just like anyone else.
              </p>
            </div>
          </div>

          <div className="space-y-6 reveal">
            <div className="p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-3">Common Misconceptions</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <span className="text-pride-pink font-bold text-lg">✗</span>
                  <span>"It's just a phase" — Gender identity is consistent and deeply felt from a young age.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-pride-pink font-bold text-lg">✗</span>
                  <span>"They're confused" — Transgender people have a clear understanding of their identity.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-pride-pink font-bold text-lg">✗</span>
                  <span>"It's a Western concept" — Transgender people exist across all cultures and throughout history, including India's Hijra community.</span>
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl gradient-pride-soft">
              <p className="text-surface-foreground font-medium text-lg leading-relaxed italic">
                "The beauty of being human is in our diversity. Respect costs nothing, but it means everything."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
