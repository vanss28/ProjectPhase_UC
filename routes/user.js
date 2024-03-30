const {signup}=require('../controller/user')
const{log,getuser,deluser,updateuser}=require('../controller/user')
const authenticatetoken=require('../middleware/authenticate')
const express = require('express')
const router = express.Router()

router.post('/signup',signup)
router.post('/login',log)
router.get('/get',authenticatetoken,getuser)
router.delete('/delete',authenticatetoken,deluser)
router.patch('/update',authenticatetoken,updateuser)

module.exports=router