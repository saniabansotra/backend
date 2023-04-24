const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDatabase = () => {
  try {
    mongoose.connect("mongoose://127.0.0.1.27010").then(() => {
      console.log("Database Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
const STUDENT_MODLE = require("./models/studentt");
app.use(express.json());

app.post("/api/student", async (req, res) => {
  try {
    const students = {
      name: req.body.name,
      class: req.body.class,
      father: req.body.father,
      mother: req.body.mother,
    };
    const student1 = new STUDENT_MODLE(students);
    await student1.save();
    return res.json({ success: true, message: "Data saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
app.get("/api/student", async (req, res) => {
  try {
    const studentdata = await STUDENT_MODLE.find();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});
connectDatabase();
const PORT = 8000;
app.listen(PORT, (req, res) => {
  console.log("The server is connected on port ", PORT);
});
