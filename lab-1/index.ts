const express = require('express')  
const app = express()  
app.get('/add', function (req, res) {  
  const a = Number(req.query.num1);
  const b = Number(req.query.num2);
  
  var result = a + b;
  res.send("result : " + result);
});
app.get('/subtraction', function (req, res) {  
  const a = Number(req.query.num1);
  const b = Number(req.query.num2);
    
  var result = a - b;
  res.send("result : " + result);
});
app.get('/multiplication', function (req, res) {  
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
      
    var result = a * b;
    res.send("result : " + result);
});
app.get('/division', function (req, res) {  
    const a = Number(req.query.num1);
    const b = Number(req.query.num2);
      
    var result = a / b;
    res.send("result : " + result);
});
app.listen(3000)