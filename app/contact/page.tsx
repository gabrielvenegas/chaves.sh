"use client";

import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const CONTACT_CHANNELS = [
  {
    label: "GitHub repository",
    href: "https://github.com/gabrielvenegas/chaves.sh",
    description: "Track releases, inspect the code, and follow what ships next.",
  },
  {
    label: "Open an issue",
    href: "https://github.com/gabrielvenegas/chaves.sh/issues",
    description: "Report bugs, request features, or share friction in the current flow.",
  },
  {
    label: "Read the docs",
    href: "/docs",
    description: "Check setup details, commands, and runtime behavior before reaching out.",
    internal: true,
  },
];

export default function ContactPage() {
  return (
    <div
      className="min-h-screen font-mono"
      style={{ backgroundColor: "#1d2021", color: "#ebdbb2" }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // contact
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "#ebdbb2" }}
        >
          Contact CHAVES
        </h1>
        <p className="max-w-2xl text-sm sm:text-base mb-12" style={{ color: "#928374" }}>
          The project is still early, so the fastest way to reach us is through
          GitHub. Use the repository for updates, open issues for bugs or
          requests, and the docs for setup questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CONTACT_CHANNELS.map((channel) => {
            const content = (
              <div
                className="h-full border p-6 transition-colors"
                style={{ borderColor: "#3c3836", backgroundColor: "#282828" }}
              >
                <p className="text-xs mb-3" style={{ color: "#b8bb26" }}>
                  channel
                </p>
                <h2 className="text-lg font-semibold mb-3" style={{ color: "#ebdbb2" }}>
                  {channel.label}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "#928374" }}>
                  {channel.description}
                </p>
              </div>
            );

            return channel.internal ? (
              <Link key={channel.label} href={channel.href} className="no-underline">
                {content}
              </Link>
            ) : (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="no-underline"
              >
                {content}
              </a>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
