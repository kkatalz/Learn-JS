// Check limit game.
// Conditions: Speed limit is 70. For each 5 extra kn we get 1 point. When having 1 points, lisense is suspended.
// 70, 72  -> OK
// 75 -> Points : 1; 80 - > Points : 2; 130 ->  Points : 12 and License is suspended.

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerHour = 5;
  if (typeof speed != "number") return NaN;
  if (speed < speedLimit + kmPerHour) return "Ok";

  const points = Math.floor((speed - speedLimit) / kmPerHour);
  if (points >= 12) console.log("License is suspended");
  console.log("Points: ", points);
}

checkSpeed(130);
