// Task 7. Movies
const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];
const moviesTitles = movies
  .filter((movie) => movie.year == 2018 && movie.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log("\nTask 7. Movies\n", moviesTitles);
