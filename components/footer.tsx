"use client"

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: "#3c3836" }}>
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-2 no-underline">
              <Image src="/logo.png" alt="chaves logo" width={22} height={22} />
              <span className="font-bold text-base" style={{ color: "#ebdbb2" }}>
                chaves
              </span>
            </Link>
            <p className="text-xs italic" style={{ color: "#928374" }}>
              "The rubber duck that talks back."
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              { label: "Blog", href: "/blog" },
              { label: "Docs", href: "/docs" },
              { label: "Install", href: "/#install" },
              { label: "Roadmap", href: "/#roadmap" },
              { label: "Why", href: "/why" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs no-underline transition-colors"
                style={{ color: "#928374" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ebdbb2")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#928374")}
              >
                {link.label}
              </Link>
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
