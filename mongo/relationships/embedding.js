const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.updateOne(
    { _id: courseId },
    {
      $set: {
        "author.name": "John Smith",
      },
      // $unset: {
      //   author: "",
      // },
    }
  );
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save();
}

async function removeAuthor(courseId, authorId) {
  const course = await Course.findById(courseId);
  const author = course.authors.id(authorId);
  author.deleteOne();
  course.save();
}

// createCourse("Node Course", [
//   new Author({ name: "Mosh" }),
//   new Author({ name: "Zlata" }),
// ]);
// updateAuthor("683ee8a0d69fcbd0d1e4f335");

// addAuthor("683eecb582613d4e88c68ef3", new Author({ name: "Amy" }));
removeAuthor("683eecb582613d4e88c68ef3", "683eee5fc4ed6a10f05a7db6");
