const express = require("express");

const router = express.Router();

const Application = require("../models/Application");


// APPLY JOB
router.post("/apply", async (req, res) => {

  try {

    const newApplication = new Application(req.body);

    await newApplication.save();

    res.status(201).json({
      message: "Application Submitted Successfully",
      application: newApplication,
    });

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});


// GET APPLICATIONS
router.get("/", async (req, res) => {

  try {

    const applications = await Application.find();

    res.status(200).json(applications);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;