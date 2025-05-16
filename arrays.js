// Task 1. Array from Range
const numbers = arrayFromRange(-10, 3);
// console.log(numbers);

function arrayFromRange(min, max) {
  let output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// Task 2. Includes
const numbersList = [1, 2, 3, 4, 5, 1, 22, 2, 2];
// console.log(numbersList.includes(1));
// console.log("Custom includes():", includes(numbersList, -1));

function includes(array, searchElement) {
  for (let el of array) {
    if (el === searchElement) return true;
  }
  return false;
}

// Task 3. Exclude
const output = except(numbersList, [1, 2]);
console.log("\nCurrent is: ", numbersList, "After removal, we get: ", output);

function except(array, excluded) {
  // 1st option
  let output = [...array];
  for (let exclEl of excluded) {
    for (let el of output) {
      if (exclEl === el) output.splice(output.indexOf(exclEl), 1);
    }
  }
  return output;

  // 2nd option
  //   const output = [];
  //   for (let number of array) {
  //     if (!excluded.includes(number)) output.push(number);
  //   }
  //   return output;
}
