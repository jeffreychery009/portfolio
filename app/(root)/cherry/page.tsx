"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const page = () => {
  const tools = [
    "Spreadsheets",
    "Investment Platforms",
    "Financial Advisors",
    "YouTube, Reddit, or X for explantions",
  ];

  const cherryFeatures = [
    "See their full portfolio clearly",
    "Understand performance and allocation",
    "Learn what’s happening in plain language",
  ];
  return (
    <>
      <div className="flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Cherry</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="p-0.5">
              <Link href="https://github.com/jeffreychery009/cherry">
                <Image
                  src="/github.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="dark:invert"
                />
              </Link>
            </Button>
            <Button>
              <Link href="/">Go Back</Link>
            </Button>
          </div>
        </div>
        <p className="leading-relaxed">
          Cherry is an all-in-one investment tracking application designed to
          help users monitor portfolios, understand risk, and make better
          long-term investment decisions through clean analytics and AI-assisted
          insights.
        </p>
        <p className="leading-relaxed">
          The goal of Cherry is not to encourage trading or speculation, but to
          give investors clarity — a clean, centralized view of their portfolio
          combined with educational insights that help them make better
          long-term decisions.
        </p>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/cherry-dashboard.webp"
            alt="Cherry dashboard"
            fill
            className="h-full rounded-lg border border-gray-200 shadow-lg dark:border-gray-800"
          />
        </AspectRatio>
        <h2 className="text-lg font-bold">Why I Built Cherry</h2>
        <p className="leading-relaxed">
          Most investors rely on a mix of tools:
        </p>
        <ul className="ml-4 list-disc">
          {tools.map((tool) => (
            <li className="mb-2" key={tool}>
              {tool}
            </li>
          ))}
        </ul>
        <p className="leading-relaxed">
          This creates fragmented understanding. You might know what you own,
          but not why your portfolio behaves the way it does.
        </p>
        <p className="leading-relaxed">
          I built Cherry to solve that problem. I wanted a single place where an
          investor can:
        </p>
        <ul className="ml-4 list-disc">
          {cherryFeatures.map((feature) => (
            <li className="mb-2" key={feature}>
              {feature}
            </li>
          ))}
        </ul>
        <h2 className="text-lg font-bold">What Cherry Does</h2>
        <p className="leading-relaxed">Cherry focuses on three core ideas:</p>
        <ul className="ml-4 list-disc">
          <li className="font-bold">Centralized visibility</li>
          <p className="mb-6 leading-relaxed">
            All portfolio data is presented in a clean, distraction-free
            interface.
          </p>
          <li className="font-bold">Clarity over complexity</li>
          <p className="mb-6 leading-relaxed">
            Instead of overwhelming users with numbers, Cherry emphasizes
            understandable insights.
          </p>
          <li className="font-bold">Education first</li>
          <p className="mb-6 leading-relaxed">
            AI is used to explain concepts, risks, and strategies — not to give
            financial advice.
          </p>
        </ul>
        <h2 className="text-lg font-bold">Core Features</h2>
        <ul className="ml-4 list-disc">
          <li className="mb-2">Portfolio tracking across assets</li>
          <li className="mb-2">Performance visualization over time</li>
          <li className="mb-2">
            Asset allocation and diversification breakdown
          </li>
          <li className="mb-2">
            AI-powered explanations for stocks and options
          </li>
          <li className="mb-2">
            Simple UI designed to reduce cognitive overload
          </li>
        </ul>
        <p className="leading-relaxed">
          Some features are actively being built, while others are planned and
          documented ahead of time.
        </p>
        <h2 className="text-lg font-bold">Architecture & Tech Stack</h2>
        <p className="leading-relaxed">
          Cherry is designed with separation of concerns and scalability in
          mind.
        </p>
        <ul className="ml-4 list-disc">
          <li className="mb-2 font-bold">Frontend</li>
          <ul className="ml-4 list-disc">
            <li className="mb-2">Next.js</li>
            <li className="mb-2">Tailwind CSS</li>
          </ul>
          <li className="mb-2 font-bold">Backend</li>
          <ul className="ml-4 list-disc">
            <li className="mb-2">Next.js (TypeScript)</li>
            <li className="mb-2">RESTful API architecture</li>
          </ul>
          <li className="mb-2 font-bold">AI</li>
          <ul className="ml-4 list-disc">
            <li className="mb-2">OpenAI API for financial explanations</li>
            <li className="mb-2">
              Prompting designed to focus on education, not predictions
            </li>
          </ul>
          <li className="mb-2 font-bold">Data</li>
          <ul className="ml-4 list-disc">
            <li className="mb-2">Supabase (PostgreSQL)</li>
            <li className="mb-2">External market data APIs</li>
          </ul>
          <li className="mb-2 font-bold">Authentication</li>
          <ul className="ml-4 list-disc">
            <li className="mb-2">Supabase Authentication</li>
          </ul>
        </ul>
        <h2 className="text-lg font-bold">Key Design Decisions</h2>
        <p className="leading-relaxed">
          I chose Next.js backend with TypeScript for its type safety, seamless
          integration with the frontend, and strong developer experience. AI
          services are kept separate from core data logic to avoid tight
          coupling. Explanations are prioritized over recommendations to avoid
          regulatory and ethical issues. The UI is intentionally minimal —
          investing is already stressful, the interface shouldn&apos;t add to
          it.
        </p>
        <h2 className="text-lg font-bold">Challenges & Tradeoffs</h2>
        <p className="leading-relaxed">
          Building Cherry came with real tradeoffs:
        </p>
        <ul className="ml-4 list-disc">
          <li className="mb-2 leading-relaxed">
            Financial APIs vary in structure and reliability.
          </li>
          <li className="mb-2 leading-relaxed">
            AI responses must be carefully constrained to avoid sounding like
            financial advice.
          </li>
          <li className="mb-2 leading-relaxed">
            Real-time data needs to be balanced against API limits and cost.
          </li>
          <li className="mb-2 leading-relaxed">
            Designing for beginners while still being useful to advanced users
            is difficult.
          </li>
        </ul>
        <p className="leading-relaxed">
          These constraints shaped many of the architectural and product
          decisions.
        </p>
        <h2 className="text-lg font-bold">What I&apos;d Improve Next</h2>
        <p className="leading-relaxed">
          With more time and resources, I would focus on:
        </p>
        <ul className="ml-4 list-disc">
          <li className="mb-2">Deeper portfolio risk analysis</li>
          <li className="mb-2">Backtesting tools for long-term strategies</li>
          <li className="mb-2">
            User-defined investment goals and projections
          </li>
          <li className="mb-2">
            More transparency around options strategies and Greeks
          </li>
          <li className="mb-2">
            Better caching and cost optimization across services
          </li>
        </ul>
        <h2 className="text-lg font-bold">Final Thoughts</h2>
        <p className="leading-relaxed">
          Cherry is both a product and a learning project.
        </p>
        <p className="leading-relaxed">
          It reflects how I approach software engineering: build intentionally,
          understand tradeoffs, and design systems that help people think more
          clearly — not react emotionally.
        </p>
        <p className="leading-relaxed">
          This project is still evolving, and that&apos;s intentional. If you
          would like to see or learn more about the project, you can check out
          the GitHub repository above and read the README.md file.
        </p>
      </div>
    </>
  );
};

export default page;
