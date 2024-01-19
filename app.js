const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

const jobRoutes = require("./routes/jobRoutes");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/job-portal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/", jobRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
