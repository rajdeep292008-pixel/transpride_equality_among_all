import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the difference between sex and gender?",
    a: "Sex refers to biological characteristics (chromosomes, hormones, anatomy), while gender is a social and personal identity. They don't always align, and that's perfectly natural.",
  },
  {
    q: "Is being transgender a mental illness?",
    a: "No. The World Health Organization declassified being transgender as a mental disorder in 2019. Gender dysphoria (distress from the mismatch) may need support, but being trans itself is not an illness.",
  },
  {
    q: "What does 'transition' mean?",
    a: "Transition can be social (changing name, pronouns, appearance), legal (updating documents), or medical (hormone therapy, surgery). Not all trans people undergo medical transition — each person's journey is unique.",
  },
  {
    q: "How should I address a transgender person?",
    a: "Use the name and pronouns they share with you. If unsure, politely ask: 'What pronouns do you use?' Never use their birth name (deadname) without permission.",
  },
  {
    q: "Are transgender people protected by Indian law?",
    a: "Yes. The Transgender Persons (Protection of Rights) Act, 2019 provides legal recognition and protection against discrimination. The NALSA judgment (2014) also affirmed fundamental rights.",
  },
  {
    q: "What is the Hijra community in India?",
    a: "Hijras are a traditionally recognized third gender community in South Asia with a history spanning thousands of years. While some Hijras identify as transgender, the community has its own distinct cultural identity and traditions.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-surface" aria-label="Frequently asked questions">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient-pride">Questions</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Honest answers to common questions about gender identity.
          </p>
        </div>

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border bg-card px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
