// Task 2. Includes
const numbersList = [1, 2, 3, 4, 5, 1, 22, 2, 2];
console.log(numbersList.includes(1));
console.log("Task 2. Includes\nCustom includes():", includes(numbersList, -1));

function includes(array, searchElement) {
  for (let el of array) {
    if (el === searchElement) return true;
  }
  return false;
}
