const express = require('express');
const router =express.Router();

const { getStaff, addStaff,getStaffById,updateStaff,login}=require('./controller')

router.post('/login',login)
router.get('/getStaff',getStaff);
router.post('/addStaff',addStaff);
router.post('/getStaffById',getStaffById);
router.post('/updateStaff',updateStaff);

module.exports = router;

