const express = require("express");
const https = require("https");

const app = express();
const port = 2000;

app.get("/",function(req,res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=588188db3baca2efc07c608849fde73f&units=metric";
  https.get(url,function(response){
      // console.log(response);

      response.on("data",function(data){
        const weatherData = JSON.parse(data);
        const temp = weatherData.main.temp;
        const city = weatherData.name;
        res.send("<h1>The temperature in "+"<em>"+city+"</em>"+" is "+ "<em>"+temp+"</em>"+" degrees Celcius</h1>");
      })


  })

})

app.listen(port,function(){
  console.log("running "+port);
})
