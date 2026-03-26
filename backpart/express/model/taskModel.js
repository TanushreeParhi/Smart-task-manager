const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  inputTask: { type: String, required: true },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
})

const taskModel = new mongoose.model("task", taskSchema)

module.exports = taskModel