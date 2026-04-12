"use client";

import { useState } from "react";

export const DOC_SECTIONS = [
  {
    group: "Getting Started",
    items: [
      { id: "introduction", label: "Introduction" },
      { id: "installation", label: "Installation" },
      { id: "quickstart", label: "Quickstart" },
      { id: "commands", label: "Interactive Commands" },
    ],
  },
  {
    group: "Core Concepts",
    items: [
      { id: "file-watching", label: "File Watching" },
      { id: "diff-tracking", label: "Diff Tracking" },
      { id: "terminal-relay", label: "Terminal Relay" },
      { id: "tmux-integration", label: "tmux Integration" },
      { id: "session-memory", label: "Session Memory" },
      { id: "code-search", label: "Code Search" },
      { id: "suggestions", label: "Proactive Insights" },
    ],
  },
  {
    group: "Environment",
    items: [
      { id: "environment", label: "Environment Variables" },
      { id: "security", label: "Security & Privacy" },
      { id: "glow", label: "Glow Renderer" },
    ],
  },
  {
    group: "Reference",
    items: [
      { id: "cli-start", label: "bun start" },
      { id: "roadmap", label: "Roadmap" },
    ],
  },
];

interface DocsSidebarProps {
  activeId: string;
  onSelect: (id: string) => void;
}

export function DocsSidebar({ activeId, onSelect }: DocsSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="lg:hidden w-full flex items-center justify-between px-4 py-3 border-b text-sm font-bold"
        style={{
          borderColor: "#3c3836",
          color: "#ebdbb2",
          backgroundColor: "#282828",
        }}
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
      >
        <span style={{ color: "#928374" }}>
          <span style={{ color: "#b8bb26" }}>§</span> Docs navigation
        </span>
        <span style={{ color: "#928374" }}>{mobileOpen ? "▲" : "▼"}</span>
      </button>

      <aside
        className={`${mobileOpen ? "block" : "hidden"} lg:block w-full lg:w-56 shrink-0`}
        aria-label="Documentation navigation"
      >
        <nav className="flex flex-col gap-6 py-6 px-4">
          {DOC_SECTIONS.map((section) => (
            <div key={section.group} className="flex flex-col gap-1">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "#928374" }}
              >
                {section.group}
              </p>
              {section.items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelect(item.id);
                      setMobileOpen(false);
                    }}
                    className="text-left text-sm px-3 py-1.5 transition-colors w-full border-l-2"
                    style={{
                      color: isActive ? "#b8bb26" : "#928374",
                      borderLeftColor: isActive ? "#b8bb26" : "transparent",
                      backgroundColor: isActive ? "#282828" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color =
                          "#ebdbb2";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.currentTarget as HTMLElement).style.color =
                          "#928374";
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
