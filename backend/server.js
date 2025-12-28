import express from "express";

const app = express();

const PORT = 2001;

app.get("/", (req, res) => {
  res.send("Srever is running");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
