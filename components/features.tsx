"use client"

const FEATURES = [
  {
    tag: "[proactive]",
    title: "Proactive suggestions",
    description:
      "Chaves doesn't wait to be asked. It watches your diffs and speaks up when it has something useful to say.",
    accent: "#b8bb26",
  },
  {
    tag: "[rubber-duck]",
    title: "Rubber Duck mode",
    description:
      "Explain your thinking to Chaves and let it reflect it back. Based on the Rubber Duck Debugging technique from The Pragmatic Programmer.",
    accent: "#fabd2f",
  },
  {
    tag: "[file-watch]",
    title: "File watching & diff tracking",
    description:
      "Always aware of what changed, when, and in what context. Chaves builds a live model of your work session.",
    accent: "#fe8019",
  },
  {
    tag: "[byok]",
    title: "BYOK — Bring Your Own Key",
    description:
      "Use your own API keys for LLM inference. Full control over your model provider and cost. Available on the $5 plan.",
    accent: "#b8bb26",
  },
  {
    tag: "[models]",
    title: "Massive model support",
    description:
      "OpenAI, Gemini, Grok, DeepSeek, Moonshot, Kimi, GLM, and more via OpenRouter. Including leading Chinese frontier models.",
    accent: "#fabd2f",
  },
  {
    tag: "[managed]",
    title: "Managed inference",
    description:
      "Don't want to deal with API keys? We handle it. Managed inference is available on all plans, including free.",
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
          Everything you need. Nothing you don{"'"}t.
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
