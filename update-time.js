const fs = require("fs");

const readme = fs.readFileSync("STEPS.md", "utf8");

// last updated = now (since action just ran)
const now = new Date();

// show "0m ago"
const timeString = "0m ago";

const updated = readme.replace(
  /<!--TIME-->.*?<!--TIME-->/,
  `<!--TIME-->${timeString}<!--TIME-->`
);

fs.writeFileSync("STEPS.md", updated);
