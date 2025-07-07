function wait(ms) {
  const random = Math.random();
  if (random < 0.3) Promise.reject("Oops! Random simulated failure");
  console.log(random);

  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Waiting for result ...");
  await wait(3000)
    .then(() => console.log("3 seonds passed"))
    .catch(() => console.log("Something bad happened!"));

  console.log("Done!");
}

main();
