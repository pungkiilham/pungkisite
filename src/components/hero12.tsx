import { ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-32">
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
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                alt="logo"
                className="h-16"
              />
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
                Hi, <span className="text-primary">i'm Pungki ilham</span>
              </h1>
              {/* <div className="grid grid-cols-2 lg:grid-cols-4 justify-center gap-4 p-4">
                <Button className="shadow-sm transition-shadow hover:shadow">
                  IT Project Manager
                </Button>
                <Button className="shadow-sm transition-shadow hover:shadow">
                  Business Analyst
                </Button>
                <Button className="shadow-sm transition-shadow hover:shadow">
                  Electrical Engineer
                </Button>
                <Button className="shadow-sm transition-shadow hover:shadow">
                  Full-stack Developer
                </Button>
              </div> */}

              {/* <h1 className="mb-6 text-xl font-medium tracking-tight text-pretty lg:text-2xl">
                IT Project Manager | Business Analyst{" "}
                <span className="text-primary">
                  | Electrical Engineer | Full-stack Developer
                </span>
              </h1> */}
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
                <Button variant="outline" className="shadow-sm transition-shadow hover:shadow">
                  IT Project Manager
                </Button>
                <Button variant="outline" className="shadow-sm transition-shadow hover:shadow">
                  Business Analyst
                </Button>
                <Button variant="outline" className="shadow-sm transition-shadow hover:shadow">
                  Electrical Engineer
                </Button>
                <Button variant="outline" className="shadow-sm transition-shadow hover:shadow">
                  Full-stack Developer
                </Button>
              </div>

              <p className="font-medium text-lg lg:text-left mt-10">
                I Build My Project By This Tech
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="laravel.jpg"
                    alt="shadcn/ui logo"
                    className="h-10 lg:h-14 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>
                <a
                  href="#"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg"
                    alt="React logo"
                    className="h-10 lg:h-14 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="nextjs-icon.svg"
                    alt="shadcn/ui logo"
                    className="h-10 lg:h-14 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="Expressjs.png"
                    alt="shadcn/ui logo"
                    className="h-10 lg:h-14 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>

                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="Csharp_Logo.png"
                    alt="shadcn/ui logo"
                    className="h-16 lg:h-20 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>  
                
                <a
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group flex aspect-square h-16 lg:h-20 items-center justify-center p-0"
                  )}
                >
                  <img
                    src="arduinologo.png"
                    alt="shadcn/ui logo"
                    className="h-10 lg:h-14 saturate-0 transition-all group-hover:saturate-100"
                  />
                </a>                

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
