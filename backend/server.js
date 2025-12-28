import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

const PORT = 2001;

let tasks = [];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Srever is running");
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/api/tasks/:index", (req, res) => {
  tasks.splice(req.params.index, 1);
  res.json({ message: "Task deleted" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
