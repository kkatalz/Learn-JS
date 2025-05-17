// Program to show n stars in n rows.
// Example: stars = 4, Result:
// *
// **
// ***
// ****

function showStars(rows) {
  for (r = 1; r <= rows; r++) {
    let pattern = "";
    for (c = 0; c < r; c++) pattern += "*";
    console.log(pattern);
  }
}

showStars(2);
