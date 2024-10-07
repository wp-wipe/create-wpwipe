import { fileURLToPath } from "node:url";
export function dist(path) {
  return fileURLToPath(new URL(`./${path}`, import.meta.url).href);
}
export function cwd() {
  return process.cwd();
}

export function cleanName(name) {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
