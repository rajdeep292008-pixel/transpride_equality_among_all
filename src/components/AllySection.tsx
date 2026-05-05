const tips = [
  { emoji: "🗣️", tip: "Use Correct Pronouns", detail: "Always use the pronouns a person asks you to use. If unsure, politely ask. It shows respect." },
  { emoji: "👂", tip: "Listen & Learn", detail: "Listen to trans people's experiences without judgment. Educate yourself rather than expecting them to teach you." },
  { emoji: "🚫", tip: "Challenge Transphobia", detail: "Speak up when you hear transphobic jokes or comments, even when no trans person is present." },
  { emoji: "💬", tip: "Use Inclusive Language", detail: "Avoid deadnaming (using someone's birth name). Use gender-neutral language when you don't know someone's gender." },
  { emoji: "📖", tip: "Educate Others", detail: "Share resources, have conversations, and help others understand gender identity in a respectful way." },
  { emoji: "🤗", tip: "Show Unconditional Support", detail: "If someone comes out to you, thank them for trusting you. Affirm their identity and offer your support." },
];

export function AllySection() {
  return (
    <section id="ally" className="py-20 sm:py-28" aria-label="How to be an ally">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            How to Be an <span className="text-gradient-pride">Ally</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Small actions create big change. Here's how you can make a difference.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((item, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{item.emoji}</span>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.tip}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
