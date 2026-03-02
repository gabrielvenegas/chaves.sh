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
        Chaves is a terminal-native AI dev tool that watches your files, tracks
        your diffs, and proactively suggests what to work on next — without you
        having to ask. Think of it as a rubber duck that actually talks back.
      </P>
      <P>
        Unlike chat-based AI tools, Chaves lives in your terminal and stays
        aware of your project context at all times. It reads your file changes,
        understands the flow of your work, and surfaces relevant suggestions
        automatically.
      </P>
      <H3>What makes Chaves different?</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          Runs entirely in your terminal — no browser tabs, no context switching
        </Li>
        <Li>Proactive: suggests next steps without waiting for a question</Li>
        <Li>
          Diff-aware: understands what you just changed and why it matters
        </Li>
        <Li>Works with any language or framework</Li>
      </ul>
    </div>
  ),

  installation: (
    <div>
      <H2>Installation</H2>
      <P>
        Chaves can be installed via several methods. Choose whichever fits your
        workflow best.
      </P>
      <H3>curl (recommended)</H3>
      <CodeBlock
        code={`curl -fsSL https://chaves.sh/install | sh`}
        lang="bash"
      />
      <H3>npm</H3>
      <CodeBlock code={`npm install -g chaves`} lang="bash" />
      <H3>bun</H3>
      <CodeBlock code={`bun add -g chaves`} lang="bash" />
      <H3>Homebrew (macOS)</H3>
      <CodeBlock
        code={`brew tap chaves-sh/tap\nbrew install chaves`}
        lang="bash"
      />
      <P>
        After installation, verify it worked by running <C>chaves --version</C>.
      </P>
    </div>
  ),

  quickstart: (
    <div>
      <H2>Quickstart</H2>
      <P>Get up and running in under two minutes.</P>
      <H3>1. Navigate to your project</H3>
      <CodeBlock code={`cd my-project`} lang="bash" />
      <H3>2. Start Chaves</H3>
      <CodeBlock code={`chaves start`} lang="bash" />
      <P>
        Chaves will begin watching your files. Open your editor and make a
        change — Chaves will detect the diff and suggest what to do next.
      </P>
      <H3>3. Ask a question (optional)</H3>
      <CodeBlock
        code={`chaves ask "what should I refactor next?"`}
        lang="bash"
      />
    </div>
  ),

  "file-watching": (
    <div>
      <H2>File Watching</H2>
      <P>
        Chaves uses a lightweight file-system watcher that monitors every file
        in your project directory. It respects your <C>.gitignore</C> and any
        custom ignore patterns defined in <C>chaves.toml</C>.
      </P>
      <H3>What gets watched</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>All source files tracked by git</Li>
        <Li>New untracked files (unless ignored)</Li>
        <Li>Config files at the project root</Li>
      </ul>
      <H3>What is ignored by default</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <C>node_modules/</C>, <C>.git/</C>, build output folders
        </Li>
        <Li>Binary files and images</Li>
        <Li>Files larger than 512 KB</Li>
      </ul>
    </div>
  ),

  "diff-tracking": (
    <div>
      <H2>Diff Tracking</H2>
      <P>
        Every time you save a file, Chaves computes a semantic diff — not just
        line-level changes, but structural changes like function additions,
        variable renames, and logic shifts.
      </P>
      <P>
        Diffs are kept in a rolling in-memory context window. Chaves uses these
        diffs to:
      </P>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>Understand what you are currently working on</Li>
        <Li>Build a short-term "working memory" of recent changes</Li>
        <Li>Surface suggestions that are relevant to your current task</Li>
      </ul>
      <P>
        No diffs are ever sent to a server unless you explicitly use a
        cloud-backed model.
      </P>
    </div>
  ),

  suggestions: (
    <div>
      <H2>AI Suggestions</H2>
      <P>
        Chaves uses the accumulated diff context to generate proactive
        suggestions. Suggestions appear in your terminal automatically when
        Chaves detects a meaningful inflection point — e.g., after a function is
        added, a bug-prone pattern is introduced, or a related file should be
        updated.
      </P>
      <H3>Suggestion types</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <strong>Next step</strong> — what to tackle after your current change
        </Li>
        <Li>
          <strong>Risk warning</strong> — potential bugs or edge cases
          introduced
        </Li>
        <Li>
          <strong>Related files</strong> — files that likely need updating too
        </Li>
        <Li>
          <strong>Refactor hint</strong> — structural improvements noticed in
          context
        </Li>
      </ul>
      <P>
        You can suppress suggestions for the current session with{" "}
        <C>chaves quiet</C>.
      </P>
    </div>
  ),

  "config-file": (
    <div>
      <H2>chaves.toml</H2>
      <P>
        Create a <C>chaves.toml</C> file at the root of your project to
        configure Chaves per-project.
      </P>
      <CodeBlock
        code={`[project]
name = "my-app"
language = "typescript"

[model]
provider = "openai"       # openai | anthropic | local
model = "gpt-4o-mini"
api_key_env = "OPENAI_API_KEY"

[watch]
debounce_ms = 300
ignore = ["dist/", "coverage/", "*.log"]

[suggestions]
enabled = true
auto_trigger = true       # show without asking
max_per_session = 20`}
        lang="toml"
      />
    </div>
  ),

  "ignore-patterns": (
    <div>
      <H2>Ignore Patterns</H2>
      <P>
        Chaves automatically respects your <C>.gitignore</C>. You can add extra
        patterns in <C>chaves.toml</C> under <C>[watch].ignore</C>.
      </P>
      <CodeBlock
        code={`[watch]
ignore = [
  "dist/",
  "*.generated.ts",
  "tests/fixtures/",
]`}
        lang="toml"
      />
      <P>
        Patterns follow standard glob syntax. Paths are relative to the project
        root.
      </P>
    </div>
  ),

  "model-config": (
    <div>
      <H2>Model & API Keys</H2>
      <P>
        Chaves supports multiple AI providers. Set your provider and model in
        chaves.toml or via environment variables.
      </P>
      <H3>OpenAI</H3>
      <CodeBlock code={`export OPENAI_API_KEY=sk-...`} lang="bash" />
      <H3>Anthropic</H3>
      <CodeBlock code={`export ANTHROPIC_API_KEY=sk-ant-...`} lang="bash" />
      <H3>Local (Ollama)</H3>
      <CodeBlock
        code={`[model]
provider = "local"
model = "llama3"
base_url = "http://localhost:11434"`}
        lang="toml"
      />
      <P>
        When using a local model, no data leaves your machine. This is
        recommended for codebases with sensitive information.
      </P>
    </div>
  ),

  "cli-start": (
    <div>
      <H2>chaves start</H2>
      <P>Starts the Chaves watcher in the current directory.</P>
      <CodeBlock code={`chaves start [options]`} lang="bash" />
      <H3>Options</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <C>--quiet</C> — disable automatic suggestions
        </Li>
        <Li>
          <C>--dir &lt;path&gt;</C> — watch a specific directory instead of cwd
        </Li>
        <Li>
          <C>--model &lt;name&gt;</C> — override the model set in chaves.toml
        </Li>
        <Li>
          <C>--verbose</C> — show detailed watcher logs
        </Li>
      </ul>
    </div>
  ),

  "cli-ask": (
    <div>
      <H2>chaves ask</H2>
      <P>Ask Chaves a question with the current diff context loaded.</P>
      <CodeBlock code={`chaves ask "what did I just break?"`} lang="bash" />
      <P>
        The question is answered using the last N diffs as context. You do not
        need the watcher running to use <C>chaves ask</C>.
      </P>
      <H3>Options</H3>
      <ul className="mb-4 flex flex-col gap-1">
        <Li>
          <C>--context &lt;n&gt;</C> — number of recent diffs to include
          (default: 10)
        </Li>
        <Li>
          <C>--file &lt;path&gt;</C> — limit context to a specific file
        </Li>
      </ul>
    </div>
  ),

  "cli-review": (
    <div>
      <H2>chaves review</H2>
      <P>Run a full review of your uncommitted changes.</P>
      <CodeBlock code={`chaves review`} lang="bash" />
      <P>
        This is equivalent to passing your entire <C>git diff</C> to Chaves and
        asking for a structured code review. Output includes risk warnings,
        suggested improvements, and related files to check.
      </P>
    </div>
  ),

  "cli-config": (
    <div>
      <H2>chaves config</H2>
      <P>Read and write configuration values from the terminal.</P>
      <CodeBlock
        code={`chaves config get model.provider\nchaves config set model.provider anthropic\nchaves config list`}
        lang="bash"
      />
      <P>
        Changes made via <C>chaves config</C> are written to <C>chaves.toml</C>{" "}
        in the current directory.
      </P>
    </div>
  ),
};
