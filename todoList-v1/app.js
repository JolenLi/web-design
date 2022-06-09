

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
//
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var items = ["first","second","third"];

app.get("/",function(req,res){
  var today = new Date();
  var options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay:day,newListItems:items});
})

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
})
app.listen(port,function(req,res){
    console.log("listening "+port);
})
