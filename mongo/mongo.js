const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => console.log("Connected to MongoDb..."))
  .catch((err) => console.error("Could not connectc to MongoDb", err));

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true, minLength: 5, maxLength: 255 },
  category: {
    type: String,
    required: true,
    lowercase: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return new Promise((resolve) => {
          setTimeout(() => {
            const result = v && v.length > 0;
            resolve(result);
          }, 4000);
        });
      },
      message: "A course should have at least one tag.",
    },
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  // price is only required if isPublished = true
  price: {
    type: Number,
    required: function () {
      return this.isPublished;
    },
    min: 10,
    max: 200,
    get: (v) => {
      Math.round(v);
    },
    set: (v) => {
      Math.round(v);
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

// CREATE
async function createCourse() {
  const course = new Course({
    name: "Angular Couse",
    category: "Web",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
    price: 15,
  });

  try {
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) console.log(ex.errors[field].message);
  }
}

createCourse();

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

// updateCourse("683c497e23446c4e40f9f665");

// GET
async function getCourses() {
  const courses = await Course.find({ author: "Mosh", isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

// getCourses();

// REMOVE a document
async function removeCourse(id) {
  const result = await Course.deleteOne({ _id: id });

  if (!result) {
    console.log("No such id");
    return;
  }

  console.log(result);
}

// removeCourse("683c497e23446c4e40f9f665");
