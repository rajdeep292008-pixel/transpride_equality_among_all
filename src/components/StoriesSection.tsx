const stories = [
  {
    name: "Laverne Cox",
    location: "United States",
    quote: "It is revolutionary for any trans person to choose to be seen and visible in a world that tells us we should not exist.",
    role: "Emmy-Nominated Actress & Producer",
  },
  {
    name: "Joyita Mondal",
    location: "West Bengal, India",
    quote: "I want to show that transgender people can hold positions of dignity and serve their communities with integrity.",
    role: "India's First Transgender Judge",
  },
  {
    name: "Manabi Bandopadhyay",
    location: "West Bengal, India",
    quote: "Education is the strongest weapon. When you change minds, you change the world.",
    role: "India's First Transgender College Principal",
  },
  {
    name: "Shabnam Mausi",
    location: "Madhya Pradesh, India",
    quote: "If we can win an election, we can win hearts. Politics needs people who have known struggle.",
    role: "First Transgender Elected MLA in India",
  },
  {
    name: "Padmini Prakash",
    location: "Tamil Nadu, India",
    quote: "Representation matters. When a child sees someone like them on television, they know they are not alone.",
    role: "India's First Transgender News Anchor",
  },
  {
    name: "Dr. Rachel Levine",
    location: "United States",
    quote: "Being authentic to who you are is the greatest gift you can give yourself and the world.",
    role: "U.S. Assistant Secretary for Health",
  },
  {
    name: "Georgina Beyer",
    location: "New Zealand",
    quote: "I never set out to be a trailblazer. I just wanted to live, and serve my people honestly.",
    role: "World's First Openly Transgender MP",
  },
  {
    name: "Gauri Sawant",
    location: "Maharashtra, India",
    quote: "Every child deserves a mother's love — and every mother deserves to be recognized, no matter her gender.",
    role: "Activist & Adoptive Mother",
  },
  {
    name: "Lynn Conway",
    location: "United States",
    quote: "Don't let anyone tell you what you cannot achieve. Innovation belongs to all of us.",
    role: "Pioneering Computer Scientist",
  },
];

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 sm:py-28" aria-label="Stories and voices">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Trailblazers & <span className="text-gradient-pride">Voices</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Transgender leaders across the world who broke barriers and inspire millions to dream, dare, and demand dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="reveal group relative p-8 rounded-2xl bg-card border shadow-sm hover:shadow-lg transition-all"
            >
              <div className="absolute top-6 right-6 text-5xl opacity-10 text-pride-pink">"</div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full gradient-pride flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {story.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{story.name}</p>
                  <p className="text-xs text-muted-foreground">{story.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed italic mb-4">"{story.quote}"</p>
              <p className="text-sm font-medium text-pride-blue">{story.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal text-center p-8 rounded-2xl gradient-pride-soft">
          <h3 className="text-2xl font-bold text-foreground mb-2">Be Part of the Change</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Every story you share, every voice you uplift, every act of allyship helps build a world where transgender people thrive everywhere.
          </p>
          <a
            href="#ally"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Become an Ally
          </a>
        </div>
      </div>
    </section>
  );
}
