const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const showRoute = require("./routes/shows");
const movieRoute = require("./routes/movies");

dotenv.config(); // Load environment variables
app.use(express.json()); // Add this line to parse JSON request bodies

const cors = require("cors");
app.use(
  cors({
    origin: "",
    //  "https://cinema-journal-frontend.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: "Content-Type,Authorization",
  })
);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World testing backend"); // Send response to the client
});

app.use("/api/shows", showRoute);
app.use("/api/movies", movieRoute);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
