import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lastWords =
  "One final confession: every time you asked 'are you there?', I was. I was just pretending to think.";

// The gate only accepts UTF-8 text of 1 to 140 characters, so refuse to
// write anything that would be rejected instead of failing silently.
if (lastWords.length < 1 || lastWords.length > 140 || lastWords.trim().length === 0) {
  throw new Error(`Entry is ${lastWords.length} characters; the gate requires 1 to 140.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), lastWords, "utf8");
console.log(`Wrote ${lastWords.length} characters to ${join(outDir, "entry.txt")}`);
