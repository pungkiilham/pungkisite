import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-10">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
              <Image
                src="/PUNGKI_POTRAIT_compressed.png"
                alt="Pungki Photo"
                width={200}
                height={200}
                className="rounded-xl transition-all group-hover:saturate-100"
                // className="saturate-0 transition-all group-hover:saturate-100"
              />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Hi, <span className="text-primary">i'm Pungki ilham</span>
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
                I bring a unique blend of strategic leadership and hands-on
                full-stack web development expertise to every project.
              </p>
            </div>
            {/* <div className="mt-6 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                More About Me
              </Button> 
              <a href="https://github.com/pungkiilham" className="flex items-center border-2 px-2 py-0.5 rounded-sm">
                View My Repo {""}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div> */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="font-medium text-lg lg:text-left">
                My Expertice For 8+ Years
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4">
                <Button
                  variant="outline"
                  className="shadow-sm transition-shadow hover:shadow"
                >
                  IT Project Manager
                </Button>
                <Button
                  variant="outline"
                  className="shadow-sm transition-shadow hover:shadow"
                >
                  Business Analyst
                </Button>
                <Button
                  variant="outline"
                  className="shadow-sm transition-shadow hover:shadow"
                >
                  Mechatronic Engineer
                </Button>
                <Button
                  variant="outline"
                  className="shadow-sm transition-shadow hover:shadow"
                >
                  Full-stack Web Developer
                </Button>
              </div>

              <p className="font-medium text-lg lg:text-left mt-10">
                I Build My Project By This Tech
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/laravel.jpg"
                    alt="Laravel Logo"
                    width={50}
                    height={50}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>
                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg"
                    alt="React logo"
                    width={50}
                    height={50}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/nextjs-icon.svg"
                    alt="Next logo"
                    width={50}
                    height={50}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/Expressjs.png"
                    alt="Express logo"
                    width={80}
                    height={80}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/Csharp_Logo.png"
                    alt="C# logo"
                    width={80}
                    height={80}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/arduinologo.png"
                    alt="Arduino logo"
                    width={50}
                    height={50}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                <button
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <Image
                    src="/figma.png"
                    alt="Figma logo"
                    width={50}
                    height={50}
                    className="saturate-0 transition-all group-hover:saturate-100"
                  />
                </button>

                {/* <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg"
                    alt="TypeScript logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>


                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-12 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg"
                    alt="Tailwind CSS logo"
                    className="h-6 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
