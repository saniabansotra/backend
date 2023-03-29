const express = require("express");
// const mongoose = require("mongoose"); // works as middleware b/w database and server
const app = express(); //top most line of server
const { connectDatabase } = require("./connection/cile");
const USER = require("./models/patient");

app.use(express.json());

app.post("/api/patientdata", async (req, res) => {
  try {
    const newobject = {
      name: req.body.name,
      details: req.body.details,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      email: req.body.email,
    };
    const userData = new USER(newobject);
    await userData.save();
    // console.log(newobject)/;
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, error: error.message });
  }
});

connectDatabase();
const PORT = 8000;

app.listen(PORT, () => {
  // bottom most line
  console.log("Server is running on port ", PORT);
});

// const express = require("express");
// const hospitalSchema = new mongoose.Schema({
//   Name: String,
//   Details: String,
//   phoneNumber: String,
//   Address: [
//     {
//       type: String,
//       required: true,
//     },
//   ],
//   hostEmail:
//     String[
//       {
//         type: Varchar,
//         required: true,
//       }
//     ],
// });
// const patientmodel = mongoose.model("user", hospitalSchema);
// module.export = patientmodel;
