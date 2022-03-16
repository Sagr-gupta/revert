const express = require('express');
const mongoose=require('mongoose');
const path = require('path')
const dotenv = require('dotenv') 
var cors = require('cors');



const session = require('express-session')
const MongoStore = require('connect-mongo')





var app = express();

app.use(cors());

//takes us to the root(/) URL


var task = ["buy socks", "practise with nodejs"];


dotenv.config({ path: './config/config.env' })
// Connect to mongodb
// mongoose.connect("mongodb://localhost/todo_list",{
    mongoose.connect(
        process.env.MONGO_URI, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: MongoStore.create({
//           mongoUrl:process.env.MONGO_URI,
//       }),
//     })
//   )


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json()) ; 

app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    task.push(newTask);
    res.redirect("/");
});


// app.use(require("./routes/index"))
app.use(require("./routes/todo"))




app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
});

app.get('/' , (req , res)=>{
    res.send('herfbrv ')
})
