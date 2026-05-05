const organizations = [
  {
    name: "Naz Foundation India",
    description: "Works on HIV/AIDS and LGBTQ+ rights through advocacy, legal support, and community outreach.",
    url: "https://nazindia.org",
    type: "LGBTQ+ NGO",
  },
  {
    name: "Humsafar Trust",
    description: "One of India's oldest LGBTQ+ organizations, providing health services, advocacy, and community support.",
    url: "https://humsafar.org",
    type: "Support Organization",
  },
  {
    name: "Transgender India",
    description: "A community-led platform offering resources, networking, and support for trans individuals across India.",
    url: "https://transgenderindia.com",
    type: "Community Platform",
  },
  {
    name: "iCall (TISS)",
    description: "Free psychosocial helpline by Tata Institute of Social Sciences for mental health support.",
    url: "https://icallhelpline.org",
    type: "Mental Health",
  },
];

const resourceCategories = [
  {
    icon: "🧠",
    title: "Mental Health Support",
    items: ["Vandrevala Foundation Helpline: 1860-2662-345", "iCall: 9152987821", "AASRA: 91-22-27546669"],
  },
  {
    icon: "⚖️",
    title: "Legal Help",
    items: [
      "National Legal Services Authority (NALSA)",
      "Human Rights Law Network (HRLN)",
      "Lawyers Collective",
    ],
  },
  {
    icon: "📚",
    title: "Education & Employment",
    items: [
      "IGNOU inclusive education programs",
      "Keshav Suri Foundation — skill development",
      "Pride Circle — LGBTQ+ inclusive employers",
    ],
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="py-20 sm:py-28 bg-surface" aria-label="Resources and support">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Resources & <span className="text-gradient-pride">Support</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            You are not alone. Here are organizations and resources that can help.
          </p>
        </div>

        {/* Organizations */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {organizations.map((org, i) => (
            <a
              key={i}
              href={org.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group p-6 rounded-2xl bg-card border shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-pride-blue transition-colors">
                  {org.name}
                </h3>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pride-blue/10 text-pride-blue whitespace-nowrap">
                  {org.type}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{org.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-pride-pink group-hover:underline">
                Visit website →
              </span>
            </a>
          ))}
        </div>

        {/* Resource categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {resourceCategories.map((cat, i) => (
            <div key={i} className="reveal p-6 rounded-2xl bg-card border shadow-sm">
              <span className="text-3xl mb-4 block">{cat.icon}</span>
              <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="text-sm text-muted-foreground flex gap-2 items-start">
                    <span className="text-pride-blue mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
