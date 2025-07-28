import { Mail, Github, Linkedin } from "lucide-react"; // Icons for contact methods
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ContactPage = () => {
  return (
    <section className="py-12 md:py-16 container max-w-full mx-auto text-center">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-6xl mb-4">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          I'm always open to new opportunities, collaborations, or just a friendly chat!
        </p>
      </div>

      <div className="space-y-8 md:space-y-10">
        {/* Email */}
        <div className="flex flex-col items-center">
          <Mail className="h-10 w-10 text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Email Me</h2>
          <p className="text-muted-foreground mb-4">
            The best way to reach me for professional inquiries.
          </p>
          <a
            href="mailto:pungkiilham92@example.com" // IMPORTANT: Replace with your actual email address
            className="px-6 py-3 text-lg group flex justify-center items-center gap-2 border-2 border-slate-300 rounded-lg"
          >
            Send an Email{" "}
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <Linkedin className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Connect on LinkedIn</h2>
            <p className="text-muted-foreground mb-4">
              Let's connect professionally and expand our networks.
            </p>
            <a
              href="https://www.linkedin.com/in/pungki-ilham-rizky-soni/" // IMPORTANT: Replace with your actual LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg group flex justify-center items-center gap-2 border-2 border-slate-300 rounded-lg"
            >
              My LinkedIn{" "}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <Github className="h-10 w-10 text-primary mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Explore My Code</h2>
            <p className="text-muted-foreground mb-4">
              Check out my repositories and open-source contributions.
            </p>
            <a
              href="https://github.com/pungkiilham" // IMPORTANT: Replace with your actual GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-lg group flex justify-center items-center gap-2 border-2 border-slate-300 rounded-lg"
            >
              My GitHub{" "}
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Optional: Location */}
        <div className="mt-12 text-muted-foreground text-center">
          <p className="text-lg">Based in Surabaya, East Java, Indonesia</p>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;