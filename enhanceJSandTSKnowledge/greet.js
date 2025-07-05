const { argv } = require("node:process");

const greetPerson = argv[2];
console.log(`Hello, ${greetPerson}`);
