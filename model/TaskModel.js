const mongoose = require("mongoose");

const Task = new mongoose.Schema(
  {
    Task: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const TaskModel = mongoose.model("Task", Task);
module.exports = TaskModel;
