import Image from "next/image";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import WorkExperience from "@/components/work-experience";
import Education from "@/components/education";
import Heading from "@/components/ui/heading";
import { ExternalLink } from "lucide-react";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="px-4 mb-20">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-2">
        <div className=" mx-auto max-w-2xl flex flex-row justify-between items-center">
          <div>{`<arvindeva.dev />`}</div>
          <ModeToggle />
        </div>
      </header>
      <div className="mx-auto max-w-2xl w-full flex flex-col gap-y-12">
        <div className="mt-4 text-center">
          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 via-red-600 to-orange-500 text-transparent bg-clip-text animate-gradient">
            arvindeva wibisono
          </h1>
          <h2 className="text-muted-foreground text-2xl">
            fullstack software engineer
          </h2>
          <div className="flex flex-row gap-x-4 justify-center">
            <Link href="https://github.com/arvindeva">
              <span className="underline text-sm">github</span>
            </Link>
            <Link href="https://www.linkedin.com/in/arvindeva/">
              <span className="underline text-sm">linkedin</span>
            </Link>
          </div>
        </div>
        <div>
          <Heading>about</Heading>
          <h2 className="text-muted-foreground">
            hi, i&apos;m arvin, a fullstack software engineer. i enjoy designing
            and building applications. my current preferred stack revolves
            around typescript(react) and go.
          </h2>
        </div>
        <WorkExperience />
        <Education />
        <Projects />
        <Contact />
        <footer>
          <div className="text-center text-muted-foreground text-sm">
            made with nextjs
          </div>
        </footer>
      </div>
    </main>
  );
}
