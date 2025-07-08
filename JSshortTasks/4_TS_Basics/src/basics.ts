let name: string = "Zlata";
let age: number = 20;
let isActive: boolean = true;
let hobbies: string[] = ["sport", "reading"];
let tuple: [string, number] = ["level", 2];

function greet(user: string, age: number): string {
  return `Hello, ${user}, with age ${age}`;
}

console.log(greet("Zlata", 20));
