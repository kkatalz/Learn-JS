//Task: Show only string properties
function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  }
}

const movie = { name: "nanana", year: 2018, rating: 8.9, director: "b" };
showProperties(movie);
