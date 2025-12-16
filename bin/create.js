#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Please provide a project name");
  console.log("Usage: npx @rajibdhl/cypress-template my-project");
  process.exit(1);
}

const targetPath = path.join(process.cwd(), projectName);
const templatePath = path.join(__dirname, "../template");

if (fs.existsSync(targetPath)) {
  console.error("❌ Folder already exists");
  process.exit(1);
}

// copy template
fs.cpSync(templatePath, targetPath, { recursive: true });

// install dependencies
console.log("📦 Installing dependencies...");
execSync("npm install", { cwd: targetPath, stdio: "inherit" });

console.log(`
✅ Cypress project ready!

Next steps:
  cd ${projectName}
  npx cypress open
`);
