// Task 1. Sum of Arguments.

function sum(...numbers) {
  if (numbers.length === 1 && Array.isArray(numbers[0])) {
    numbers = [...numbers[0]];
  }
  return numbers.reduce((sum, currentNUmber) => sum + currentNUmber);
}

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum([1, 2, 3, 4, 5]));

// Task 2. Area of Circle
const circle = {
  center: "O",
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// getter
console.log(circle.area);
console.log(circle.radius);
console.log(circle);
