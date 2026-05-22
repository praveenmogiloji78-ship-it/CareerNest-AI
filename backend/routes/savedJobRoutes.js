const express = require("express");

const router = express.Router();

const SavedJob = require("../models/SavedJob");


// SAVE JOB
router.post("/save", async (req, res) => {

  try {

    const savedJob = new SavedJob(req.body);

    await savedJob.save();

    res.status(201).json({
      message: "Job Saved Successfully",
      savedJob,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// GET SAVED JOBS
router.get("/", async (req, res) => {

  try {

    const jobs = await SavedJob.find();

    res.status(200).json(jobs);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// DELETE SAVED JOB
router.delete("/:id", async (req, res) => {

  try {

    await SavedJob.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Saved Job Removed",
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;