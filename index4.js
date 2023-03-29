const express = require("express");
const mongoose = require("mongoose"); // works as middleware b/w database and server
const app = express(); //top most line of server
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
    // console.log(newobject)/;
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
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

////////////////////////////////////////////////////
app.post("/api/calenderdata", async (req, res) => {
  try {
    const newobject4 = {
      year: req.body.c_year, //2023
      month: req.body.c_month, //March
      day: req.body.c_day, //Monday
      date: req.body.c_date, //08
      event: req.body.c_event, //Holi
    };

    const userData1 = new CALENDER_MODEL(newobject4);
    await userData1.save();
    return res.json({ success: true, message: "Data Saved successfully" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
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

connectDatabase();
const PORT = 8000;

app.listen(PORT, () => {
  // bottom most line
  console.log("Server is running on port ", PORT);
});

// const express = require("express");
// const mongoose = require("mongoose"); // works as middleware b/w database and server
// const app = express(); //top most line of server
// const { connectDatabase } = require("./cile");

// //main code
// app.use(express.json());

// app.post("/api/savedata", async (req, res) => {
//   try {
//     // console.log(req.body.username),
//     //   console.log(req.body.userRollno),
//     //   console.log(req.body.userBranch),
//     //   console.log(req.body.userAge),
//     //   console.log(req.body.freshers);

//     const newobject = {
//       name: req.body.name,
//       rollNo: req.body.name,
//       branch: req.body.branch,
//       age: req.body.fresher,
//       isFresher: req.body.isFresher,
//     };
//     const saveData = new USER_MODEL(newobject);
//     await userData.save();
//     // console.log(newobject);
//     return res.json({ success: true, message: "Data Saved successfully" });
//   } catch (error) {
//     return res.json({ success: false, error: error.message });
//   }
// });

// try {
//   console.log(req.body);
//   return res.json({ success: true, message: "data connected" });
// } catch (error) {
//   console.log(error);
//   return res.json({ success: false, error: error.message });
// }

// connectDatabase();
// const PORT = 8000;

// app.listen(PORT, () => {
//   // bottom most line
//   console.log("Server is running on port ", PORT);
// });
