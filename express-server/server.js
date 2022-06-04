const express = require('express');
const app = express();
const port = 2000;

app.get('/', function(req, res){
    res.send('Hello World!')
});

app.get('/fuck',function(req,res){
  res.send("Chang is being fucked!");
});

app.listen(port, function(){
  console.log(`Example app listening on port ${port}`)
});
