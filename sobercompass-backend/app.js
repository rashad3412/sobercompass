// backend/app.js
const express = require("express");
const cors = require("cors"); // To handle cross-origin requests, if needed
const authRoutes = require("./routes/authRoutes"); // Import the routes

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS if necessary
app.use(cors());

// Register routes
app.use("/auth", authRoutes); // "/auth" will be the base route for your auth operations

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
