const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
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

module.exports = mongoose.model("Movie", movieSchema);

//   {
//     "date": "2024-10-01",
//     "title": "Titanic",
//     "genre": "Romance",
//     "rating": "3",
//     "lang": "English"
//   },
//   {
//     "date": "",
//     "title": "Cinderella",
//     "genre": "Romance",
//     "rating": "3",
//     "lang": ""
//   },
//   {
//     "date": "2024-10-05",
//     "title": "Kuch kuch hota hai",
//     "genre": "Romance",
//     "rating": "3",
//     "lang": "Hindi"
//   },
//   {
//     "date": "2024-10-16",
//     "title": "Zootopia",
//     "genre": "Comedy",
//     "rating": "5",
//     "lang": ""
//   },
//   {
//     "date": "2024-10-03",
//     "title": "jackpot",
//     "genre": "Comedy",
//     "rating": "3",
//     "lang": "English"
//   },
//   {
//     "date": "2024-10-06",
//     "title": "ctrl",
//     "genre": "Thriller",
//     "rating": "1",
//     "lang": "Hindi"
//   },
//   {
//     "date": "",
//     "title": "My fault",
//     "genre": "",
//     "rating": "",
//     "lang": ""
//   },
//   {
//     "date": "2024-10-01",
//     "title": "Jab we met",
//     "genre": "Romance",
//     "rating": "5",
//     "lang": "Hindi"
//   },
//   {
//     "date": "2024-10-14",
//     "title": "stree",
//     "genre": "Thriller",
//     "rating": "3",
//     "lang": "Hindi"
//   },
//   {
//     "date": "2024-10-03",
//     "title": "dune",
//     "genre": "Thriller",
//     "rating": "2",
//     "lang": "English"
//   },
//   {
//     "title": "princess diaries",
//     "date": "2025-03-10T00:00:00.000Z",
//     "genre": "Romance",
//     "rating": 1,
//     "_id": "67ced104c4df8a322c3c6498",
//     "__v": 0
//   },
//   {
//     "title": "moana",
//     "date": "2025-03-11T00:00:00.000Z",
//     "genre": "Comedy",
//     "rating": 4,
//     "_id": "67ced162c4df8a322c3c64a2",
//     "__v": 0
//   },
//   {
//     "title": "xxx",
//     "date": "2025-03-10",
//     "genre": "Romance",
//     "rating": 1,
//     "_id": "67ced2528006d128e1f32f41",
//     "__v": 0
//   }
// ]
