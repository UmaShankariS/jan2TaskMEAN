const mongoose = require('mongoose');
const skeleton = new mongoose.Schema({
    username:String,
    password:String,
    StaffId:String,
    isLocked:Boolean
});
const loginSkeleton = mongoose.model('jan2App_access',skeleton);
module.exports=loginSkeleton;
