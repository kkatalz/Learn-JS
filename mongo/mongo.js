const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.error("Could not connectc to MongoDb", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

// CREATE
async function createCourse() {
  const course = new Course({
    name: "Angular Couse",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

// UPDATE
async function updateCourse(id) {
  // Approach: Query first
  /*
  const course = await Course.findById(id);
  if (!course) {
    console.log("No such id");
    return;
  }

  course.set({
    isPublished: true,
    author: "Anoher Author",
  });

  const result = await course.save();
  console.log(result);
  */

  // Approach: Update first
  const result = await Course.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        author: " Jacob",
        isPublished: true,
      },
    },
    { new: true }
  );
  console.log(result);
}

updateCourse("683c497e23446c4e40f9f665");

// GET
async function getCourses() {
  const courses = await Course.find({ author: "Mosh", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// getCourses();
