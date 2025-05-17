// Task 5. Count occurences
const numbersOccurencesArray = [1, 2, 3, 4, 4, 4, 4];
console.log(
  "\nTask 5. Count occurences of number\nGiven array: ",
  numbersOccurencesArray
);

const count = countOccurences(numbersOccurencesArray, -11);
console.log(count);

function countOccurences(array, number) {
  let occurences = 0;
  // 1st way
  //   for (let num of array) if (num === number) occurences++;
  //   return occurences;

  // 2nd way
  return array.reduce((accumulator, currentValue) => {
    occurences = currentValue === number ? 1 : 0;
    return accumulator + occurences;
  }, 0);
}
