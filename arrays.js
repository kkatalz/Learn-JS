// Task 1. Array from Range
const numbers = arrayFromRange(-10, 3);
console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// Task 2. Includes
const numbersList = [1, 2, 3, 4, 5];
console.log(numbersList.includes(1));
console.log("Custom includes():", includes(numbersList, -1));

function includes(array, searchElement) {
  for (let el of array) {
    if (el === searchElement) return true;
  }
  return false;
}
