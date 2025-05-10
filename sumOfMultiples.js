//Write a function to calculate sum of multiples of 3 and 5 from 0 up to limit_number
// Example:
//  multiples of 3 and 5 from 0 to 10 is -> 33 because
// Muliples of 3: 3*0 =0 ; 3*1=3; 3*2=6; 3*3=9
// Muliples of 5: 5*0 =0 ; 5*1=5; 5*2=10
//  3+6+9+5+10 = 33

function sum(limit) {
  let sumOfMultisOfThree = 0;
  let sumOfMultisOfFive = 0;
  for (let i = 1; i <= 9; i++) {
    let multisOfThree = 3;
    let multisOfFive = 5;

    if (sumOfMultisOfThree <= limit) {
      multisOfThree *= i;
      sumOfMultisOfThree += multisOfThree;
    }

    if (sumOfMultisOfFive <= limit) {
      multisOfFive *= i;

      sumOfMultisOfFive += multisOfFive;
    }
  }

  return sumOfMultisOfThree + sumOfMultisOfFive;
}

console.log(sum(10));
