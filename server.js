require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5052;

app.use(express.json());

const cors = require("cors");
app.use(cors());

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
