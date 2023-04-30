const express = require("express");
// we import express liabrary in our main file for creating server.
const app = express(); //we call express function and store its features in app variable
//GET api, frontend requesting for data
//app.get (address or request url, callbackfunction )
app.get("/webies", (req, res) => {
  return res.json({ message: "Data 1 fetched from the database successfully" });
});
app.get("/webfreaks", (req, res) => {
  return res.json({ message: "Data 2 fetched from the database successfully" });
});
app.get("/webdevs", (req, res) => {
  return res.json({ message: "Data 3 fetched from the database successfully" });
});
app.get("/designers", (req, res) => {
  return res.json({ message: "Data 4 fetched from the database successfully" });
});
app.get("/hackers", (req, res) => {
  return res.json({ message: "Data  5fetched from the database successfully" });
});
app.get("/coders", (req, res) => {
  return res.json({ message: "Data 6 fetched from the database successfully" });
});
app.get("/food", (req, res) => {
  let arr = ["momos", "Burger", "Pizza", "Cake", "Pasteries"];
  if (arr.length >= 10) {
    return res.json({ data: arr, success: true });
  } else {
    return res.json({ data: arr, success: false });
  }
});

app.get("/student", (req, res) => {
  let students = [
    {
      name: "sania",
      branch: "CSE",
      Roll_no: "088",
      address: { state: "Jammmu", District: "Udhampur" },
    },
    {
      name: "Aastha",
      branch: "CSE",
      Roll_no: "001",
      address: { state: "UP", District: "Lucknow" },
    },
    {
      name: "Anjali",
      branch: "CSE",
      Roll_no: "025",
      address: { state: "UP", District: "Banaras" },
    },
    {
      name: "Princi",
      branch: "CSE",
      Roll_no: "088",
      address: { state: "UP", District: "Meerut" },
    },
  ];
  if (students.length >= 5) {
    return res.json({ data: students, status: true });
  } else {
    return res
      .status(404)
      .json({ error: "Data is less than 4", success: false });
  }
});

///  Try catch block is a very popular method of error handling in js. Tru block contains code which is to be executed, and catch block catches error of the try block just in case if any.
// This is also a standard practice which must be followed while writing any API.
//Try catch block also prevents the server form crashing, as catches blocl handles the error which may crash the server.
/// Writing single api for getting similar kind of data for multiple users/products.
//for this we use request parameters(params).
//we receive the variable parameter in an object i.e, request.params.
app.get("/api/linkedin/user1", (req, res) => {
  try {
    let arr = [
      { id: 1, name: "sania", batch: 25, branch: "CSE", address: "GKP" },
      { id: 2, name: "nia", batch: 25, branch: "EE", address: "GKP" },
      { id: 3, name: "ania", batch: 25, branch: "ECE", address: "GKP" },
      { id: 4, name: "janvi", batch: 25, branch: "IT", address: "GKP" },
      { id: 5, name: "nvi", batch: 25, branch: "CHE", address: "GKP" },
    ];
    //return res.json({data:arr.length,code:12});
    return res.json({ data: arr });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

app.get("/api/linkedin/user/:id", (req, res) => {
  try {
    let userid = parseInt(req.params.id);
    console.log(req.params.id);
    let arr = [
      { id: 1, name: "sania", batch: 25, branch: "CSE", address: "GKP" },
      { id: 2, name: "saa", batch: 26, branch: "CSE", address: "GKP" },
      { id: 3, name: "sania", batch: 24, branch: "CSE", address: "GKP" },
      { id: 4, name: "sania", batch: 27, branch: "CSE", address: "GKP" },
      { id: 5, name: "sania", batch: 28, branch: "CSE", address: "GKP" },
    ];
    const user = arr.find((v) => {
      console.log(v);
      return v.id === userid;
    });
    if (user) {
      return res.json({ success: true, data: user });
    } else {
      return res.json({ sucess: false, error: "User with this id not found" });
    }

    return res.json({ data: arr, message: "single data" });
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
});

// app.listen(portnumber,callback(function))=> //callback function is called when previous task is complete.

// It is a standard practice to use /api in the initial backend api address to differentialte it with frontend routed and avoid confusion.
///  if api is like "/api/user/:id" whatever is sent after /api/user is treated as an id at the same backend api. How we get these parameters from req.params. Now we access these parameters and send relevant data by finding from database to client.

//create an api from which a user can send news data which includes followin fields,
//news title
//news description
//news date
//news catefory/ sports,politics,international etc..
//source // source of news
//views

//create an api from which a user can submit his biodata include following:-
//Name
//Birthdate
//Address
//Phonenumber
//HObbies
//Linkedinid
//github id
//Email

//after reciving data change names

// Second=>Create a login api like instagram, in which user enters his/her email and password. check whether the the email is valid and then check the password is correct(use originalpassword=>Webies123@#)

//eg:- enthuashu@gmail.com(email validation on google).

app.listen(8000, () => {
  console.log("Server is running at port 8000");
});
