const fs = require("fs");

const filePath = "steps/STEPS.md";

let content = fs.readFileSync(filePath, "utf8");

// ALWAYS changes → forces commit
const timeString = new Date().toISOString();

if (!content.includes("<!--TIME-->")) {
  console.log("TIME marker not found!");
  process.exit(1);
}

content = content.replace(
  /<!--TIME-->.*?<!--TIME-->/s,
  `<!--TIME-->${timeString}<!--TIME-->`
);

fs.writeFileSync(filePath, content);

console.log("Updated time:", timeString);
