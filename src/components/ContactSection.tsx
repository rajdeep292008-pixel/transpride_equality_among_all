import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(form);
    setLoading(false);
    if (error) {
      toast.error("Could not send message. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Message received — thank you!");
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletter) return;
    setSubLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: newsletter });
    setSubLoading(false);
    if (error) {
      if (error.code === "23505") toast.info("You're already subscribed!");
      else toast.error("Subscription failed. Please try again.");
      return;
    }
    toast.success("Subscribed! Welcome to the movement 💜");
    setNewsletter("");
  };

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
          <div className="reveal">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            {submitted ? (
              <div className="p-8 rounded-2xl gradient-pride-soft text-center">
                <span className="text-4xl mb-4 block">💜</span>
                <p className="text-lg font-semibold text-foreground">Thank you for reaching out!</p>
                <p className="text-muted-foreground mt-2">Together, we can make a difference.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" required className="rounded-xl" />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" required className="rounded-xl" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                  <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How would you like to help?" rows={4} required className="rounded-xl" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          <div className="reveal">
            <h3 className="text-xl font-semibold text-foreground mb-6">Stay Connected</h3>
            <div className="p-8 rounded-2xl bg-card border shadow-sm mb-6">
              <h4 className="font-semibold text-foreground mb-2">📬 Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get updates on events, resources, and ways to support transgender rights worldwide.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input value={newsletter} onChange={(e) => setNewsletter(e.target.value)} placeholder="Your email" type="email" required className="rounded-xl flex-1" />
                <Button type="submit" variant="default" className="rounded-xl" disabled={subLoading}>
                  {subLoading ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">🆘 Crisis Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you or someone you know needs immediate help:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground"><strong className="text-foreground">iCall (India):</strong> 9152987821</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Vandrevala Foundation:</strong> 1860-2662-345</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Trans Lifeline (US/CA):</strong> 877-565-8860</li>
                <li className="text-muted-foreground"><strong className="text-foreground">Mindline Trans+ (UK):</strong> 0300-330-5468</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
