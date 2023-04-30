const mongoose = require("mongoose");
const studentschema = new mongoose.Schema({
  name: String,
  class: Number,
  father: String,
  mother: String,
},
{timestamps:true});// this tracks timing details of document(createdAt, UpdatedAt)
const student = mongoose.model("student", studentschema);
module.exports = student;



