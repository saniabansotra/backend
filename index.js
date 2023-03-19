const express = require("express");
const app = express();
const PORT = 5000;
app.get("/webies", (req, res) => {
  return res.json({ status: true, message: "hello" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port $(PORT)`);
});
