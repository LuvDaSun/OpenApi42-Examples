#!/usr/bin/env node

import cp from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(dirname, "..");

const options = { shell: true, stdio: "inherit", env: process.env };

cp.execFileSync("tsc", ["--project", path.resolve(projectRoot, "tsconfig.json")], options);

cp.execFileSync("rollup", ["--config", path.resolve(projectRoot, "rollup.config.js")], options);