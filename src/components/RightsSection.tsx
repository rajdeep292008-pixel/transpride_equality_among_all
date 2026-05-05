const rights = [
  {
    title: "Right to Self-Identification",
    description: "Every transgender person has the right to self-identify their gender. No surgery or medical procedure is required for legal recognition.",
  },
  {
    title: "Non-Discrimination",
    description: "Protection against discrimination in education, employment, healthcare, and access to goods and services.",
  },
  {
    title: "Right to Education",
    description: "Inclusive education without discrimination, with provisions for scholarships and support programs.",
  },
  {
    title: "Right to Healthcare",
    description: "Access to gender-affirming healthcare, insurance coverage, and HIV/AIDS treatment without discrimination.",
  },
  {
    title: "Right to Employment",
    description: "No establishment can discriminate against a transgender person in employment matters, including recruitment and promotion.",
  },
  {
    title: "Right to Residence",
    description: "Right to reside in a household, right not to be excluded from the household, and access to rehabilitation centres.",
  },
];

export function RightsSection() {
  return (
    <section id="rights" className="py-20 sm:py-28 bg-surface" aria-label="Rights and equality">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Rights & <span className="text-gradient-pride">Equality</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Know the law. Understand the rights. Protect them.
          </p>
        </div>

        {/* Key Act */}
        <div className="reveal rounded-2xl border bg-card p-8 sm:p-10 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <span className="text-3xl">⚖️</span>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Transgender Persons (Protection of Rights) Act, 2019
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This landmark Indian law recognizes the right of transgender persons to self-identify their gender,
                prohibits discrimination in education, employment, and healthcare, and provides for welfare measures.
                While it has limitations, it represents an important step toward legal recognition and protection.
              </p>
              <p className="text-sm text-pride-blue font-medium">
                Key milestone: NALSA v. Union of India (2014) — Supreme Court recognized transgender persons as the "third gender" and affirmed fundamental rights.
              </p>
            </div>
          </div>
        </div>

        {/* Rights grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rights.map((right, i) => (
            <div
              key={i}
              className="reveal p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-base font-semibold text-foreground mb-2">{right.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{right.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
