"use client"

import { useState } from "react"

const INSTALL_METHODS = [
  {
    label: "curl",
    code: `curl -fsSL https://chaves.sh/install | sh`,
  },
  {
    label: "npm",
    code: `npm install -g chaves`,
  },
  {
    label: "bun",
    code: `bun add -g chaves`,
  },
  {
    label: "brew",
    code: `brew install chaves`,
  },
]

export function Install() {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(INSTALL_METHODS[active].code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <section id="install" className="py-20 px-6 border-t" style={{ borderColor: "#3c3836" }}>
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // install
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "#ebdbb2" }}>
          Get Chaves running in seconds.
        </h2>
        <p className="text-sm mb-10" style={{ color: "#928374" }}>
          No daemon, no config file, no bullshit. Just run it.
        </p>

        {/* Tabs */}
        <div className="flex gap-0 border-b mb-0" style={{ borderColor: "#3c3836" }}>
          {INSTALL_METHODS.map((method, i) => (
            <button
              key={method.label}
              onClick={() => setActive(i)}
              className="px-4 py-2 text-sm font-bold border-b-2 transition-colors -mb-px"
              style={{
                borderBottomColor: active === i ? "#b8bb26" : "transparent",
                color: active === i ? "#b8bb26" : "#928374",
                backgroundColor: "transparent",
              }}
            >
              {method.label}
            </button>
          ))}
        </div>

        {/* Code block */}
        <div
          className="border border-t-0 px-5 py-4 flex items-center justify-between gap-4"
          style={{ backgroundColor: "#282828", borderColor: "#3c3836" }}
        >
          <code className="text-sm" style={{ color: "#b8bb26" }}>
            <span style={{ color: "#928374" }}>$ </span>
            {INSTALL_METHODS[active].code}
          </code>
          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 border shrink-0 transition-colors"
            style={{
              borderColor: copied ? "#b8bb26" : "#3c3836",
              color: copied ? "#b8bb26" : "#928374",
              backgroundColor: "transparent",
            }}
            aria-label="Copy to clipboard"
          >
            {copied ? "copied!" : "copy"}
          </button>
        </div>

        {/* After install */}
        <div className="mt-6" style={{ borderLeft: "2px solid #3c3836", paddingLeft: "1rem" }}>
          <p className="text-xs mb-2" style={{ color: "#928374" }}>
            Then start watching your project:
          </p>
          <code className="text-sm" style={{ color: "#fe8019" }}>
            $ chaves start ./my-project
          </code>
        </div>
      </div>
    </section>
  )
}
