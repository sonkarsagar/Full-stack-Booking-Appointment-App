const express=require('express')
const router = express.Router()
const userControl=require('../controllers/userControl')

router.get('/',userControl.getUser)

router.post('/user/api',userControl.postUser)

router.delete('user/api/:id',userControl.deleteUser)

module.exports=router