const mongoose = require("mongoose");
const google_userSchema = new mongoose.Schema({
  gmail: String,
  password: Integer,
  first_name: String,
  Last_name: String,
  age: String,
});
const google = mongoose.model("user", google_userSchema);
module.export = google;
