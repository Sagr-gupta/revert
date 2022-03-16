var express = require('express');
var app = express();
//takes us to the root(/) URL

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()) ; 

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});
//render the ejs and display added task, task(index.ejs) = task(array)


app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
});
