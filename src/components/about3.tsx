import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button"; // Assuming Button is available
import { cn } from "@/lib/utils"; // Assuming cn utility is available

const AboutPage = () => {
  return (
    <section className="py-12 md:py-16 container max-w-full mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-6xl mb-4">
          About <span className="text-primary">Pungki Ilham</span>
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          A unique blend of strategic leadership and hands-on technical expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="rounded-xl bg-background/30 p-4 shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
            <Image
              src="/PUNGKI_POTRAIT_compressed.png" // Your profile picture from homepage
              alt="Pungki Ilham - Professional Portrait"
              width={300} // Adjust size as needed
              height={300} // Adjust size as needed
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-6 md:space-y-8 xl:-ml-50 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p>
            With **8+ years of diverse experience**, I bring a unique combination of strategic leadership and technical prowess to every project. My journey began in **Mechatronic Engineering**, building a strong foundation in complex systems and problem-solving.
          </p>
          <p>
            I&apos;ve since transitioned into the world of software, excelling as an **IT Project Manager** and **Business Analyst**, where I bridge the gap between business needs and technical solutions. My hands-on experience as a **Full-stack Web Developer** with technologies like Next.js, Laravel, Express.js, and C# allows me to not just manage, but also build robust and efficient applications.
          </p>
          <p>
            My passion lies in crafting elegant solutions that solve real-world problems, from concept to deployment. I thrive on bringing ideas to life and leading teams to deliver successful projects.
          </p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Want to learn more or collaborate?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className= "px-8 py-4 text-lg shadow-sm hover:shadow-md border-2 border-slate-300 rounded-lg">
            Get in Touch
          </a>
          <a
            href="https://github.com/pungkiilham" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg shadow-sm hover:shadow-md group flex justify-center items-center gap-2 border-2 border-slate-300 rounded-lg"
          >
            View My GitHub{" "}
            <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;