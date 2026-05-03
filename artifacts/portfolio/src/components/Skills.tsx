import { motion } from "framer-motion";
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiGit,
  SiLinux,
  SiHtml5,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa";
import { Server, Layers, Users, Monitor, Palette } from "lucide-react";

const categories = [
  {
    name: "Programming Languages",
    icon: <Layers className="w-5 h-5" />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <FaDatabase /> },
    ],
  },
  {
    name: "Web Technologies",
    icon: <Monitor className="w-5 h-5" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <Palette className="w-4 h-4" /> },
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Flask", icon: <SiFlask /> },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: <Server className="w-5 h-5" />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "Linux", icon: <SiLinux /> },
      { name: "Railway", icon: null },
      { name: "Render", icon: null },
      { name: "VS Code", icon: null },
    ],
  },
  {
    name: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: [
      { name: "Problem Solving", icon: null },
      { name: "Teamwork", icon: null },
      { name: "Adaptability", icon: null },
      { name: "Time Management", icon: null },
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const tagVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={card}
              whileHover={{ y: -4 }}
              className="bg-card border border-card-border rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-primary/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  {cat.icon}
                </div>
                <h3 className="font-semibold">{cat.name}</h3>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={tagVariant}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary hover:shadow-sm hover:shadow-primary/10 transition-colors cursor-default"
                  >
                    {skill.icon && (
                      <span className="text-base text-primary">{skill.icon}</span>
                    )}
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
