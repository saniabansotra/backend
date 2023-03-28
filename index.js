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

///////////////////////////////////////////
const mongoose = require("mongoose");
const productSchema = new Schema({
  product_name: String,
  product_price: String,
  product_discount: String,
  product_discription: String,
  product_image: String,
});
const product = mongoose.model("user", productSchema);

///////////////////////////////////////////////////
const express = require("express");
const employeeSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    requried: true,
    minLength: 6,
    maxLength: 100,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 1024,
  },
  role: {
    type: String,
    required: true,
  },
});
const employee = mongoose.model("user", employeeSchema);
///////////////////////////////////////
const mongoose = require("mongoose");
const google_userSchema = new mongoose.Schema({
  gmail: String,
  password: Integer,
  first_name: String,
  Last_name: String,
  age: String,
});
const google = mongoose.model("user", google_userSchema);
