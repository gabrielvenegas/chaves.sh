"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { DocsSidebar, DOC_SECTIONS } from "@/components/docs-sidebar";
import { DOC_CONTENT } from "@/components/docs-content";

export default function DocsPage() {
  const firstId = DOC_SECTIONS[0].items[0].id;
  const [activeId, setActiveId] = useState(firstId);

  const allItems = DOC_SECTIONS.flatMap((s) => s.items);
  const currentIndex = allItems.findIndex((i) => i.id === activeId);
  const prev = allItems[currentIndex - 1] ?? null;
  const next = allItems[currentIndex + 1] ?? null;

  return (
    <div
      className="min-h-screen font-mono"
      style={{ backgroundColor: "#1d2021", color: "#ebdbb2" }}
    >
      <Navbar />

      <div className="max-w-6xl mx-auto pt-14">
        {/* Docs header */}
        <div className="px-6 py-10 border-b" style={{ borderColor: "#3c3836" }}>
          <p className="text-xs mb-2" style={{ color: "#928374" }}>
            <span style={{ color: "#b8bb26" }}>~/</span>chaves / docs
          </p>
          <h1
            className="text-3xl font-bold tracking-tight text-balance"
            style={{ color: "#ebdbb2" }}
          >
            Documentation
          </h1>
          <p className="mt-2 text-sm" style={{ color: "#928374" }}>
            Everything you need to know about installing, configuring, and using
            Chaves.
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-col lg:flex-row min-h-[70vh]">
          {/* Sidebar */}
          <div className="border-r" style={{ borderColor: "#3c3836" }}>
            <DocsSidebar activeId={activeId} onSelect={setActiveId} />
          </div>

          {/* Content */}
          <main className="flex-1 px-6 py-8 max-w-3xl">
            {DOC_CONTENT[activeId] ?? (
              <p className="text-sm" style={{ color: "#928374" }}>
                Section not found.
              </p>
            )}

            {/* Prev / Next navigation */}
            <div
              className="flex items-center justify-between mt-12 pt-6 border-t"
              style={{ borderColor: "#3c3836" }}
            >
              {prev ? (
                <button
                  onClick={() => setActiveId(prev.id)}
                  className="flex flex-col items-start text-sm transition-colors group"
                  style={{ color: "#928374" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ebdbb2")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#928374")
                  }
                >
                  <span className="text-xs mb-0.5" style={{ color: "#3c3836" }}>
                    ← previous
                  </span>
                  {prev.label}
                </button>
              ) : (
                <span />
              )}
              {next ? (
                <button
                  onClick={() => setActiveId(next.id)}
                  className="flex flex-col items-end text-sm transition-colors"
                  style={{ color: "#928374" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#ebdbb2")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#928374")
                  }
                >
                  <span className="text-xs mb-0.5" style={{ color: "#3c3836" }}>
                    next →
                  </span>
                  {next.label}
                </button>
              ) : (
                <span />
              )}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
