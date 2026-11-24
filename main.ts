// One-Liner Marathon — program/v1 entry.
// Writes one original one-line comedy joke (1-280 chars) to /output/entry.txt.
// Deterministic: no network, no input, no environment reads. Same text every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "I hired a ghost to haunt my ex — he quit after a week, saying the apartment was already haunted by someone with worse boundaries.";

// The gate only accepts 1-280 non-blank characters; fail loudly instead of
// writing a file the scorer would refuse.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.trim().length === 0) {
  throw new Error("joke must be 1-280 non-blank characters");
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, JOKE, "utf8");
chmodSync(OUT_FILE, 0o644);
