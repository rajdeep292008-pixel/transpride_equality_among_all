const stories = [
  {
    name: "Ananya",
    location: "Mumbai, India",
    quote: "For years I hid who I was. When I finally came out, I lost my family — but I found myself. Today, I run a small business and mentor young trans people. We are not broken; we are brave.",
    role: "Entrepreneur & Mentor",
  },
  {
    name: "Priya",
    location: "Chennai, India",
    quote: "The hardest part wasn't accepting myself — it was waiting for the world to accept me. I was denied a job 47 times before someone saw my talent, not my identity. That one chance changed my life.",
    role: "Software Developer",
  },
  {
    name: "Ravi",
    location: "Delhi, India",
    quote: "As a trans man, people told me I was confused. But I've never been more clear about anything. I now work in healthcare, helping others access the support I was once denied.",
    role: "Healthcare Worker",
  },
];

export function StoriesSection() {
  return (
    <section id="stories" className="py-20 sm:py-28" aria-label="Stories and voices">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Stories & <span className="text-gradient-pride">Voices</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories of courage, resilience, and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
