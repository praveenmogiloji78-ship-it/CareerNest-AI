const express = require("express");

const router = express.Router();

const upload = require("../middleware/upload");

router.post(
    "/upload",
    upload.single("resume"),
    (req, res) => {

        res.status(200).json({
            message: "Resume Uploaded Successfully",
            file: req.file,
        });

    }
);

module.exports = router;