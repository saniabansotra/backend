const mongoose = require("mongoose");
const hosteler_schema = new mongoose.Schema(
  {
    h_name: String,
    h_mother_name: String,
    h_father_name: String,
    h_number: Number,
    h_roomNo: Number,
  },
  {
    timestamps: true,
  }
);
const hosteler = mongoose.model("hosteler", hosteler_schema);
module.exports = hosteler;
