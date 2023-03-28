const mongoose = require("mongoose");
const calendarSchema = new mongoose.Schema({
  year: Number, //2023
  month: String, //March
  day: String, //Monday
  date: Number, //08
  event: String, //Holi
});
const usermodel = mongoose.model("user", calendarSchema);
module.exports = usermodel;
