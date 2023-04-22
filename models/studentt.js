const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
  name: String,
  class: Number,
  father: String,
  mother: String,
});
const student = mongoose.model("student", studentschema);
module.exports = student;
