const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let squaredNumbers = numbers.map((el) => el * el);
console.log(`SquaredNumbers: ${squaredNumbers}`);

let evenNumbers = numbers.filter((el) => el % 2 === 0);
console.log(evenNumbers);

let sum = numbers.reduce((accumulator, current) => (accumulator += current), 0);
console.log(`Sum is: ${sum}`);

let allGreaterThan = numbers.every((current) => current > 0);
console.log(`All numbers are greater than 0: ${allGreaterThan} `);

let someNumsGreaterThan = numbers.some((current) => current > 5);
console.log(`Some numbers are greater than 5: ${someNumsGreaterThan} `);
