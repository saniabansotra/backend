const express = require("express");
const app = express();

app.post("/api/biodata", (req, res) => {
  try {
    console.log(req.body.username),
      console.log(req.body.userRollno),
      console.log(req.body.userBranch),
      console.log(req.body.userAge),
      console.log(req.body.freshers);

    const newobject = {
      name: req.body.name,
      rollNo: req.body.name,
      branch: req.body.branch,
      age: req.body.fresher,
      isFresher: req.body.isFresher,
    };
    //   const person = {
    //     Name: req.body.name,
    //     Birthdate: req.body.birthdate,
    //     Address: req.body.address,
    //     PhoneNumber: req.body.number,
    //     Hobbies: req.body.hobbies,
    //     Linkedin: req.body.linkedin,
    //     Github: req.body.github,
    //     Email: req.body.email,
    //   };
    console.log(newobject);
    return res.json({ success: true, message: "New person added" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
