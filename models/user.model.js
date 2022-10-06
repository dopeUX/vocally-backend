const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
});

const userModel = mongoose.model('user', UserSchema);
module.exports = userModel;