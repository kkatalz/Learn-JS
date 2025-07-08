"use strict";
const users = [
    { name: "Zlata", age: 20, email: "karbo.zlata@gmail.com" },
    { name: "Maxym", age: 20 },
];
function displayUser(users) {
    users.forEach((user) => console.log(`User ${user.name} is ${user.age} years old.`));
}
displayUser(users);
