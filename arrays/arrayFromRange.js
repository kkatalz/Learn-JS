// Task 1. Array from Range
const numbers = arrayFromRange(-10, 3);
console.log("Task 1. Array from Range\n", numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}
