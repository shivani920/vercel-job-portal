const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  positionName: String,
  companyName: String,
  jobPipeline: String,
  location: String,
  contractDetails: String,
  minSalary: String,
  maxSalary: String,
  currency: String,
  frequency: String,
  skillsRequired: String,
  internResponsibilities: String,
  skillsCheck: String,
  qualification: String,
  finalizedQuestions: String,
  availability: String,
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
