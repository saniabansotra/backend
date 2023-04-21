const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { connectDatabase } = require("./connection/cile");
const USER_MODEL = require("./models/user");
const PATIENT_MODEL = require("./models/patient");
const PRODUCT_MODEL = require("./models/product");
const GOOGLE_MODEL = require("./models/google");
const CALENDER_MODEL = require("./models/calender");

app.use(express.json());

app.post("/api/savedata", async (req, res) => {
  try {
    const newobject1 = {
      name: req.body.username,
      rollNo: req.body.userRollno,
      branch: req.body.userBranch,
      age: req.body.userAge,
      isFresher: req.body.fresher,
    };
    const userData1 = new USER_MODEL(newobject1);
    await userData1.save();

    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.get("/api/savedata", async (req, res) => {
  try {
    const userdata = await USER_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
//////////////////////
app.post("/api/productdata", async (req, res) => {
  try {
    const newobject2 = {
      product_name: req.body.name,
      product_price: req.body.price,
      product_discount: req.body.discount,
      product_discription: req.body.discription,
    };
    const userData1 = new PRODUCT_MODEL(newobject2);
    await userData1.save();
    // console.log(newobject)/;
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/productdata", async (req, res) => {
  try {
    const userdata = await PRODUCT_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
////////////////////////////////////////////////////

app.post("/api/googledata", async (req, res) => {
  try {
    const newobject3 = {
      u_gmail: req.body.gmail,
      u_password: req.body.password,
      u_first_name: req.body.fname,
      u_Last_name: req.body.lname,
      u_age: req.body.age,
    };
    const userData1 = new GOOGLE_MODEL(newobject3);
    await userData1.save();
    // console.log(newobject)/;
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/googledata", async (req, res) => {
  try {
    const userdata = await GOOGLE_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
////////////////////////////////////////////////////
app.post("/api/calenderdata", async (req, res) => {
  try {
    const newobject4 = {
      year: req.body.c_year,
      month: req.body.c_month,
      day: req.body.c_day,
      date: req.body.c_date,
      event: req.body.c_event,
    };

    const userData1 = new CALENDER_MODEL(newobject4);
    await userData1.save();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/calenderdata", async (req, res) => {
  try {
    const userdata = await CALENDER_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
///////////////////////////////////////////////////////

app.post("/api/patientdata", async (req, res) => {
  try {
    const newobject = {
      name: req.body.uname,
      details: req.body.udetails,
      phoneNumber: req.body.uphoneNumber,
      address: req.body.uaddress,
      email: req.body.uemail,
    };
    const userData = new PATIENT_MODEL(newobject);
    await userData.save();
    // console.log(newobject)/;
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error.message });
  }
});

app.get("/api/patientdata", async (req, res) => {
  try {
    const userdata = await PATIENT_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8000;

app.listen(PORT, () => {
  // bottom most line
  console.log("Server is running on port ", PORT);
});
