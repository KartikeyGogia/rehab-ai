const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const aiRoutes = require("./routes/aiRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();


app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "RehabAI API is running",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`RehabAI server running on port ${PORT}`);
});