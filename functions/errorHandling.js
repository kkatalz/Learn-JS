// Task 3
try {
  const numbers = [1, 2, 3, 4, 4, 4, 4];
  const count = countOccurences("aaa", 4);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurences(array, number) {
  if (!Array.isArray(array))
    throw new Error("Your list of numbers is not an array");
  let occurences = 0;
  return array.reduce((accumulator, currentValue) => {
    occurences = currentValue === number ? 1 : 0;
    return accumulator + occurences;
  }, 0);
}
