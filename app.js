const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

// Import Model
const TaskModel = require("./model/TaskModel");

app.post("/add/task", async (req, res) => {
  const { task } = req.body;

  if (!task) {
    return res.status(500).json({
      status: false,
      message: "Invalid payload",
    });
  }

  const response = await TaskModel.create({ Task: task });
  console.log("response", response);
  return res.status(200).json({
    status: true,
    data: response,
  });
});

app.get("/task", async (req, res) => {
  const response = await TaskModel.find({ isActive: false });
  console.log("response", response);
  res.status(200).json({
    status: true,
    data: response,
  });
});

app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;

  const response = await TaskModel.findByIdAndUpdate(id, { isActive: false });
  res.status(200).json({
    status: true,
    data: response,
  });
});

app.post("/update", async (req, res) => {
  const { task } = req.body;

  const response = await TaskModel.findByIdAndUpdate(id, { task });
  res.status(200).json({
    status: true,
    data: response,
  });
});

mongoose
  .connect(process.env.DB_URL)
  .then((res) => {
    app.listen(4000, (req, res) => {
      console.log("server Runing Port:4000");
    });
  })
  .catch((err) => console.log(err));
