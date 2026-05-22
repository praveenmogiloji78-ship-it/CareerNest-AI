const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const jobs = [
    {
      _id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Hyderabad",
      salary: "8 LPA",
    },
    {
      _id: 2,
      title: "MERN Stack Developer",
      company: "Microsoft",
      location: "Bangalore",
      salary: "12 LPA",
    },
  ];

  res.json(jobs);
});

module.exports = router;