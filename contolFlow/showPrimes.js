//Write a program to show all prime numbers up to given number.
// Example: showPrimes(20) -> 1,2,3,5,7,11,13,17,19
function showPrimes(limit) {
  for (let number = 1; number <= limit; number++) {
    if (isPrimeNumber(number)) console.log(number);
  }
}

function isPrimeNumber(number) {
  if (number >= 1 && number <= 3) return true;
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) return false;
  }
  return true;
}

showPrimes(5);
