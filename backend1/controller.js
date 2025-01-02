const checkSchema = require('./model');
const loginSchema = require('./Loginmodel');
const login = async (req, res) => {
    try {
        const {name,password}=req.body;console.log("check dataaaaaaaaaaa", req.body);
        const loginDetails = await loginSchema.find({});

        res.status(200).json(loginDetails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const getStaff = async (req, res) => {
    try {
        const data = await checkSchema.find({}); console.log("check dataaaaaaaaaaa", data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const addStaff = async (req, res) => {
    try{
        const {name,dob,age,mobileNum}=req.body;
        console.log("check!!!!!!!!!!!!!!!!!!!!!!!!",req.body);
        const adddata = new checkSchema({
            name:name,
            DOB:dob,
            age:age,
            gender:gender,
            mobileNum:mobileNum
        })
        console.log("check after schema",adddata)

       await  adddata.save();
        res.status(200).json({message:"Data Added Successfully",adddata});
    }catch(err){
        res.status(500).json({message:"Error Occurs",err:err});
    }
}
const getStaffById = async (req, res) => {
    try {
        const {_id}=req.body;
        const data = await checkSchema.findById({_id:_id}); console.log("check dataaaaaaaaaaa", data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const updateStaff = async (req,res)=>{
    try{
        const {name,dob,age,mobileNum,_id}=req.body;
        console.log("check at update",req.body);
        const updData = await checkSchema.updateOne({_id:_id},{$set:{name:name, DOB:dob, age:age,mobileNum:mobileNum}})
        res.status(200).json(updData);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    getStaff, addStaff, getStaffById,updateStaff, login
}

