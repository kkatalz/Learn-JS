const fs = require("fs");

let users = [
  { name: "Zlata", age: 20 },
  { name: "Maxym", age: 20 },
  { name: "Liza", age: 20 },
];

const file = "users.json";

fs.writeFileSync(file, JSON.stringify(users, null, 2)); // Use JSON.stringify() when writing JSON files.

console.log("File written successfully");
console.log("The written has the following contents:\n");

const fileContent = fs.readFileSync(file, "utf8");
const parsedUsers = JSON.parse(fileContent); // Use JSON.parse() when reading JSON back into JS objects.

console.log("Users: ");
parsedUsers.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});
