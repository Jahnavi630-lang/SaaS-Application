
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
const authRoutes = require("./routes/authRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("SaaS Application API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});