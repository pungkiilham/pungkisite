"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  viewAllUrl?: string; // Optional: A link to a full projects page
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "My Portfolio",
  viewAllUrl = "#",
  items = [
    // IMPORTANT: Ensure these image paths are correct and images exist in your /public directory
    {
      id: "item-1",
      title: "Full-Stack E-commerce Platform with AI Recommendations",
      summary:
        "Developed a robust e-commerce solution with integrated payment gateways, user authentication, and an AI-driven product recommendation engine for personalized shopping experiences. Technologies: Next.js, Express.js, PostgreSQL, Stripe, Python (for AI).",
      url: "#",
      image: "/project-ecommerce-ai.jpg",
    },
    {
      id: "item-2",
      title: "Real-time IoT Dashboard for Smart City Management",
      summary:
        "Designed and implemented a scalable IoT dashboard to monitor urban infrastructure in real-time, providing predictive analytics, data visualization, and alert systems for city planners. Technologies: React, Node.js, MQTT, MongoDB, Grafana.",
      url: "#",
      image: "/project-iot-dashboard.jpg",
    },
    {
      id: "item-3",
      title: "Mobile Fitness Tracking App with Gamification",
      summary:
        "Built a cross-platform mobile application to track various fitness activities, set personalized goals, and engage users with gamified challenges and social leaderboards. Technologies: React Native, Firebase, Redux.",
      url: "#",
      image: "/project-fitness-app.jpg",
    },
    {
      id: "item-4",
      title: "Custom CRM for Small Business Workflow Automation",
      summary:
        "Developed a tailored Customer Relationship Management system to streamline sales pipelines, manage client interactions, and automate follow-up processes for small and medium enterprises. Technologies: Laravel, Vue.js, MySQL.",
      url: "#",
      image: "/project-crm.jpg",
    },
    {
      id: "item-5",
      title: "AI-Powered Resume Parser and Job Matching System",
      summary:
        "Created an intelligent web service that parses resumes using AI, extracts key skills, and matches candidates with relevant job openings, significantly reducing recruitment time. Technologies: Python (Flask, spaCy), React, PostgreSQL.",
      url: "#",
      image: "/project-ai-resume.jpg",
    },
    {
      id: "item-6",
      title: "Interactive Data Visualization Tool for Financial Analysis",
      summary:
        "Developed a powerful web-based tool for financial analysts to visualize complex market data, identify trends, and generate custom reports, enhancing decision-making capabilities. Technologies: D3.js, Next.js, REST APIs.",
      url: "#",
      image: "/project-data-viz.jpg",
    },
    {
      id: "item-7",
      title: "Blockchain-based Supply Chain Traceability Solution",
      summary:
        "Implemented a decentralized application (DApp) on a blockchain platform to provide transparent and immutable tracking of products in a supply chain.",
      url: "#",
      image: "/project-blockchain.jpg",
    },
    {
      id: "item-8",
      title: "Personal Portfolio Site with Next.js and Shadcn UI",
      summary:
        "Designed and developed a modern, static personal portfolio website to showcase skills and projects, built with Next.js, TypeScript, and Shadcn UI.",
      url: "#",
      image: "/project-portfolio.jpg",
    },
  ],
}: Gallery6Props) => {
  return (
    <section className="py-24 md:py-32 container"> {/* Container for padding, but grid will handle max-width */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-pretty md:text-5xl lg:text-6xl mb-4">
          {heading}
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Here are some of the projects I've worked on, showcasing my diverse skills.
        </p>
        {/* Optional: A "View All Projects" link if you have a dedicated full projects page */}
        {/* {viewAllUrl && (
          <a
            href={viewAllUrl}
            className="group flex items-center justify-center gap-1 text-sm font-medium text-primary md:text-base lg:text-lg mt-4"
          >
            View All Projects
            <ExternalLink className="ml-2 size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        )} */}
      </div>

      {/* --- Portfolio Grid --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> {/* The responsive grid */}
        {items.map((item) => (
          <Button
            key={item.id}
            asChild
            variant="outline"
            className={cn(
              "group flex h-full flex-col p-4 text-left shadow-sm transition-shadow hover:shadow-md", // Card styling
              "rounded-xl bg-background/30 backdrop-blur-sm" // Background/blur from homepage image
            )}
          >
            {/* Added a min-h for the anchor tag to ensure consistent height baseline */}
            <a href={item.url} className="flex flex-col h-full min-h-[350px]"> {/* Adjusted min-h for better visual */}
              {/* Image Section - ensure it doesn't grow/shrink */}
              <div className="aspect-video relative overflow-hidden rounded-lg border mb-4 flex-grow-0 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="saturate-0 transition-all group-hover:saturate-100"
                />
              </div>

              {/* Text Content Area - allow it to grow if needed, but with clamping */}
              <div className="flex flex-col flex-grow">
                  <h3 className="mb-2 line-clamp-2 break-words text-lg font-semibold md:text-xl">
                      {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm md:text-base">
                      {item.summary}
                  </p>
              </div>

              {/* "View Project" Link - push to bottom */}
              <div className="flex items-center text-sm text-primary mt-auto">
                View Project{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
};

export { Gallery6 };