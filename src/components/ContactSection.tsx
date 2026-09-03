import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(255, "Email must be 255 characters or fewer."),
  message: z
    .string()
    .trim()
    .min(1, "Please enter a message.")
    .max(5000, "Message must be 5,000 characters or fewer."),
});

const newsletterSchema = z
  .string()
  .trim()
  .email("Please enter a valid email address.")
  .max(255, "Email must be 255 characters or fewer.");

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subLoading, setSubLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [newsletter, setNewsletter] = useState("");
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [newsletterError, setNewsletterError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const errors: Partial<Record<keyof typeof form, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0];
        if (field === "name" || field === "email" || field === "message") {
          errors[field] = issue.message;
        }
      }
      setFormErrors(errors);
      toast.error("Please review the highlighted fields.");
      return;
    }

    setFormErrors({});
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert(result.data);
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
    const result = newsletterSchema.safeParse(newsletter);
    if (!result.success) {
      setNewsletterError(result.error.issues[0]?.message ?? "Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    setNewsletterError("");
    setSubLoading(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: result.data });
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
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        setFormErrors({ ...formErrors, name: undefined });
                      }}
                      placeholder="Your name"
                      required
                      maxLength={100}
                      aria-invalid={Boolean(formErrors.name)}
                      className="rounded-xl"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-destructive">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-foreground mb-1.5 block"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        setFormErrors({ ...formErrors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      required
                      maxLength={255}
                      aria-invalid={Boolean(formErrors.email)}
                      className="rounded-xl"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-destructive">{formErrors.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-foreground mb-1.5 block"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      setFormErrors({ ...formErrors, message: undefined });
                    }}
                    placeholder="How would you like to help?"
                    rows={4}
                    required
                    maxLength={5000}
                    aria-invalid={Boolean(formErrors.message)}
                    className="rounded-xl"
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-sm text-destructive">{formErrors.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
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
                <Input
                  value={newsletter}
                  onChange={(e) => {
                    setNewsletter(e.target.value);
                    setNewsletterError("");
                  }}
                  placeholder="Your email"
                  type="email"
                  required
                  maxLength={255}
                  aria-invalid={Boolean(newsletterError)}
                  className="rounded-xl flex-1"
                />
                <Button
                  type="submit"
                  variant="default"
                  className="rounded-xl"
                  disabled={subLoading}
                >
                  {subLoading ? "..." : "Subscribe"}
                </Button>
              </form>
              {newsletterError && (
                <p className="mt-2 text-sm text-destructive">{newsletterError}</p>
              )}
            </div>

            <div className="p-8 rounded-2xl bg-card border shadow-sm">
              <h4 className="font-semibold text-foreground mb-3">🆘 Crisis Support</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you or someone you know needs immediate help:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">iCall (India):</strong> 9152987821
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Vandrevala Foundation:</strong> 1860-2662-345
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Trans Lifeline (US/CA):</strong> 877-565-8860
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Mindline Trans+ (UK):</strong> 0300-330-5468
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
