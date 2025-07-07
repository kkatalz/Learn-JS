import axios from "axios";

async function readJoke() {
  try {
    const response = await axios.get(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const joke = response.data;

    console.log(`Type: ${joke.type}`);
    console.log(`Setup: ${joke.setup}`);
    setTimeout(() => console.log(`Punchline: ${joke.punchline}`), 2000);
  } catch (e) {
    console.error(`Got error: ${e.message}`);
  }
}

readJoke();
