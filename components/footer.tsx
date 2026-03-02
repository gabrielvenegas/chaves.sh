"use client"

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: "#3c3836" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HatIcon />
              <span className="font-bold text-base" style={{ color: "#ebdbb2" }}>
                chaves
              </span>
            </div>
            <p className="text-xs italic" style={{ color: "#928374" }}>
              "The rubber duck that talks back."
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Docs", href: "#" },
              { label: "GitHub", href: "https://github.com" },
              { label: "Pricing", href: "#pricing" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs no-underline transition-colors"
                style={{ color: "#928374" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ebdbb2")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#928374")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between border-t pt-6" style={{ borderColor: "#3c3836" }}>
          <p className="text-xs" style={{ color: "#928374" }}>
            © 2026 Chaves. chaves.sh
          </p>
          <p className="text-xs" style={{ color: "#3c3836" }}>
            v0.1.0
          </p>
        </div>
      </div>
    </footer>
  )
}

function HatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="14" cy="19" rx="12" ry="3.5" fill="#928374" />
      <path d="M6 19 C6 19 7 10 14 9 C21 8 22 19 22 19" fill="#7c6f64" />
      <path d="M10 9.5 C10 9.5 11 6 14 5.5 C17 5 18 9.5 18 9.5" fill="#7c6f64" />
      <path d="M7 17 Q14 15 21 17" stroke="#fe8019" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
