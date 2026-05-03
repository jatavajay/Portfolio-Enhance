import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const timeline = [
  {
    title: "B.Tech in Computer Science",
    institution: "Sitare University",
    period: "2024 – Present",
    detail: "Currently pursuing Bachelor of Technology in Computer Science Engineering",
    highlight: true,
  },
  {
    title: "JEE Main",
    institution: "Physics Wallah",
    period: "2024",
    detail: "Achieved 82 percentile in JEE Main examination",
    score: "82 Percentile",
  },
  {
    title: "Class XII (PCM – Science)",
    institution: "Jawahar Navodaya Vidyalaya, Sheopur",
    period: "2023",
    detail: "Completed higher secondary education in Science stream",
    score: "78%",
  },
  {
    title: "Class X",
    institution: "Jawahar Navodaya Vidyalaya, Sheopur",
    period: "2021",
    detail: "Completed secondary education",
    score: "86%",
  },
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{ originY: 0 }}
            className="absolute left-6 top-0 bottom-0 w-px bg-border"
          />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative pl-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: i * 0.12 + 0.1 }}
                  className={`absolute left-0 top-1 flex items-center justify-center w-12 h-12 rounded-full border-2 z-10 ${
                    item.highlight
                      ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "bg-background border-border text-primary"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-card border border-card-border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-primary/25 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-base leading-tight">{item.title}</h3>
                      <p className="text-sm text-primary font-medium mt-0.5">{item.institution}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                      {item.score && (
                        <span className="text-xs font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {item.score}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
