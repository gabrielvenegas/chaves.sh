"use client";

import { TerminalMockup } from "@/components/terminal-mockup";
import {
  CircleOffIcon,
  FlagTriangleRightIcon,
  ShieldCheck,
} from "lucide-react";

export function Hero() {
  return (
    <section
      className="pt-28 pb-20 px-6 font-mono"
      style={{ backgroundColor: "#1d2021" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Label */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 text-xs border"
          style={{ borderColor: "#3c3836", color: "#928374" }}
        >
          <span style={{ color: "#b8bb26" }}>●</span>
          <span>v0.1.0 — early access</span>
        </div>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance"
          style={{ color: "#ebdbb2" }}
        >
          Your codebase has a lot to say.
          <br />
          <span style={{ color: "#b8bb26" }}>Chaves is listening.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl text-sm sm:text-base leading-relaxed"
          style={{ color: "#928374" }}
        >
          Chaves watches your files, tracks your diffs, and proactively suggests
          what to work on next — without you asking. Like a rubber duck that
          actually talks back.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#install"
            className="inline-flex items-center px-6 py-2.5 text-sm font-bold transition-colors no-underline"
            style={{ backgroundColor: "#b8bb26", color: "#1d2021" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "#d5d930")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "#b8bb26")
            }
          >
            $ get started free
          </a>
          <a
            href="https://github.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold border transition-colors no-underline"
            style={{
              borderColor: "#3c3836",
              color: "#928374",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#928374";
              el.style.color = "#ebdbb2";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#3c3836";
              el.style.color = "#928374";
            }}
          >
            <GitHubIcon />
            View on GitHub
          </a>
        </div>

        {/* Terminal mockup */}
        <div className="w-full mt-4">
          <TerminalMockup />
        </div>

        <div
          className="mt-4 flex items-start gap-2 px-4 py-3 border text-xs text-left bg-[#fabd2f]/5"
          style={{
            borderColor: "#fabd2f",
            color: "#fabd2f",
          }}
        >
          <ShieldCheck className="w-4 h-4" />
          <span style={{ color: "#d5c4a1" }}>
            Chaves never reads{" "}
            <code className="font-bold" style={{ color: "#fabd2f" }}>
              .env
            </code>{" "}
            files or API keys — our{" "}
            <a href="#" style={{ color: "#fabd2f" }}>
              powerful shield parser
            </a>{" "}
            keeps your secrets safe.
          </span>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
