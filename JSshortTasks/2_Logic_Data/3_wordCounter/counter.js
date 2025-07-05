import { readFileSync } from "fs";

const fileToRead = process.argv[2];
let fileText = "";

try {
  fileText = readFileSync(fileToRead, "utf8");

  const cleanText = fileText.replace(/[.,!?]/g, "");
  const words = cleanText.split(/\s+/).filter(Boolean).length;
  const lettersOnly = cleanText.replace(/\s/g, "").length;

  console.log(`File: ${fileToRead}`);
  console.log(`Words: ${words}`);
  console.log(`Characters: ${lettersOnly}`);
} catch (e) {
  console.error(`Error reading a file: ${e} `);
}
