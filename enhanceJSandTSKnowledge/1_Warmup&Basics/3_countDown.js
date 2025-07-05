let count = 10;

const interval = setInterval(() => {
  if (count === 0) {
    console.log("Startoff!");
    clearInterval(interval);
  } else {
    console.log(count);
    count--;
  }
}, 1000);
