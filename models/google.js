const mongoose = require("mongoose");
const google_userSchema = new mongoose.Schema({
  u_gmail: String,
  u_password: Number,
  u_first_name: String,
  u_Last_name: String,
  u_age: String,
});
const google = mongoose.model("google", google_userSchema);
module.exports = google;
