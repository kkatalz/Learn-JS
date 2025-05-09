// Count number of truthy elements in the array.
function countTruthy(array) {
  let truthyCounter = 0;
  for (let arrElement of array) {
    if (arrElement) truthyCounter++;
  }
  return truthyCounter;
}

console.log(
  countTruthy([1, 2, 3, "Something", null, false, 0, undefined, NaN, ""])
);
