

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

const mailAPIKey = "aceac3b5d97ef65336308b846108d098-us9";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/signup.html");
})


app.post("/",function(req,res){
    const firstName = req.body.namef;
    const secondName = req.body.namel;
    const email = req.body.email;
    console.log(firstName,secondName,email);
})

app.listen(port,function(req,res){
    console.log("listening");
})
