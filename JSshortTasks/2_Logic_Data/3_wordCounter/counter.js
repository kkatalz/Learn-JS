import { readFileSync } from "fs";

const fileToRead = process.argv[2];
let fileText = "";

try {
  fileText = readFileSync(fileToRead, "utf8");

  const words = fileText.split(/\s+/).filter(Boolean).length;
  const lettersOnly = fileText.replace(/[^a-zA-Z]/g, "").length;

  console.log(`File: ${fileToRead}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${lettersOnly}`);
} catch (e) {
  console.error(`Error reading a file: ${e} `);
}
