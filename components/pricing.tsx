"use client";

const PLANS = [
  {
    tag: "[SEARCH]",
    name: "Semantic search",
    step: "01",
    status: "planned",
    recommended: false,
    cta: "Read docs",
    features: [
      "Move beyond keyword-only lookups",
      "Add local embeddings on top of FTS5",
      "Answer vague codebase questions by meaning",
      "Keep project search fast and local",
    ],
  },
  {
    tag: "[DEBUG]",
    name: "Automated debugging",
    step: "02",
    status: "planned",
    recommended: false,
    cta: "Read docs",
    features: [
      "Detect stack traces from tmux relay",
      "Locate likely buggy files automatically",
      "Suggest fixes from current session context",
      "Tighten failure analysis loops",
    ],
  },
  {
    tag: "[TRACKING]",
    name: "Smarter change tracking",
    step: "03",
    status: "in progress",
    recommended: true,
    cta: "Read docs",
    features: [
      "Make summaries more surgical",
      "Improve context quality per token",
      "Stay model-agnostic across providers",
      "Reduce noisy change churn",
    ],
  },
  {
    tag: "[AGENT]",
    name: "Autonomous proactivity",
    step: "04",
    status: "planned",
    recommended: false,
    cta: "Read docs",
    features: [
      "Run multi-step research tasks",
      "Validate code paths before suggesting changes",
      "Act more like a peer programmer",
      "Stay permission-aware while assisting",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="roadmap"
      className="py-20 px-6 border-t"
      style={{ borderColor: "#3c3836" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // roadmap
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-12"
          style={{ color: "#ebdbb2" }}
        >
          What CHAVES is shipping next.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {PLANS.map((plan) => (
            <PricingCard key={plan.tag} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }: { plan: (typeof PLANS)[0] }) {
  return (
    <div
      className="flex flex-col p-6 border relative"
      style={{
        borderColor: plan.recommended ? "#b8bb26" : "#3c3836",
        backgroundColor: plan.recommended ? "#282828" : "#1d2021",
      }}
    >
      {plan.recommended && (
        <div
          className="absolute -top-px left-0 right-0 h-0.5"
          style={{ backgroundColor: "#b8bb26" }}
        />
      )}

      {/* Tag */}
      <code
        className="text-xs mb-4 font-bold"
        style={{ color: plan.recommended ? "#b8bb26" : "#928374" }}
      >
        {plan.tag}
      </code>

      {/* Milestone */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-3xl font-bold" style={{ color: "#ebdbb2" }}>
            {plan.step}
          </span>
          <span
            className="text-[11px] uppercase tracking-[0.18em]"
            style={{ color: plan.recommended ? "#b8bb26" : "#928374" }}
          >
            {plan.status}
          </span>
        </div>
        <p className="text-base font-semibold" style={{ color: "#d5c4a1" }}>
          {plan.name}
        </p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-8 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span style={{ color: "#b8bb26", flexShrink: 0 }}>+</span>
            <span style={{ color: "#928374" }}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="/docs"
        className="text-center py-2.5 text-sm font-bold border transition-colors no-underline"
        style={
          plan.recommended
            ? {
                backgroundColor: "#b8bb26",
                color: "#1d2021",
                borderColor: "#b8bb26",
              }
            : {
                backgroundColor: "transparent",
                color: "#928374",
                borderColor: "#3c3836",
              }
        }
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          if (plan.recommended) {
            el.style.backgroundColor = "#d5d930";
          } else {
            el.style.borderColor = "#928374";
            el.style.color = "#ebdbb2";
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          if (plan.recommended) {
            el.style.backgroundColor = "#b8bb26";
          } else {
            el.style.borderColor = "#3c3836";
            el.style.color = "#928374";
          }
        }}
      >
        {plan.cta}
      </a>
    </div>
  );
}
