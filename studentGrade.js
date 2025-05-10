const marks = [80, 80, 100];

function calcuateGrade(marks) {
  let mark = "";
  const averageGrade = calculateAverage(marks);

  if (averageGrade <= 59) mark = "F";
  else if (averageGrade <= 69) mark = "D";
  else if (averageGrade <= 79) mark = "C";
  else if (averageGrade <= 89) mark = "B";
  else mark = "A";

  return mark;
}

function calculateAverage(array) {
  let sum = 0;
  for (let element of array) {
    sum += element;
  }
  average = sum / array.length;

  return average;
}

console.log(calcuateGrade(marks));
