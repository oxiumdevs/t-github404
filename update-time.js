const fs = require("fs");

const filePath = "steps/steps.md"; // 👈 YOUR FILE

const content = fs.readFileSync(filePath, "utf8");

// force visible change
const timeString = new Date().toISOString();

const updated = content.replace(
  /<!--TIME-->.*?<!--TIME-->/,
  `<!--TIME-->${timeString}<!--TIME-->`
);

fs.writeFileSync(filePath, updated);
