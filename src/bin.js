#!/usr/bin/env node

import { text, intro, outro, select, note, spinner } from "@clack/prompts";
import { cleanName, dist } from "./utils.js";
import { wpwipelogo } from "./ascii.js";
import { build } from "./index.js";

async function askQuestion(message, defaultValue) {
  return text({
    message,
    initialValue: "",
    defaultValue,
    placeholder: defaultValue,
    required: true,
  });
}
async function main() {
  // GET APP DIRECTORY
  console.clear();
  console.log(wpwipelogo());
  console.log(" ");

  intro("Let's get started!");

  const TypeOptions = [
    { value: "theme", label: "Theme" },
    { value: "plugin", label: "Plugin" },
  ];
  if (process.cwd().includes("plugins")) {
    TypeOptions.reverse();
  }

  const type = await select({
    message: "Choose a type",
    options: TypeOptions,
    defaultValue: process.cwd().includes("plugins") ? "plugin" : "theme",
  });

  const name = process.argv[2] || "My awsome project";

  const projectName = await askQuestion("Name your project", name);

  const projectSlug = await askQuestion("Choose a slug", cleanName(projectName));

  const frontEndLibrary = await select({
    message: "Do you want to use a front-end library?",
    options: [
      { value: "vue", label: "Vue" },
      { value: "vanilla", label: "Vanilla JS (no additional library)" },
    ],
    defaultValue: "theme",
  });

  const path = process.argv[2] || projectSlug;

  const spin = spinner();

  spin.start();

  await build({ type, projectName, projectSlug, frontEndLibrary, path });

  spin.stop();
  outro(`That's it! Your project is ready!
   To get started, run the following commands:

    cd ${path}
    npm install
    npm run dev
  `);
}

main().catch(console.error);
