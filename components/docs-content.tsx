"use client";

import { CodeBlock } from "@/components/docs-code-block";

const C = ({ children }: { children: React.ReactNode }) => (
  <code
    className="text-sm px-1.5 py-0.5"
    style={{
      backgroundColor: "#282828",
      color: "#b8bb26",
      border: "1px solid #3c3836",
    }}
  >
    {children}
  </code>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2
    className="text-xl font-bold mt-10 mb-4 text-balance"
    style={{ color: "#ebdbb2" }}
  >
    {children}
  </h2>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-base font-bold mt-6 mb-2" style={{ color: "#fabd2f" }}>
    {children}
  </h3>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-sm leading-relaxed mb-4"
    style={{ color: "#ebdbb2", opacity: 0.85 }}
  >
    {children}
  </p>
);

const Li = ({ children }: { children: React.ReactNode }) => (
  <li
    className="text-sm leading-relaxed mb-1"
    style={{ color: "#ebdbb2", opacity: 0.85 }}
  >
    <span style={{ color: "#b8bb26" }}>→</span> {children}
  </li>
);

export const DOC_CONTENT: Record<string, React.ReactNode> = {
  introduction: (
    <div>
      <H2>Introduction</H2>
      <P>
        CHAVES is an intelligent coding companion for engineering sessions. It
        watches your project, tracks diffs, relays terminal activity, and
        provides contextual AI help directly in the terminal.
      </P>
      <P>
        Instead of acting like a detached chat box, CHAVES stays aware of your
        current repo, recent edits, running commands, and prior decisions. The
        result is proactive guidance grounded in what you are actually doing.
      </P>
      <H3>What makes Chaves different?</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Tracks file creates, edits, and deletes with granular diff history</Li>
        <Li>Bootstraps tmux and relays stdout/stderr from your dev process</Li>
        <Li>Keeps durable memory of preferences and architecture decisions</Li>
        <Li>Searches indexed code with SQLite FTS5 and protects sensitive files</Li>
      </ul>
    </div>
  ),

  installation: (
    <div>
      <H2>Installation</H2>
      <P>
        CHAVES runs as a Bun project. Install dependencies locally, then add
        Glow so markdown summaries render cleanly inside the terminal UI.
      </P>
      <H3>Install dependencies</H3>
      <CodeBlock code={`bun install`} lang="bash" />
      <H3>Install Glow (macOS)</H3>
      <CodeBlock code={`brew install glow`} lang="bash" />
      <H3>Other platforms</H3>
      <P>
        Install Glow from the official project page if you are not on macOS.
        CHAVES uses it to render markdown summaries in the terminal.
      </P>
      <P>
        You also need <C>OPENROUTER_API_KEY</C> in your environment before
        starting a session.
      </P>
    </div>
  ),

  quickstart: (
    <div>
      <H2>Quickstart</H2>
      <P>Start a session against the project you want CHAVES to observe.</P>
      <H3>1. Set your API key</H3>
      <CodeBlock code={`export OPENROUTER_API_KEY=your_key_here`} lang="bash" />
      <H3>2. Launch CHAVES</H3>
      <CodeBlock code={`bun start [project-path]`} lang="bash" />
      <P>
        If you omit <C>[project-path]</C>, CHAVES watches the current
        directory. On startup it can index the repo, inspect recent activity,
        and begin collecting diffs immediately.
      </P>
      <H3>3. Explore session state</H3>
      <CodeBlock
        code={`/help\n/history 5\n/diffs 10`}
        lang="bash"
      />
    </div>
  ),

  commands: (
    <div>
      <H2>Interactive Commands</H2>
      <P>
        CHAVES exposes the current session directly through terminal commands
        in the chat pane.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <C>/help</C> shows the full command list
        </Li>
        <Li>
          <C>/setup</C> configures models and languages
        </Li>
        <Li>
          <C>/model list</C> browses OpenRouter model options
        </Li>
        <Li>
          <C>/history [n]</C> reviews recent chat history
        </Li>
        <Li>
          <C>/diffs [n]</C> lists recent diff snapshots
        </Li>
        <Li>
          <C>/diff &lt;id&gt;</C> opens one specific change record
        </Li>
      </ul>
    </div>
  ),

  "file-watching": (
    <div>
      <H2>File Watching</H2>
      <P>
        CHAVES monitors project activity in real time, including file creation,
        modification, and deletion events. Those events are stored as granular
        snapshots so the assistant can reason about implementation flow.
      </P>
      <H3>What gets watched</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Active project files as they are created, edited, or removed</Li>
        <Li>Session timing signals like active versus idle periods</Li>
        <Li>Language metadata that improves indexing and model context</Li>
      </ul>
      <H3>What is ignored by default</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Sensitive and irrelevant paths controlled by the shield layer</Li>
        <Li>Files explicitly blocked from model access, such as secrets</Li>
      </ul>
    </div>
  ),

  "diff-tracking": (
    <div>
      <H2>Diff Tracking</H2>
      <P>
        Every file change is converted into a unified diff record so CHAVES can
        reconstruct what changed, when it changed, and how that change relates
        to the rest of the session.
      </P>
      <P>
        Those diff records feed a rolling context window used to:
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Infer your current goal and implementation focus</Li>
        <Li>Generate short-term working memory without replaying whole files</Li>
        <Li>Support commands like <C>/diffs</C> and <C>/diff</C></Li>
      </ul>
    </div>
  ),

  "terminal-relay": (
    <div>
      <H2>Terminal Relay</H2>
      <P>
        CHAVES can capture stdout and stderr from your development process in
        real time. That output is written into the session database so the
        assistant can spot errors as they happen.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Streams live logs for proactive debugging assistance</Li>
        <Li>Stores terminal context alongside diffs and chat history</Li>
        <Li>Surfaces likely failure points before you ask for help</Li>
      </ul>
    </div>
  ),

  "tmux-integration": (
    <div>
      <H2>tmux Integration</H2>
      <P>
        When a development command is configured, CHAVES boots a managed tmux
        session with a split-pane layout for chat and your dev shell.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Uses your native login shell so aliases and env vars stay intact</Li>
        <Li>Separates the AI pane from the running dev process cleanly</Li>
        <Li>Supports fast pane switching while keeping context synchronized</Li>
      </ul>
    </div>
  ),

  "session-memory": (
    <div>
      <H2>Session Memory</H2>
      <P>
        CHAVES stores durable facts extracted from chat history, such as coding
        preferences, architectural choices, and project-specific decisions.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Passive preference learning from real conversations</Li>
        <Li>Rolling summaries that preserve the thread across long sessions</Li>
        <Li>Lower token usage because high-value context is compacted over time</Li>
      </ul>
    </div>
  ),

  "code-search": (
    <div>
      <H2>Code Search</H2>
      <P>
        CHAVES indexes the codebase into SQLite FTS5 so you can query the
        project quickly from the terminal without external infrastructure.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Project-wide full-text lookup across indexed files</Li>
        <Li>Incremental updates on changed files to reduce I/O</Li>
        <Li>Local-first storage in <C>.chaves.db</C> inside the repo</Li>
      </ul>
    </div>
  ),

  suggestions: (
    <div>
      <H2>Proactive Insights</H2>
      <P>
        CHAVES analyzes recent file activity, chat history, indexed code, and
        terminal output to infer what you are doing and what should happen next.
      </P>
      <H3>Typical outputs</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Next-step suggestions after a meaningful code change</Li>
        <Li>Debugging hints when stderr or stack traces appear</Li>
        <Li>Related-file reminders based on implementation patterns</Li>
        <Li>Session summaries that explain what changed and why</Li>
      </ul>
    </div>
  ),

  environment: (
    <div>
      <H2>Environment Variables</H2>
      <P>
        These environment variables affect startup and runtime behavior.
      </P>
      <CodeBlock
        code={`OPENROUTER_API_KEY=your_key_here
CHAVES_DEBUG=true
CHAVES_INDEX_ON_START=false`}
        lang="bash"
      />
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <C>OPENROUTER_API_KEY</C> is required for model access
        </Li>
        <Li>
          <C>CHAVES_DEBUG</C> enables detailed logs
        </Li>
        <Li>
          <C>CHAVES_INDEX_ON_START=false</C> skips initial indexing
        </Li>
      </ul>
    </div>
  ),

  security: (
    <div>
      <H2>Security & Privacy</H2>
      <P>
        CHAVES includes a shield layer that prevents sensitive material from
        reaching the model and keeps operational data stored locally.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Blocks sensitive files such as <C>.env</C>, <C>.pem</C>, and <C>.git</C></Li>
        <Li>Redacts API keys and likely secrets before prompt construction</Li>
        <Li>Stores logs, diffs, and history locally in <C>.chaves.db</C></Li>
      </ul>
    </div>
  ),

  glow: (
    <div>
      <H2>Glow Renderer</H2>
      <P>
        Glow is used to render markdown summaries and richer terminal responses.
        Without it, the core workflow still exists, but the output experience is
        reduced.
      </P>
      <CodeBlock code={`brew install glow`} lang="bash" />
    </div>
  ),

  "cli-start": (
    <div>
      <H2>bun start</H2>
      <P>Launches CHAVES against the current directory or a provided path.</P>
      <CodeBlock code={`bun start [project-path]`} lang="bash" />
      <P>
        If no path is provided, CHAVES watches the current working directory.
        Startup can include indexing, watcher initialization, and tmux setup for
        a configured dev command.
      </P>
    </div>
  ),

  roadmap: (
    <div>
      <H2>Roadmap</H2>
      <P>
        The current roadmap focuses on improving semantic understanding,
        debugging automation, change tracking quality, and autonomous
        assistance.
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Semantic search with local embeddings</Li>
        <Li>Automated debugging workflows from terminal relay data</Li>
        <Li>Higher-fidelity model-agnostic change tracking</Li>
        <Li>More autonomous, permission-aware proactive behavior</Li>
      </ul>
    </div>
  ),
};
