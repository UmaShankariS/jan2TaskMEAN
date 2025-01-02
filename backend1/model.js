const mongoose = require('mongoose');
const skeleton = new mongoose.Schema({
    name:String,
    DOB:Date,
    age:String,
    gender:String,
    mobileNum:String,
    isActive:Boolean,
    createdDate:Date,
    createdBy:String,
    updatedDate:Date,
    updatedBy:String
});
const schemaSkeleton = mongoose.model('jan2Staff_details',skeleton);
module.exports=schemaSkeleton;