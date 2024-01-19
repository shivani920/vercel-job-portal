const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

router.get("/", (req, res) => {
    res.render("dashboard");
  });
  
  router.get("/job-form/step1", (req, res) => {
    res.render("job-form-step1");
  });
  
  router.post("/job-form/step1", jobController.createJob);
  
  router.post("/job-form/step2", jobController.updateJobDetailsStep2);
  
  router.post("/job-form/step3", jobController.updateFinalJobDetailsStep3);
module.exports = router;
