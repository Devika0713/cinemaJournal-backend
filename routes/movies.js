const router = require("express").Router();
const Movie = require("../models/MovieDb");

// Create a new movie
router.post("/", async (req, res) => {
  const newMovie = new Movie(req.body);
  try {
    const savedMovie = await newMovie.save();
    console.log("saved movie", savedMovie);
    res.status(200).json(savedMovie);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get all movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find().sort({ date: -1 });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
