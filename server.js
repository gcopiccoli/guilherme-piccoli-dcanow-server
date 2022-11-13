require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5052;
const testData = require("./test/response.json");

app.use(express.json());

const cors = require("cors");
app.use(cors());

// A test endpoint to get stale data from API
// (so that we don't run out of API credits)
app.get("/test-data", (req, res) => {
  // Set a 2 second delay to simulate waiting for the real API
  setTimeout(() => {
    res.json(testData);
  }, 2000);
});

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
