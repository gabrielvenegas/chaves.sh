"use client";

import { useEffect, useState, useRef } from "react";

const TYPEWRITER_LINES = [
  { role: "SYSTEM", text: "Watching ./src/components/ for changes..." },
  { role: "SYSTEM", text: "Diff detected in FloatingChat.tsx (+47 lines)" },
  {
    role: "CHAVES",
    text: "Hey, looks like you're building out a FloatingChat component — you'll probably want to wire up the interaction logic next, right?",
    highlight: "FloatingChat",
  },
  { role: "SYSTEM", text: "Analyzing component tree..." },
  {
    role: "CHAVES",
    text: "I'd suggest adding an onClose handler and tracking the open/close state. Also you might be missing keyboard accessibility on the toggle button.",
    highlight: null,
  },
];

type ChatLine = {
  role: "SYSTEM" | "CHAVES" | "YOU";
  text: string;
  highlight?: string | null;
  done: boolean;
};

export function TerminalMockup() {
  const [lines, setLines] = useState<ChatLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= TYPEWRITER_LINES.length) return;

    const delay = currentLineIndex === 0 ? 800 : 400;
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  useEffect(() => {
    if (!isTyping) return;
    if (currentLineIndex >= TYPEWRITER_LINES.length) return;

    const line = TYPEWRITER_LINES[currentLineIndex];
    const fullText = line.text;

    if (currentText.length < fullText.length) {
      const speed = line.role === "SYSTEM" ? 18 : 30;
      const timer = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      // Line complete
      setLines((prev) => [
        ...prev,
        {
          role: line.role as ChatLine["role"],
          text: fullText,
          highlight: line.highlight,
          done: true,
        },
      ]);
      setCurrentText("");
      setIsTyping(false);
      setCurrentLineIndex((i) => i + 1);
    }
  }, [isTyping, currentText, currentLineIndex]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, currentText]);

  function renderText(text: string, highlight?: string | null) {
    if (!highlight)
      return (
        <span className="text-left" style={{ color: "#ebdbb2" }}>
          {text}
        </span>
      );
    const parts = text.split(highlight);
    return (
      <>
        {parts.map((part, i) => (
          <span key={i}>
            <span style={{ color: "#ebdbb2" }}>{part}</span>
            {i < parts.length - 1 && (
              <span style={{ color: "#fe8019", fontWeight: "bold" }}>
                {highlight}
              </span>
            )}
          </span>
        ))}
      </>
    );
  }

  const currentLine = TYPEWRITER_LINES[currentLineIndex];

  return (
    <div
      className="w-full max-w-3xl mx-auto border font-mono text-sm"
      style={{ backgroundColor: "#1d2021", borderColor: "#3c3836" }}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-4 py-2 border-b"
        style={{ backgroundColor: "#282828", borderColor: "#3c3836" }}
      >
        <div className="flex items-center gap-2">
          <HatIconSmall />
          <span
            className="font-bold tracking-widest"
            style={{ color: "#ebdbb2" }}
          >
            CHAVES
          </span>
        </div>
        <span style={{ color: "#fe8019" }}>.: Watching...</span>
      </div>

      {/* Chat area */}
      <div
        ref={scrollRef}
        className="p-4 overflow-y-auto flex flex-col gap-3 items-start"
        style={{ minHeight: "280px", maxHeight: "360px" }}
      >
        {lines.map((line, i) => (
          <div key={i} className="flex gap-2 leading-relaxed w-full text-left">
            {line.role === "SYSTEM" && (
              <>
                <span style={{ color: "#b8bb26", flexShrink: 0 }}>SYSTEM:</span>
                <span style={{ color: "#928374" }}>{line.text}</span>
              </>
            )}
            {line.role === "CHAVES" && (
              <>
                <span style={{ color: "#fabd2f", flexShrink: 0 }}>CHAVES:</span>
                <span>{renderText(line.text, line.highlight)}</span>
              </>
            )}
          </div>
        ))}

        {/* Currently typing line */}
        {isTyping && currentLine && currentText.length > 0 && (
          <div className="flex gap-2 leading-relaxed text-left w-full">
            {currentLine.role === "SYSTEM" && (
              <>
                <span style={{ color: "#b8bb26", flexShrink: 0 }}>SYSTEM:</span>
                <span style={{ color: "#928374" }}>{currentText}</span>
              </>
            )}
            {currentLine.role === "CHAVES" && (
              <>
                <span style={{ color: "#fabd2f", flexShrink: 0 }}>CHAVES:</span>
                <span style={{ color: "#ebdbb2" }}>{currentText}</span>
              </>
            )}
            <span
              className="inline-block w-2 h-4 ml-0.5 align-middle"
              style={{
                backgroundColor: "#b8bb26",
                opacity: cursorVisible ? 1 : 0,
                transition: "opacity 0.1s",
                marginTop: "1px",
              }}
            />
          </div>
        )}

        {/* Waiting cursor */}
        {!isTyping &&
          currentLineIndex < TYPEWRITER_LINES.length &&
          currentText.length === 0 && (
            <div className="flex gap-2">
              <span style={{ color: "#928374" }}>...</span>
            </div>
          )}
      </div>

      {/* Input area */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-t"
        style={{ borderColor: "#3c3836", backgroundColor: "#282828" }}
      >
        <span style={{ color: "#928374" }}>You</span>
        <span style={{ color: "#3c3836" }}>│</span>
        <span style={{ color: "#928374" }}>Ask Chaves anything...</span>
        <span
          className="inline-block w-2 h-4 ml-1"
          style={{
            backgroundColor: "#928374",
            opacity: cursorVisible ? 0.6 : 0,
          }}
        />
      </div>
    </div>
  );
}

function HatIconSmall() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse cx="14" cy="19" rx="12" ry="3.5" fill="#928374" />
      <path d="M6 19 C6 19 7 10 14 9 C21 8 22 19 22 19" fill="#7c6f64" />
      <path
        d="M10 9.5 C10 9.5 11 6 14 5.5 C17 5 18 9.5 18 9.5"
        fill="#7c6f64"
      />
      <path
        d="M7 17 Q14 15 21 17"
        stroke="#fe8019"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
