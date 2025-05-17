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
