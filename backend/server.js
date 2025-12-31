import express from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "./config/db.js";
import Task from "./models/Task.js";
import User from "./models/User.js";
import protect from "./middleware/authMiddleware.js";

dotenv.config();
connectDB();

const app = express();

const PORT = 2001;

let tasks = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Srever is running");
});

app.get("/api/tasks", protect, async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/api/tasks", protect, async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

app.post("/api/users/register", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json(user);
});

app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user)
    return res.status(401).json({ message: "Invalid email or password" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(401).json({ message: "Invalid email or password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({ token });
});

app.put("/api/tasks/:id", protect, async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

app.delete("/api/tasks/:id", protect, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
