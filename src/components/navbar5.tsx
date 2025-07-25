"use client";

import { ExternalLink, Github, MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar5 = () => {
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className="py-4 border-b-2">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold"
          >
            Pungki Site
          </Link>
          <div className="hidden items-center gap-4 lg:flex lg:gap-10">
            <Link href="/about" className="font-medium">
              About
            </Link>
            <Link href="/portofolio" className="font-medium">
              Portofolio
            </Link>
            <Link href="/contact" className="font-medium">
              Contact
            </Link>
            <Link
              href="https://github.com/pungkiilham"
              className="flex items-center border-2 px-4 py-2 rounded-md gap-2 bg-black text-white font-medium"
            >
              <Github className="h-4 transition-transform group-hover:translate-x-0.5 font-bold" />
              My Repo
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <span className="text-lg font-semibold tracking-tighter">
                      Pungki Site
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                {/* <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold text-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}
                <div className="flex flex-col gap-6">
                  <Link href="/about" className="font-medium">
                    About
                  </Link>
                  <Link href="/portofolio" className="font-medium">
                    Portofolio
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {/* <Button>Contact</Button> */}
                  <Link
                    href="https://github.com/pungkiilham"
                    className="flex items-center border-2 px-4 py-2 rounded-md gap-2 bg-black text-white font-medium justify-center"
                  >
                    <Github className="h-4 transition-transform group-hover:translate-x-0.5 font-bold" />
                    My Repo
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
