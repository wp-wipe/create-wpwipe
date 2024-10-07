import { mkdir, cp, writeFile, readFile, rename } from "node:fs/promises";
import { join } from "node:path";
import { dist } from "./utils.js";

export async function build(options) {
  mkdir(join(process.cwd(), options.path), { recursive: true });

  if (options.type === "theme") {
    await cp(dist("../templates/core"), join(process.cwd(), options.path), { recursive: true });
    await cp(dist("../templates/theme"), join(process.cwd(), options.path), { recursive: true });

    await fillFile(join(process.cwd(), options.path, "style.css"), options);
  }
  if (options.type === "plugin") {
    await cp(dist("../templates/core"), join(process.cwd(), options.path), { recursive: true });
    await cp(dist("../templates/plugin"), join(process.cwd(), options.path), { recursive: true });
    await fillFile(join(process.cwd(), options.path, "plugin.php"), options);
    await rename(join(process.cwd(), options.path, "plugin.php"), join(process.cwd(), options.path, `${options.projectSlug}.php`));
  }
  const packageJson = join(process.cwd(), options.path, "package.json");

  await buildBackageJson(packageJson, options);
}

async function fillFile(file, options) {
  const fileContent = await readFile(file);
  const newFileContent = fileContent.toString().replace("%%PROJECT_NAME%%", options.projectName).replace("%%PROJECT_SLUG%%", options.projectSlug);
  await writeFile(file, newFileContent);
}

async function buildBackageJson(packageJson, options) {
  const packageJsonContent = await readFile(packageJson);
  const packageJsonContentParsed = JSON.parse(packageJsonContent);
  packageJsonContentParsed.name = options.projectSlug;
  packageJsonContentParsed.description = options.projectName;

  if (options.frontEndLibrary === "vue") {
    packageJsonContentParsed.dependencies.vue = "^3.x";
  }
  if (options.frontEndLibrary === "react") {
    packageJsonContentParsed.dependencies.react = "^17.x";
    packageJsonContentParsed.dependencies["react-dom"] = "^17.x";
  }
  const dependencies = packageJsonContentParsed.dependencies;
  packageJsonContentParsed.dependencies = Object.keys(dependencies)
    .sort()
    .reduce((acc, key) => {
      acc[key] = dependencies[key];
      return acc;
    }, {});

  for (const cat of ["dependencies", "devDependencies"]) {
    for (const key in packageJsonContentParsed[cat]) {
      // Get the latest version of the package
      const { versions } = await fetch(`https://registry.npmjs.org/${key}`).then((res) => res.json());
      const version = Object.keys(versions).sort().pop();
      packageJsonContentParsed[cat][key] = `^${version}`;
    }
  }

  await writeFile(packageJson, JSON.stringify(packageJsonContentParsed, null, 2));
}
