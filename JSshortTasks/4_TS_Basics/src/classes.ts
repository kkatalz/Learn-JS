class Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("Zlata", 20);
person.greet();
