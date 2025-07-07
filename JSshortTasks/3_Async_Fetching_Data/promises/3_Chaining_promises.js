/*
const joke = fetch("https://official-joke-api.appspot.com/random_joke");
joke
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(`Type: ${data.type}`);
    console.log(`Setup: ${data.setup}`);
    setTimeout(() => console.log(`Punchline: ${data.punchline}`), 2000);
  })
  .catch((error) => console.error(`Got an error ${error}`));
*/

async function proccessJoke() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const data = await response.json();
    console.log(`Type: ${data.type}`);
    console.log(`Setup: ${data.setup}`);
    setTimeout(() => console.log(`Punchline: ${data.punchline}`), 2000);
  } catch (error) {
    console.error(`Got an error ${error.message}`);
  }
}

proccessJoke();
