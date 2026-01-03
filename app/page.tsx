"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = [
    {
      name: "NoteFlow",
      description: "AI-powered note-taking app",
      link: "/noteflow",
    },
    {
      name: "Cherry",
      description: "All-in-one Investing Tracking App",
      link: "/cherry",
    },
  ];
  return (
    <div className="mx-auto mt-28 flex w-full max-w-[600px] items-center justify-center px-8 pb-16">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-xl font-semibold">Jeffrey Chery</h1>
          <div className="flex items-center gap-4">
            <Badge asChild>
              <Link href="/about">About Me</Link>
            </Badge>
            <div className="flex items-center gap-0">
              <Button variant="ghost" size="icon" className="p-0.5">
                <Link href="https://x.com/jeffrey_ch009">
                  <Image
                    src="/x.svg"
                    alt="X"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" className="p-0.5">
                <Link href="https://www.linkedin.com/in/jeffreychery/">
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={16}
                    height={16}
                    className="dark:invert"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <p className="leading-relaxed">
          I&apos;m a software engineer and current college student at Broward
          College. I am currently pursuing a Bachelor&apos; degree in Computer
          Science. I am an intern at AdaptAI, an AI consulting company based in
          Miami, FL and currently assisting in building software solutions for
          clients.
        </p>
        <div className="mt-8 flex flex-col gap-2">
          <p>Personal Projects:</p>
          <ul className="ml-4 list-disc">
            {projects.map((project) => (
              <li className="mb-2" key={project.name}>
                <Link className="underline" href={project.link}>
                  {project.name}
                </Link>{" "}
                - {project.description}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <p className="leading-relaxed">
            If you would like to contact me to work on a project or collaborate
            on something, feel free to reach out to me on X or LinkedIn.
            Leta&apos; build something great together!
          </p>
        </div>
      </div>
    </div>
  );
}
