"use client";

const PLANS = [
  {
    tag: "[FREE]",
    name: "Free",
    price: "$0",
    period: "/mo",
    recommended: false,
    cta: "Get started",
    features: [
      "2h sessions per day",
      "Slow model",
      "Managed inference",
      "1 project",
    ],
  },
  {
    tag: "[HACKER]",
    name: "Hacker",
    price: "$2",
    period: "/mo",
    recommended: false,
    cta: "Get started",
    features: [
      "Unlimited sessions",
      "Fast model",
      "Managed inference",
      "Unlimited projects",
    ],
  },
  {
    tag: "[PRO]",
    name: "Pro",
    price: "$5",
    period: "/mo",
    recommended: true,
    cta: "Go Pro",
    features: [
      "Unlimited sessions",
      "Faster models",
      "Managed inference + BYOK",
      "Unlimited projects",
      "Priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 px-6 border-t"
      style={{ borderColor: "#3c3836" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // pricing
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold mb-12"
          style={{ color: "#ebdbb2" }}
        >
          Simple, honest pricing.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-3xl font-bold" style={{ color: "#ebdbb2" }}>
          {plan.price}
        </span>
        <span className="text-sm" style={{ color: "#928374" }}>
          {plan.period}
        </span>
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
        href="#install"
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
