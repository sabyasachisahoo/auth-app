const jwt = require('jsonwebtoken');
//const passport = require('passport');
const config = require('../config/database');

const authUser = require('../models/userDetails');

exports.registerUser = (req,res) => {
    const newUser = new authUser({
        userName :req.body.userName,
        password :req.body.password,
    });

   authUser.addUser(newUser,(err) => {
       if(err){
           throw err
       }else{
           res.send("Sucessfully registed")
       }
   });
}

exports.loginUser = (req,res) => {
    const userName = req.body.userName;
    const password = req.body.password;
    
    authUser.getUserByUsername(userName,(err,user) => {
        if(err) throw err;
        if(!user) {
            return res.send("User not found");
        }
        authUser.comparePassword(password,user.password, (err,isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(),config.secret,{
                    expiresIn:604800 //1week
                });
                res.json({
                    token:'JWT '+token,
                    user:{
                        id:user._id,
                        userName:user.userName
                        //password:user.password
                    }
                });
            }else{
                return res.send("Wrong Password");
            }
        });
    });
}

exports.profileInfo = (req,res) => {
    res.json({user:req.user})
}

exports.adminInfo = (req,res) => {
    const role = req.user.role;
    console.log(role);
    authUser.getUserByRole(role,(err,user) => {
        if(err) throw err;
        if(user && user.role == 'ADMIN'){
            res.send("You are in admin page!!")
        }else{
            res.send("You don't have admin access")
        }
    })
   
}