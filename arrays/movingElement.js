// Task 4. Moving an element
const numbersArray = [1, 2, 3, 4];
console.log("\nTask 4. Moving an element\nGiven array: ", numbersArray);
const outputAfterMove = move(numbersArray, 2, -1);
console.log("New array after moving: ", outputAfterMove);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("Invalid offset");
    return;
  }
  const outputAfterMove = [...array];
  const element = outputAfterMove.splice(index, 1)[0];
  outputAfterMove.splice(position, 0, element);
  return outputAfterMove;
}
