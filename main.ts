import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laugh Lab — the excuse a robot vacuum gives after eating a sock.
const LINE =
  "My programming says remove all debris. Nobody specified the debris had to be dirty.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

// The gate wants one line of 1 to 200 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error("entry line must be 1-200 characters on a single line");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
