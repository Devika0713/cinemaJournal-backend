const router = require("express").Router();
const Show = require("../models/ShowDb");

// Create a new show
router.post("/", async (req, res) => {
  const newShow = new Show(req.body);
  try {
    const savedShow = await newShow.save();
    console.log("saved show", savedShow);
    res.status(200).json(savedShow);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all shows
router.get("/", async (req, res) => {
  try {
    const shows = await Show.find().sort({ date: -1 });
    res.status(200).json(shows);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
