import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Twitter, ArrowDown } from "lucide-react";
import { FloatingParticles } from "./FloatingParticles";
import profilePhoto from "@assets/ProfilePhoto_1777804294490.jpeg";

const roles = [
  "Computer Science Student",
  "Web Developer",
  "Problem Solver",
  "Open Source Enthusiast",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
  let t: NodeJS.Timeout;

  const current = roles[roleIndex];

  if (paused) {
    t = setTimeout(() => setPaused(false), 1400);
  } else if (!deleting && displayed.length < current.length) {
    t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
  } else if (!deleting && displayed.length === current.length) {
    t = setTimeout(() => setDeleting(true), 1800);
  } else if (deleting && displayed.length > 0) {
    t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
  } else if (deleting && displayed.length === 0) {
    setDeleting(false);
    setPaused(true);
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }

  return () => clearTimeout(t);
}, [displayed, deleting, paused, roleIndex]);
  
  return (
    <span className="text-primary">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
        className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-16 relative overflow-hidden">
      <FloatingParticles />

      {/* Glowing blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium tracking-widest text-sm uppercase"
            >
              Learning today, Exploring technology without limits
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter"
            >
              Ajay Jatav
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-muted-foreground h-8"
            >
              <Typewriter />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base text-muted-foreground max-w-[520px] leading-relaxed"
          >
            I am a Computer Science student passionate about building web applications and solving problems with code. Seeking opportunities to apply my technical knowledge in real-world projects and grow as a software engineer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="rounded-full shadow-lg shadow-primary/30" asChild>
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex gap-2 pt-2"
          >
            {[
              { href: "https://github.com/jatavajay", icon: <Github className="w-5 h-5" />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/ajay-jatav-b15428207", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
              { href: "https://x.com/ajay_jatav12876", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
              { href: "https://www.instagram.com/jatavajay._09", icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
            ].map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08 }}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-card border border-card-border text-muted-foreground hover:text-primary hover:border-primary/40 hover:shadow-md hover:shadow-primary/10 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo with glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-72 h-72 lg:w-96 lg:h-96">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_12s_linear_infinite]" />
            {/* Inner reverse ring */}
            <div className="absolute inset-4 border border-primary/15 rounded-full animate-[spin_18s_linear_infinite_reverse]" />
            {/* Glow pulse */}
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
            />
            {/* Photo */}
            <div className="absolute inset-2 rounded-full overflow-hidden shadow-2xl border-2 border-primary/40">
              <img
                src={profilePhoto}
                alt="Ajay Jatav"
                className="w-full h-full object-cover"
                data-testid="img-hero-profile"
              />
            </div>
            {/* Corner badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, type: "spring" }}
              className="absolute bottom-4 right-0 bg-card border border-card-border rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-foreground">Open to Work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
