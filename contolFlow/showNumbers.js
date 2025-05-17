// Show even and odd numbers in list.

function showNumbers(limit) {
  for (i = 0; i <= limit; i++) {
    const numberIs = i % 2 === 0 ? "EVEN" : "ODD";
    console.log(i, numberIs);
  }
}

showNumbers(10); // 0 "Even" 1 "ODD" 2 "Even"..
