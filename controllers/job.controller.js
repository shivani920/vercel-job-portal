const Job = require("../models/job.model");

// Handle job creation
exports.createJob = async (req, res) => {
  try {
    const newJob = new Job({
      positionName: req.body.positionName,
      companyName: req.body.companyName,
      jobPipeline: req.body.jobPipeline,
      location: req.body.location,
      contractDetails: req.body.contractDetails,
      minSalary: req.body.minSalary,
      maxSalary: req.body.maxSalary,
      currency: req.body.currency,
      frequency: req.body.frequency,
    });

    await newJob.save();

    res.render("job-form-step1", { jobId: newJob._id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Handle job details update for step 2
exports.updateJobDetailsStep2 = async (req, res) => {
  try {
    const { skillsRequired, internResponsibilities, jobId } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).send("Job not found");
    }

    job.skillsRequired = skillsRequired;
    job.internResponsibilities = internResponsibilities;

    await job.save();

    res.render("job-form-step2", { jobId });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// Handle final job details update for step 3
exports.updateFinalJobDetailsStep3 = async (req, res) => {
  try {
    const {
      skillsCheck,
      qualification,
      finalizedQuestions,
      availability,
      jobId,
    } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      console.error("Job not found for ID:", jobId);
      return res.status(404).send("Job not found");
    }

    job.skillsCheck = skillsCheck;
    job.qualification = qualification;
    job.finalizedQuestions = finalizedQuestions;
    job.availability = availability;

    await job.save();

    console.log("Job saved successfully");
    res.render("job-form-step3", { jobId, submitted: true });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
