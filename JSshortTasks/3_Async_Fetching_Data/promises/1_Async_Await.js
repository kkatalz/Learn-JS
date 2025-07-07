function wait(ms) {
  const random = Math.random();
  console.log(random);

  if (random < 0.3) return Promise.reject("Oops! Random simulated failure");

  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Waiting for result ...");
  try {
    await wait(3000);
    console.log("3 seonds passed");
  } catch (e) {
    console.log("Error", e);
  }

  console.log("Done!");
}

main();
