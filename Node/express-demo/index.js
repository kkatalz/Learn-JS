const express = require("express");
const app = express();
const courses = require("./routes/courses");
const baseRoute = require("./routes/home");

app.use(express.json());
app.use("/", baseRoute);
app.use("/api/courses", courses);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
