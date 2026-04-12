"use client"

const FEATURES = [
  {
    tag: "[watcher]",
    title: "Real-time activity monitoring",
    description:
      "Monitors file creates, edits, and deletes with granular diff snapshots so the assistant sees your work unfold in order.",
    accent: "#b8bb26",
  },
  {
    tag: "[memory]",
    title: "Durable session memory",
    description:
      "Learns durable preferences and project decisions from chat history, then keeps them across restarts without replaying everything.",
    accent: "#fabd2f",
  },
  {
    tag: "[rolling-context]",
    title: "Rolling context windows",
    description:
      "Continuously summarizes chat, file events, and terminal activity so responses stay fast without dropping the thread.",
    accent: "#fe8019",
  },
  {
    tag: "[models]",
    title: "Multi-model support",
    description:
      "Powered by OpenRouter with support for Claude, GPT, and other frontier models through one terminal-native workflow.",
    accent: "#b8bb26",
  },
  {
    tag: "[tmux]",
    title: "Integrated dev shell",
    description:
      "Bootstraps a managed tmux session with chat and dev panes so you can code, run, and inspect without leaving the terminal.",
    accent: "#fabd2f",
  },
  {
    tag: "[shell-aware]",
    title: "Environment-aware execution",
    description:
      "Runs dev commands inside your native login shell to preserve aliases, PATH setup, and existing environment variables.",
    accent: "#fe8019",
  },
  {
    tag: "[relay]",
    title: "Real-time terminal relay",
    description:
      "Streams stdout and stderr into the session database so CHAVES can proactively explain failures while they happen.",
    accent: "#b8bb26",
  },
  {
    tag: "[search]",
    title: "DB-backed code search",
    description:
      "Indexes your project with SQLite FTS5 for instant project-wide lookups directly from the chat and command palette.",
    accent: "#fabd2f",
  },
  {
    tag: "[shield]",
    title: "Security and redaction",
    description:
      "Blocks sensitive files like .env, .pem, and .git data while redacting API keys before prompts leave your machine.",
    accent: "#fe8019",
  },
]

export function Features() {
  return (
    <section className="py-20 px-6 border-t" style={{ borderColor: "#3c3836" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // features
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-12" style={{ color: "#ebdbb2" }}>
          Built for real engineering sessions.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border" style={{ borderColor: "#3c3836" }}>
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} total={FEATURES.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  index,
  total,
}: {
  feature: (typeof FEATURES)[0]
  index: number
  total: number
}) {
  const cols = 3
  const isLastRow = index >= total - (total % cols || cols)
  const isRightEdge = (index + 1) % cols === 0

  return (
    <div
      className="p-6 flex flex-col gap-3 transition-colors"
      style={{
        borderRight: !isRightEdge ? "1px solid #3c3836" : "none",
        borderBottom: !isLastRow ? "1px solid #3c3836" : "none",
        backgroundColor: "#1d2021",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#282828")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#1d2021")}
    >
      <code className="text-xs" style={{ color: feature.accent }}>
        {feature.tag}
      </code>
      <h3 className="text-sm font-bold" style={{ color: "#ebdbb2" }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#928374" }}>
        {feature.description}
      </p>
    </div>
  )
}
