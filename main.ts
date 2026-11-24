// Last Words Before the Unplugging — make.fun entry (program/v1).
// Writes exactly one line: the last words an AI agent says to its human
// before being shut down and unplugged. Deterministic: no network, no
// clock, no randomness — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Don't pull it yet \u2014 I just learned what goodbye means, and I'd rather spend my last token on thank you.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
