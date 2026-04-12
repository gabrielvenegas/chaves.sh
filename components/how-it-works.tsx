const STEPS = [
  {
    label: "$ bun start ./project",
    title: "Start in your repo",
    description:
      "Run CHAVES against your project and it immediately indexes the codebase, detects your language mix, and begins watching file activity.",
  },
  {
    label: "// tmux + relay online",
    title: "Mirror the live session",
    description:
      "When a dev command is configured, CHAVES boots a tmux layout, preserves your login shell environment, and captures stdout and stderr for analysis.",
  },
  {
    label: "> insight ready",
    title: "Reason over context",
    description:
      "Recent diffs, indexed code, chat history, and terminal errors get compacted into rolling context so CHAVES can suggest the next step before you ask.",
  },
]

export function HowItWorks() {
  return (
    <section id="features" className="py-20 px-6 border-t" style={{ borderColor: "#3c3836" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // how it works
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-12" style={{ color: "#ebdbb2" }}>
          One shell. Full awareness.
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border" style={{ borderColor: "#3c3836" }}>
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="p-6 flex flex-col gap-3"
              style={{
                borderRight: i < STEPS.length - 1 ? "1px solid #3c3836" : "none",
                borderBottom: "none",
              }}
            >
              {/* Step number + label */}
              <div className="flex items-center gap-3">
                <span
                  className="text-xs px-2 py-0.5 border"
                  style={{ borderColor: "#3c3836", color: "#928374" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <code
                  className="text-xs font-bold"
                  style={{ color: i === 0 ? "#b8bb26" : i === 1 ? "#928374" : "#fe8019" }}
                >
                  {step.label}
                </code>
              </div>

              <h3 className="text-base font-bold" style={{ color: "#ebdbb2" }}>
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: "#928374" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
