/////////////////////////////////////////////

const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
  name: String,
  details: String,
  phoneNumber: Number,
  address: String,
  hostEmail: String,
});
const patientmodel = mongoose.model("patient", hospitalSchema);
module.exports = patientmodel;
