import { stdin, stdout } from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const min = Number(process.argv[2]) || 1;
const max = Number(process.argv[3]) || 100;

const secret = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Guess the number between ${min} and ${max}`);

function askGuess() {
  rl.question("Your guess: ", (answer) => {
    const guess = Number(answer);

    if (guess === secret) {
      console.log("You won!");
      rl.close();
    }

    if (guess > secret) {
      console.log("The number is smaller!");
      askGuess();
    }
    if (guess < secret) {
      console.log("The number is greater!");
      askGuess();
    }
  });
}

askGuess();
