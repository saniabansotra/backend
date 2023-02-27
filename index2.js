const express = require("express");
const app=express();



app.use(express.json());//by writing this, we are making or server to receive data form the frontend else, we reveive undefined result.


app.post("/api/flower", (req,res) => {
    // console.log(req.params);
    
    try{
        console.log(req.body);
return res.json({success:true, message:"hello ji"});

    }
    catch(error){
        return res.json({success:false,error:error.message});
    }
});


app.listen(8000,()=> {
    console.log('server is running on port 8000');
});






//  whenever frontend sends data to backend server for storing in database, we use POST request.
//eg Login form/signup forms, Message sending, Posting photos onsocial media etc..
/// In postman data is to be sent to backend is written inside body(raw,json)
// and can be received in the backend in an object "req.body".