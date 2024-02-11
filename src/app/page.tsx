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
    <main className="mb-20">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2 px-4">
        <div className=" mx-auto max-w-2xl flex flex-row justify-between items-center">
          <div className="font-semibold">
            <Link href="/">{`<arvindeva />`}</Link>
          </div>
          <ModeToggle />
        </div>
      </header>
      <div className="mx-auto max-w-2xl w-full flex flex-col gap-y-12 mt-12 px-4">
        <div className="text-center flex flex-col gap-y-2">
          <h1 className="text-4xl font-black bg-gradient-to-r from-pink-500 via-red-600 to-orange-500 text-transparent bg-clip-text animate-gradient">
            arvindeva wibisono
          </h1>
          <h2 className="text-muted-foreground text-xl">
            fullstack software engineer
          </h2>
          <div className="flex flex-row gap-x-2 justify-center">
            <Link href="https://github.com/arvindeva">
              <span className="underline text-sm">github</span>
            </Link>
            -
            <Link href="https://www.linkedin.com/in/arvindeva/">
              <span className="underline text-sm">linkedin</span>
            </Link>
          </div>
        </div>
        <div>
          <Heading>about</Heading>
          <p className="text-muted-foreground text-sm">
            hi, i&apos;m <span className="text-foreground">arvin</span>, a{" "}
            <span className="text-foreground">fullstack software engineer</span>{" "}
            based in <span className="text-foreground">the netherlands</span>. i
            enjoy designing and building (mostly web) applications and creating
            great digital experience. my current preferred stack revolves around{" "}
            <span className="text-foreground">typescript</span>,{" "}
            <span className="text-foreground">react</span>, and{" "}
            <span className="text-foreground">go</span>.
          </p>
        </div>
        <WorkExperience />
        <Education />
        <Projects />
        <Contact />
        <footer>
          <div className="text-center text-foreground text-sm underline">
            <Link href="https://github.com/arvindeva/arvindeva-dev">
              website source code
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
