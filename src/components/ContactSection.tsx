import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-28" aria-label="Contact and community">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Join the <span className="text-gradient-pride">Community</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Reach out, connect, and be part of the movement for equality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="reveal">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            {submitted ? (
              <div className="p-8 rounded-2xl gradient-pride-soft text-center">
                <span className="text-4xl mb-4 block">💜</span>
                <p className="text-lg font-semibold text-foreground">Thank you for reaching out!</p>
                <p className="text-muted-foreground mt-2">Together, we can make a difference.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input id="name" placeholder="Your name" required className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input id="email" type="email" placeholder="you@example.com" required className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea id="message" placeholder="How would you like to help?" rows={4} required className="rounded-xl" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Newsletter */}
          <div className="reveal">
            <h3 className="text-xl font-semibold text-foreground mb-6">Stay Connected</h3>
            <div className="p-8 rounded-2xl bg-card border shadow-sm mb-6">
              <h4 className="font-semibold text-foreground mb-2">📬 Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get updates on events, resources, and ways to support transgender rights in India.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
              >
                <Input placeholder="Your email" type="email" className="rounded-xl flex-1" />
                <Button variant="default" className="rounded-xl">Subscribe</Button>
              </form>
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">🆘 Crisis Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you or someone you know needs immediate help:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground"><strong className="text-foreground">iCall:</strong> 9152987821</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Vandrevala Foundation:</strong> 1860-2662-345</li>
                <li className="text-muted-foreground"><strong className="text-foreground">AASRA:</strong> 91-22-27546669</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
