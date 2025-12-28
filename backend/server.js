import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Task from "./models/Task.js";

dotenv.config();
connectDB();

const app = express();

const PORT = 2001;

let tasks = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Srever is running");
});

app.get("/api/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

app.put("/api/tasks/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

app.delete("/api/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
