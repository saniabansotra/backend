const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/news", (req, res) => {
  try {
    const newobject = {
      news: req.body.news1,
      title: req.body.title1,
      category: req.body.category1,
      description: req.body.description1,
      views: req.body.views1,
      date: req.body.date1,
    };
    console.log(newobject);
    return res.json({ success: true, message: "today's news" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

//ANSWER 1
app.post("/api/biodata", (req, res) => {
  try {
    const person = {
      Name: req.body.name,
      Birthdate: req.body.birthdate,
      Address: req.body.address,
      PhoneNumber: req.body.number,
      Hobbies: req.body.hobbies,
      Linkedin: req.body.linkedin,
      Github: req.body.github,
      Email: req.body.email,
    };
    console.log(person);
    return res.json({ success: true, message: "New person added" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

//ANSWER2
app.post("/api/login", (req, res) => {
  try {
    const person = {
      Email: req.body.email,
      Password: req.body.password,
    };
    if (
      String(person.Email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      if (person.Password === "Webies123@#") {
        console.log(person);
        return res.json({ success: true, message: "Logged in successfully" });
      } else {
        return res.json({ success: false, message: "Use original Password" });
      }
    } else {
      return res.json({ success: false, message: "invalid email" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});
app.listen(8000, () => {
  console.log("server is running on port 8000");
});

app.post("/request", (req, res) => {
  try {
    let originalpassword = "webies123@#";
    let enteredpassword = req.body.password;
    let enteredemail = req.body.email;
    if (emailRegex.test(enteredEmail) == false) {
      return res.status(400).json({ success: true, error: message.error });
    }
    if (originalpassword === enteredpassword) {
      return res.json({ success: true, message: "Login Successfully" });
    } else {
      return res.json({ success: false, error: error.message });
    }
    console.log(req.body);
    return res.json({ success: true, message: "logged in successfully" });
  } catch {}
});

// Second=>Create a login api like instagram, in which user enters his/her email and password. check whether the the email is valid and then check the password is correct(use originalpassword=>Webies123@#)

//eg:- enthuashu@gmail.com(email validation on google).

//  whenever frontend sends data to backend server for storing in database, we use POST request.
//eg Login form/signup forms, Message sending, Posting photos onsocial media etc..
/// In postman data is to be sent to backend is written inside body(raw,json)
// and can be received in the backend in an object "req.body".

// JSON is an object where all the keys and values are  string.

//MongoDB stores documents data in the form of an object and the values of the objects be same for each document in a collection which is predefined. (in models).

////LOGED OUT//////////////
//
