import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Instagram, Twitter, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        toast({ title: "Message sent!", description: "I'll get back to you soon." });
        setTimeout(() => setSent(false), 5000);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      toast({
        title: "Failed to send",
        description: msg || "Something went wrong. Please email me directly at jatavajay09@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  const socials = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/jatavajay" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/ajay-jatav-b15428207" },
    { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/jatavajay._09" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://x.com/ajay_jatav12876" },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Let's Connect</h3>

            <div className="space-y-4">
              <a href="mailto:jatavajay09@gmail.com" className="flex items-center gap-4 group">
                <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors">jatavajay09@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Location</p>
                  <p className="font-medium">Sheopur, Madhya Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    data-testid={`link-social-${s.label.toLowerCase()}`}
                    className="p-2.5 bg-card border border-card-border rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-all hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                data-testid="input-contact-name"
              />
              <Input
                name="email"
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={handleChange}
                required
                data-testid="input-contact-email"
              />
            </div>
            <Input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              data-testid="input-contact-subject"
            />
            <Textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              data-testid="textarea-contact-message"
            />
            <Button
              type="submit"
              className="w-full gap-2"
              disabled={sending || sent}
              data-testid="button-contact-submit"
            >
              {sent ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Message Sent!
                </>
              ) : sending ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                  Sending...
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
