"use client"

import { useState } from "react"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b font-mono"
      style={{ backgroundColor: "#1d2021", borderColor: "#3c3836" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 no-underline" style={{ color: "#ebdbb2" }}>
          <HatIcon />
          <span className="text-lg font-bold tracking-tight">chaves</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Features", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm transition-colors no-underline"
              style={{ color: "#928374" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ebdbb2")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#928374")}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#install"
          className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-bold border transition-colors no-underline"
          style={{ borderColor: "#b8bb26", color: "#b8bb26", backgroundColor: "transparent" }}
          onMouseEnter={(e) => {
            const el = e.currentTarget
            el.style.backgroundColor = "#b8bb26"
            el.style.color = "#1d2021"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget
            el.style.backgroundColor = "transparent"
            el.style.color = "#b8bb26"
          }}
        >
          Install now
        </a>

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
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ borderTop: "1px solid #3c3836" }}>
          {["Features", "Pricing", "Docs"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm no-underline pt-3"
              style={{ color: "#928374" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#install"
            className="text-sm font-bold no-underline"
            style={{ color: "#b8bb26" }}
            onClick={() => setMenuOpen(false)}
          >
            Install now
          </a>
        </div>
      )}
    </header>
  )
}

function HatIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Brim */}
      <ellipse cx="14" cy="19" rx="12" ry="3.5" fill="#928374" />
      {/* Crown */}
      <path d="M6 19 C6 19 7 10 14 9 C21 8 22 19 22 19" fill="#7c6f64" />
      {/* Top dent */}
      <path d="M10 9.5 C10 9.5 11 6 14 5.5 C17 5 18 9.5 18 9.5" fill="#7c6f64" />
      {/* Band */}
      <path d="M7 17 Q14 15 21 17" stroke="#fe8019" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
