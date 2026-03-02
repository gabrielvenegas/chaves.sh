"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  lang?: string;
}

export function CodeBlock({ code, lang = "bash" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="relative my-4 border"
      style={{ borderColor: "#3c3836", backgroundColor: "#282828" }}
    >
      <div
        className="flex items-center justify-between px-4 py-2 border-b text-xs"
        style={{ borderColor: "#3c3836", color: "#928374" }}
      >
        <span>{lang}</span>
        <button
          onClick={handleCopy}
          className="text-xs px-2 py-0.5 border transition-colors"
          style={{
            borderColor: "#3c3836",
            color: copied ? "#b8bb26" : "#928374",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.color = "#ebdbb2")
          }
          onMouseLeave={(e) => {
            if (!copied)
              (e.currentTarget as HTMLElement).style.color = "#928374";
          }}
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
      <pre
        className="px-4 py-4 overflow-x-auto text-sm leading-relaxed"
        style={{ color: "#ebdbb2" }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}
