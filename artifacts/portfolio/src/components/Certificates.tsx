import { motion } from "framer-motion";
import { ExternalLink, Award, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const certs = [
  {
    title: "SQL Fundamentals",
    description: "Completed comprehensive training in SQL database management and querying.",
    image: "https://static.startuptalky.com/2021/09/Simplilearn-Business-Model-startuptalky.jpg",
    pdf: "https://raw.githubusercontent.com/jatavajay/ajay-jatav-portfoli/main/SQLcertificate.pdf",
  },
  {
    title: "Python Programming",
    description: "Mastered Python programming concepts, data structures, and best practices.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbz1uAMizO_UeqXG9nac9gcmAApv0cddHJHg&s",
    pdf: "https://raw.githubusercontent.com/jatavajay/ajay-jatav-portfoli/main/pythoncertificate.pdf",
  },
  {
    title: "Outskill Program",
    description: "Completed advanced training in web development and software engineering.",
    image: "https://cdn-1.webcatalog.io/catalog/outskill/outskill-social-preview.png?v=1742188522235",
    pdf: "https://raw.githubusercontent.com/jatavajay/ajay-jatav-portfoli/main/outskill.pdf",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card border border-card-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {cert.image ? (
                <div className="relative overflow-hidden bg-muted h-56 group">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-cert-${cert.title.toLowerCase().replace(/\s/g, "-")}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/5" />
                </div>
              ) : null}

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 bg-amber-500/10 text-amber-500 rounded-full">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-semibold text-sm">{cert.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">
                  {cert.description}
                </p>
                {cert.pdf ? (
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-2 text-xs"
                    asChild
                    data-testid={`button-view-cert-${cert.title.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <a href={cert.pdf} target="_blank" rel="noreferrer">
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Certificate
                    </a>
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" className="w-full text-xs" disabled>
                    Coming Soon
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
