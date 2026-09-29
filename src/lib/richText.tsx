import Link from "next/link";
import type { ReactNode } from "react";

export function renderRich(text: string): ReactNode[] {
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
    const [, label, href, bold] = match;
    if (bold !== undefined) {
      nodes.push(<strong key={key++}>{bold}</strong>);
    } else {
      const isInternal = href.startsWith("/") || href.includes("manzelstudio.com");
      nodes.push(
        isInternal ? (
          <Link
            key={key++}
            href={href.replace(/^https?:\/\/(www\.)?manzelstudio\.com(\.au)?/, "") || "/"}
            className="underline underline-offset-2 hover:opacity-70"
          >
            {label}
          </Link>
        ) : (
          <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70">
            {label}
          </a>
        )
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}
