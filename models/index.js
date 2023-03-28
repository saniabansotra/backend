/////////////////////////////////////////////

const express = require("express");
const hospitalSchema = new mongoose.Schema({
  Name: String,
  Details: String,
  phoneNumber: String,
  Address: [
    {
      type: String,
      required: true,
    },
  ],
  hostEmail:
    String[
      {
        type: Varchar,
        required: true,
      }
    ],
});
const patientmodel = mongoose.model("user", hospitalSchema);
module.export = patientmodel;
