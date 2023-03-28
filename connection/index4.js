// const express = require("express");
// const mongoose = require("mongoose"); // works as middleware b/w database and server
// const app = express(); //top most line of server
// const { connectDatabase } = require("./cile");

// // const connectDatabase = () => {
// //   try {
// //     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
// //       // useFindAndModify: true,
// //       console.log("database connected");
// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };

// connectDatabase();
// const PORT = 8000;

// app.listen(PORT, () => {
//   // bottom most line
//   console.log("Server is running on port ", PORT);
// });

const express = require("express");
const mongoose = require("mongoose"); // works as middleware b/w database and server
const app = express(); //top most line of server
const { connectDatabase } = require("./cile");

//main code
app.use(express.json());
app.post("/savedata", (req, res) => {
  try {
    console.log(req.body);
    return res.json({ success: true, message: "data connected" });
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
