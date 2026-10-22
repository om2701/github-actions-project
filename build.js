const fs = require("fs");

const source = fs.readFileSync("src/app.js", "utf8");

fs.mkdirSync("dist", { recursive: true });

fs.writeFileSync("dist/app.js", source);

fs.copyFileSync("package.json", "dist/package.json");

console.log("Build completed successfully!");