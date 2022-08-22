var express = require('express');
var app = express();
app.get('/add', function (req, res) {
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    var result = a + b;
    res.send("result : " + result);
});
app.get('/subtraction', function (req, res) {
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    var result = a - b;
    res.send("result : " + result);
});
app.get('/multiplication', function (req, res) {
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    var result = a * b;
    res.send("result : " + result);
});
app.get('/division', function (req, res) {
    var a = Number(req.query.num1);
    var b = Number(req.query.num2);
    var result = a / b;
    res.send("result : " + result);
});
app.listen(3000);
