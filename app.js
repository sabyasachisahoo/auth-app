const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

//database connection 
const dbConfig = require('./config/database')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url)
    .then(()=>{
        console.log("Connected to database")
    }).catch(error => {
        console.log("Error in connection to database. Exiting now...")
        process.exit(); 
    });

//to pass content type  
app.use(bodyParser.json())   
app.use(bodyParser.urlencoded({extended:true}))

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//user route
const userRoute = require('./routes/user.route');
app.use('/user',userRoute);

//auth route
const authRoute = require('./routes/auth.route');
app.use('/auth',authRoute);

const port = 4000;
app.listen(port,function(){
    console.log("server is up and running on "+port)
})