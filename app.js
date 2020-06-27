const express = require("express");
const expresslayouts = require("express-ejs-layouts")
const mongoose = require('mongoose')
const app = express (); 
//db config 
const db = require('./config/keyes').MongoURI
// connect to db 
mongoose.connect(db, {useUnifiedTopology:true , useNewUrlParser:true})
.then(()=> console.log(' Mongodb connected '))
.catch(err => console.log(err))

//Ejs
app.use(expresslayouts)
app.set('view engine', 'ejs');
//Bodyparser 
app.use(express.urlencoded({extended:false}))
//ROUtES
app.use("/" , require("./routes/index"));
app.use('/users', require('./routes/users'));
const PORT = process.env.PORT || 5000 ; 


app.listen(PORT , console.log('server strated on port'));