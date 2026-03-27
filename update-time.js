const fs = require("fs");

const filePath = "steps/STEPS.md"; // ✅ correct

let content = fs.readFileSync(filePath, "utf8");

const timeString = new Date().toISOString();

content = content.replace(
  /<!--TIME-->.*?<!--TIME-->/s,
  `<!--TIME-->${timeString}<!--TIME-->`
);

fs.writeFileSync(filePath, content);
