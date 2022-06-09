const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
const port = 2000;

app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
})





app.post("/",function(req,res){
    const query = req.body.cityName;
    const appid  = "588188db3baca2efc07c608849fde73f";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units="+unit;
    https.get(url,function(response){
        response.on("data",function(data){
          const weatherData = JSON.parse(data);
          const temp = weatherData.main.temp;
          const city = weatherData.name;
          const desc = weatherData.weather[0].description;
          const iconID = weatherData.weather[0].icon;
          const urlIcon = "<img src='"+"http://openweathermap.org/img/wn/"+iconID+"@2x.png"+"' >";

          res.write("<h1><p>The weather is currently "+desc+"</p>");
          res.write("The temperature in "+"<em>"+city+"</em>"+" is "+ "<em>"+temp+"</em>"+" degrees Celcius</h1>");
          res.write(urlIcon)
          res.send();
        })
    })
})


app.listen(port,function(){
  console.log("running "+port);
})
