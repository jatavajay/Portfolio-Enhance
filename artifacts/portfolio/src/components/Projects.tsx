import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "JobHunt",
    description:
      "A job aggregator platform with CV analysis that helps job seekers find relevant positions based on their skills and experience.",
    tech: ["Node.js", "Python", "React", "Railway"],
    live: "https://web-production-55388.up.railway.app/",
    github: "https://github.com/jatavajay",
    featured: true,
  },
  {
    name: "EventHub",
    description:
      "A platform for discovering and managing events, allowing users to browse, create, and join various events.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    live: "https://eventhub-0okf.onrender.com/",
    github: "https://github.com/rdxhacnikhil/project",
    featured: true,
  },
  {
    name: "Logic Evaluator",
    description:
      "An interactive tool for evaluating logical expressions with support for various operators and truth tables.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    live: null,
    github: null,
    featured: false,
  },
  {
    name: "Matrix Operations",
    description:
      "An interactive matrix calculator that performs various matrix operations including addition, multiplication, and determinant calculation.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: null,
    github: null,
    featured: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariant}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group bg-card border border-card-border rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 flex flex-col cursor-default"
            >
              <div className="flex items-start justify-between mb-3">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="p-2 bg-primary/10 text-primary rounded-lg"
                >
                  <Code2 className="w-5 h-5" />
                </motion.div>
                <div className="flex gap-2">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, y: -1 }}
                      className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-github-${project.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, y: -1 }}
                      className="p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors"
                      data-testid={`link-live-${project.name.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {project.name}
                {project.featured && (
                  <span className="ml-2 text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full align-middle">
                    Live
                  </span>
                )}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs font-medium">
                    {t}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
