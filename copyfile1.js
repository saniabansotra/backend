const express = require("express");
const mongoose = require("mongoose");
const app = express();
const connectDatabase = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
      console.log("database connected");
    });
  } catch (error) {
    console.log(error);
  }
};
const HOSTELER_MODEL = require("./models/hosteler");
const TEACHER_MODEL = require("./models/teacher");
const hosteler = require("./models/hosteler");
const teacher = require("./models/teacher");
app.use(express.json());

app.post("/api/hostelerdata", async (req, res) => {
  try {
    const hostelers = {
      h_name: req.body.username,
      h_mother_name: req.body.mother_name,
      h_father_name: req.body.father_name,
      h_number: req.body.phone_number,
      h_roomNo: req.body.room_number,
    };
    const hosteler1 = new HOSTELER_MODEL(hostelers);
    await hosteler1.save();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

// get student in sorted order
app.get("/api/lateststudent", async (req, res) => {
  try {
    const sortedStudents = await STUDENT_MODEL.find().sort({ createdAt: -1 }); //-1 is decendingg and 1 is ascending
    return res.json({ success: true, data: sortedStudents });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
//get limited students
// under get
// const sortedStudents=await STUDENT_MODEL.find().limit(Number)
//always sort comes first then limit

app.get("/api/hostelerdata", async (req, res) => {
  try {
    const userdata = await HOSTELER_MODEL.find();
    return res.json({ success: true, data: userdata });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ succcess: false, error: error.message });
  }
});

app.post("/api/teacher", async (req, res) => {
  try {
    const teachers = {
      name: req.body.username,
      subject: req.body.subject_name,
      age: req.body.user_age,
      number: req.body.phone_number,
    };
    const teacher1 = new TEACHER_MODEL(teachers);
    await teacher1.save();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
