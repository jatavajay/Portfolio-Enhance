import { motion } from "framer-motion";
import { Calendar, MapPin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 flex flex-col justify-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Computer Science student at{" "}
              <span className="text-primary font-semibold">Sitare University</span> with a strong
              foundation in programming and web development. My journey began at{" "}
              <span className="text-foreground font-medium">Jawahar Navodaya Vidyalaya</span>, where I developed
              my analytical thinking and problem-solving skills.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Through my preparation for JEE Main, I developed strong analytical and problem-solving
              skills. I enjoy building practical applications that solve real-world problems and
              continuously explore new technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-5">
                {[
                  { icon: <Calendar className="w-5 h-5" />, label: "Born", value: "September 9, 2004" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Location", value: "Sheopur, MP, India" },
                  { icon: <Mail className="w-5 h-5" />, label: "Email", value: "jatavajay09@gmail.com" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-full shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
