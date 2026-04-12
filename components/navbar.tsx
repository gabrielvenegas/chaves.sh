"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const githubHref = "https://github.com/gabrielvenegas/chaves.sh";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b font-mono"
      style={{ backgroundColor: "#1d2021", borderColor: "#3c3836" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
          style={{ color: "#ebdbb2" }}
        >
          <Image src="/logo.png" alt="chaves logo" width={20} height={20} />

          <span className="text-lg font-mono font-bold tracking-tight">
            chaves
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Roadmap", "Blog", "Docs", "Contact"].map((item) => (
            <Link
              key={item}
              href={
                item.toLowerCase() === "docs"
                  ? "/docs"
                  : item.toLowerCase() === "blog"
                    ? "/blog"
                  : item.toLowerCase() === "contact"
                    ? "/contact"
                    : `/#${item.toLowerCase()}`
              }
              className="text-sm transition-colors no-underline"
              style={{ color: "#928374" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#ebdbb2")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#928374")
              }
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold border transition-colors no-underline"
            style={{
              borderColor: "#3c3836",
              color: "#928374",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#928374";
              el.style.color = "#ebdbb2";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "#3c3836";
              el.style.color = "#928374";
            }}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="/#install"
            className="inline-flex items-center px-4 py-1.5 text-sm font-bold border transition-colors no-underline"
            style={{
              borderColor: "#b8bb26",
              color: "#b8bb26",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#b8bb26";
              el.style.color = "#1d2021";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#b8bb26";
            }}
          >
            Install now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-sm"
          style={{ color: "#928374" }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-4 flex flex-col gap-4"
          style={{ borderTop: "1px solid #3c3836" }}
        >
          {["Features", "Roadmap", "Blog", "Docs", "Contact"].map((item) =>
            item === "Docs" || item === "Contact" || item === "Blog" ? (
            <Link
              key={item}
              href={
                item === "Docs"
                  ? "/docs"
                  : item === "Blog"
                    ? "/blog"
                    : "/contact"
              }
              className="text-sm no-underline pt-3"
              style={{ color: "#928374" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
            ) : (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm no-underline pt-3"
              style={{ color: "#928374" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
            )
          )}
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm no-underline"
            style={{ color: "#928374" }}
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
          <a
            href="/#install"
            className="text-sm font-bold no-underline"
            style={{ color: "#b8bb26" }}
            onClick={() => setMenuOpen(false)}
          >
            Install now
          </a>
        </div>
      )}
    </header>
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
