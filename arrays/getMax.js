// Task 6. Get Max
const numberMaxArray = [-1, -12, -10];
console.log("\nTask 6. Get Max\nGiven array: ", numberMaxArray);

const max = getMax(numberMaxArray);
console.log(max);

function getMax(array) {
  // 1st way
  if (array.length === 0) return undefined;
  //   let max = array[0];
  //   for (let num of array) {
  //     if (num > max) max = num;
  //   }
  //   return max;

  // 2nd way using Reduce method
  return array.reduce((accumulator, current) =>
    current > accumulator ? current : accumulator
  );
}
