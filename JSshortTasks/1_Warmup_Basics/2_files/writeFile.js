// When you run this file, it should create a file message.txt and write:
import fs from "fs";

const file = "message.txt";
const date = new Date();
const data = `Today is ${date.toLocaleDateString()} - practice makes perfect!`;

fs.writeFileSync(file, data);

console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("message.txt", "utf8"));
