// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User"); // Import the User model

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in the .env file");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB ✅"))
  .catch((err) => console.error("MongoDB connection error:", err));

// User Registration Route
app.post("/auth/register", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();
    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

// User Login Route
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt for:", email); // Debug 1

  try {
    console.log("Searching for user..."); // Debug 2
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email); // Debug 3
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("User found. Comparing passwords..."); // Debug 4
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      console.log("Password mismatch for:", email); // Debug 5
      return res.status(400).json({ message: "Invalid credentials" });
    }

    console.log("Generating JWT..."); // Debug 6
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login successful for:", email); // Debug 7
    res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error("Login error:", err); // Critical debug point
    res.status(500).json({
      message: "Server error",
      error: process.env.NODE_ENV === "development" ? err : {},
    });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
