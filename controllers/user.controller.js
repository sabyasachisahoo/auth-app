const User = require('../models/user.model');

exports.getAllUsers = (req,res) =>{
    User.find()
        .then((users) =>{
            res.send(users)
        }).catch((error)=>{
            console.log(error)
        })
    
}

exports.getUserById = (req,res) =>{
    User.findById(req.params.id)
        .then((user)=>{
            res.send(user)
        }).catch((error)=>{
            console.log(error)
        })
}

exports.createUser = (req,res) => {
    let user = new User({
        firstName : req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        mobile:req.body.mobile,
        location:req.body.location
    })

    user.save()
        .then((data) => {
            res.send(data)
        }).catch((error)=>{
            console.log(error);
        })
}

exports.updateUser = (req,res) =>{
    User.findByIdAndUpdate(req.params.id,req.body, {new: true})
    .then(()=>{
        res.send("user updated successfully")
    }).catch((error)=>{
        console,log(error)
    })
}
exports.deleteUser =(req,res) =>{
    User.findByIdAndRemove(req.params.id)
        .then(()=>{
            res.send("User deleted") 
        }).catch((error)=>{
            console.log(error);
        })
}