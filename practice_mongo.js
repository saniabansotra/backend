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
const hosteler = require("./models/hosteler");
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
connectDatabase();
const PORT = 8000;
app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
