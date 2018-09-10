const mongoose = require('mongoose');
    Schema = mongoose.Schema;

const UserSchema  = new Schema({
    firstName:String,
    lastName:String,
    email:String,
    mobile:Number,
    location:String
})

module.exports = mongoose.model('User',UserSchema);