const mongoose = require("mongoose");
const teacher_schema = new mongoose.Schema({
  name: String,
  subject: String,
  age: Number,
  number: Number,
});
const teacher = mongoose.model("teacher", teacher_schema);
module.exports = teacher;
