// Task 3. Exclude
const numbersList = [1, 2, 3, 4, 5, 1, 22, 2, 2];
const output = except(numbersList, [1, 2]);
console.log(
  "Task 3. Exclude\nCurrent is: ",
  numbersList,
  "After removal, we get: ",
  output
);

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
