#!/usr/bin/env node

import { program } from "commander"
import pc from "picocolors"
import { initCommand } from "../commands/init.js"
import { addCommand } from "../commands/add.js"
import { themeCommand } from "../commands/theme.js"
import { listCommand } from "../commands/list.js"

const VERSION = "0.1.0"

console.log(pc.bold(pc.cyan(`\n  🌌 Benflux UI CLI v${VERSION}\n`)))

program
  .name("benflux-ui")
  .description("Add Benflux UI components to your React/Next.js project")
  .version(VERSION)

program
  .command("init")
  .description("Initialize Benflux UI in your project")
  .option("-y, --yes", "Skip confirmation prompts")
  .option("--typescript", "Force TypeScript setup")
  .option("--tailwind-v4", "Use Tailwind CSS v4")
  .action(initCommand)

program
  .command("add [components...]")
  .description("Add components to your project")
  .option("-y, --yes", "Skip confirmation prompts")
  .option("--overwrite", "Overwrite existing files")
  .option("-p, --path <path>", "Custom components directory path")
  .action(addCommand)

program
  .command("theme")
  .description("Manage themes")
  .argument("<action>", "install | list | remove")
  .argument("[name]", "Theme name")
  .action(themeCommand)

program
  .command("list")
  .description("List all available components")
  .option("--json", "Output as JSON")
  .action(listCommand)

program.parse()
