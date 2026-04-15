const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend API Running ✅");
});

// Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(5000, () => {
  console.log(`✅ Server running on port 5000`);
});