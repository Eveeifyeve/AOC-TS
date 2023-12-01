const path = require("path");
const { exec } = require("child_process");
import gradient from "gradient-string";
import figlet from "figlet";




figlet(
    "Advent Of Code 2023",
    function (err: Error | null, data: string | undefined) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      if (data) {
        const noNumbers = data.replace(/\d/g, "");
        console.log(gradient("red", "white")(noNumbers));
      }
    }
  );

// Get the index of the --day argument
const dayArgIndex = process.argv.indexOf("--day");
const argIndex = process.argv.indexOf("--arg");

let argValue = "";
if (argIndex !== -1 && process.argv.length > argIndex + 1) {
  // Get the arg value from the next command line argument
  argValue = process.argv[argIndex + 1];
}

if (dayArgIndex === -1 || process.argv.length <= dayArgIndex + 1) {
  console.error("Please specify a day with --day argument");
  process.exit(1);
}

// Get the day number from the next command line argument
const day = process.argv[dayArgIndex + 1];

// Construct the path to the day's index.js file
const filePath = path.join(__dirname, "days", `${day}`, "index.ts");

setTimeout(() => {
    figlet(
        `Executing day:\n${day}`,
        function (err: Error | null, data: string | undefined) {
          if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          if (data) {
            const noNumbers = data.replace(/\d/g, "");
            console.log(gradient("red", "white")(noNumbers));
          }
        }
      )
});



// Execute the file
exec(
  `bun ${filePath} --arg ${argValue}`,
  (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
      console.error(`Error executing file: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    console.log(stdout);
  }
);
