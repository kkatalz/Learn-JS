function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log("Waiting for result ...");
  await wait(3000);
  console.log("Done!");
}

main();
