const express = require("express");
const mongoose = require("mongoose"); // works as middleware b/w database and server
const app = express(); //top most line of server
const { connectDatabase } = require("./cile");

// const connectDatabase = () => {
//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
//       // useFindAndModify: true,
//       console.log("database connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

connectDatabase();
const PORT = 8000;

app.listen(PORT, () => {
  // bottom most line
  console.log("Server is running on port ", PORT);
});
