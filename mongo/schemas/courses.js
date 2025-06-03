const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.error("Could not connect to DB ", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("courses", courseSchema);

// task 1
async function getCourses1() {
  const courses = await Course.find({
    isPublished: true,
    tags: "backend",
  })
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(courses);
}


// task 2
async function getCourses2() {
  const courses = await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] },
  })
    .sort("-price")
    .select("name author price");
  console.log(courses);
}

async function getCourses3() {
  const courses = await Course.find({
    isPublished: true,
  }).or([{ price: { $gte: 15 } }, { name: /.*by.*/i }]);

  console.log(courses);
}
