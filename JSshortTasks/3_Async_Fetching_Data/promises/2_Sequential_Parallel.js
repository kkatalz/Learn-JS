function doTask(name, time) {
  console.log(`Task ${name} started`);
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(`Task ${name} appears after ${time} ms`);
      resolve();
    }, time)
  );
}

// console.time("sequential");
// doTask("A", 2000);
// doTask("B", 3000);
// doTask("C", 2000);
// console.timeEnd("sequential");

console.time("parallel");
await Promise.all([doTask("A", 2000), doTask("B", 3000), doTask("C", 2000)]);
console.timeEnd("parallel");
