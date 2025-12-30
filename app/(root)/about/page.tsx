import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">About Me</h1>
          <Link href="/">
            <Button variant="ghost">Go Back</Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <p className="leading-relaxed">
            I was born in beautiful Miami, FL. I was raised here for a couple of
            years before moving to Toronto, Canada. It&apos;s where I found out
            that I had a passion for technology and computers... credit to my
            father.
          </p>
          <p className="leading-relaxed">
            My father worked as a Network Engineer for Microsoft and IBM, and I
            was always around computers and technology. I remember vividly
            visiting his office and seeing the servers and how they worked. Even
            once, they put him in charge of a project at a newly constructed
            building to install their network infrastructure. So as you can see,
            I was always around technology and computers. My father encouraged
            me to pursue a career in technology and computers.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/toronto.webp"
                  alt="toronto"
                  fill
                  className="h-full rounded-lg"
                />
              </AspectRatio>
              <p className="text-muted-foreground text-xs">
                Source:{" "}
                <Link
                  href="https://www.britannica.com/place/Toronto"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Britannica
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src="/microsoft-office.jpg"
                  alt="microsoft office"
                  fill
                  className="h-full rounded-lg"
                />
              </AspectRatio>
              <p className="text-muted-foreground text-xs">
                Source:{" "}
                <Link
                  href="https://brainstation.io/magazine/microsoft-announces-new-toronto-headquarters-and-570-million-in-investments"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BrainStation
                </Link>
              </p>
            </div>
          </div>
          <p className="leading-relaxed">
            As I grew up, I started to take computers apart and put them back
            together. I was interested in how they worked and how to make them
            better. I took a few programming classes in high school and,
            surprisingly, I took a CAD Design class. Growing up, I loved what my
            father did but I wanted to do something different. I decided I
            wanted to pursue a career in Civil Engineering. It wasn&apos;t
            technology but it did involve a lot of math and problem solving.
          </p>
          <p className="leading-relaxed">
            A few years after my high school graduation, I took a few classes
            for Civil Engineering but quickly realized that it wasn&apos;t for
            me. I didn&apos;t want to follow in the exact footsteps of my
            father, but I knew the tech field was where I wanted to be. I was
            always interested in software and wanted to know how to build it, so
            as you guessed it, I decided to pursue a degree in Computer Science
            with my main focus in Software Engineering.
          </p>
          <p className="leading-relaxed">
            In 2023, I moved back to Miami, FL and started enrolling at Broward
            College to pursue a Bachelor&apos;s degree in Computer Science.
            Throughout my time at Broward College, I have been able to learn a
            lot about the field of Computer Science and Software Engineering. I
            have built many meaningful projects with a real user base and I keep
            improving my skills and knowledge every day. Currently, I am a
            Software Engineer Intern at{" "}
            <Link
              href="https://adaptai.com/"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              adaptAI
            </Link>
            , an AI consulting company based in Miami, FL and currently
            assisting in building software solutions for clients.
          </p>
          <p className="leading-relaxed">
            Currently, I am a sophomore at BC and on track to graduate in 2027.
            I love building software and look forward to building more
            meaningful projects and possibly changing the world with my skills.
          </p>
          <div className="flex flex-col gap-2">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="/broward-college.png"
                alt="broward college"
                fill
                className="h-full rounded-lg"
              />
            </AspectRatio>
            <p className="text-muted-foreground text-xs">
              Source:{" "}
              <Link
                href="https://www.broward.edu/simcenter/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Broward College
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
