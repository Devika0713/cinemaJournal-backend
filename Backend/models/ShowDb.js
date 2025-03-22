const mongoose = require("mongoose");

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    Unique: true,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  lang: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
});
module.exports = mongoose.model("Show", showSchema);

// [
//   {
//     date: "2024-11-02",
//     title: "Vincenzo",
//     genre: "Thriller",
//     rating: "2",
//     lang: "Korean",
//   },
//   {
//     date: "2024-10-29",
//     title: "Call me bae",
//     genre: "Comedy",
//     rating: "5",
//     lang: "Hindi",
//   },
//   {
//     date: "2025-03-06",
//     title: "Lovely runner",
//     genre: "Romance",
//     rating: "4",
//     lang: "Korean",
//   },
// ];
