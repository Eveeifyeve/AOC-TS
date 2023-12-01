const path = require("path");
const fs = require("fs");

const dir = path.join(__dirname, "..");

fs.readdir(dir, (err: Error | null, files: string[]) => {
  if (err) {
    console.error(`Error reading directory: ${err.message}`);
    return;
  }

  console.log("Advent Days:", files.length, ", Out of 26 Days");
});