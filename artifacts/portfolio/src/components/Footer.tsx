import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-muted-foreground">
          &copy; {year} <span className="font-semibold text-foreground">Ajay Jatav</span>. All rights reserved.
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/jatavajay" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/ajay-jatav-b15428207" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/jatavajay._09" target="_blank" rel="noreferrer" aria-label="Instagram"
            className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://x.com/ajay_jatav12876" target="_blank" rel="noreferrer" aria-label="Twitter"
            className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
