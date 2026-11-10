"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

/** A shell command chip; clicking anywhere on it copies the command. */
export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Copied" : `Copy “${command}”`}
      className="inline-flex max-w-full items-center gap-3 rounded-md border border-border bg-muted/40 py-1.5 pl-3 pr-2 font-mono text-xs text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <span className="truncate">
        <span className="select-none opacity-60">$ </span>
        {command}
      </span>
      {copied ? (
        <Check className="size-3.5 shrink-0 text-positive" />
      ) : (
        <Copy className="size-3.5 shrink-0" />
      )}
    </button>
  );
}
