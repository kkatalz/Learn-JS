async function fakeRequest() {
  return await fetch("https://nonexistence.com");
}

async function retry(fn, retries) {
  try {
    const result = await fn();
    return result; // success
  } catch (error) {
    console.error(`Got an error: ${error.message}`);
    if (retries > 0) {
      console.log(`Retrying... attempts left: ${retries}`);
      await retry(fn, retries - 1);
    } else {
      throw new Error(`Error! Tried too many times, but still get a fail`);
    }
  }
}

retry(() => fakeRequest(), 3)
  .then((res) => console.log("Success:", res))
  .catch((err) => console.log("Failed after 3 attempts:", err));
