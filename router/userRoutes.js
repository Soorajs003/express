const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')


router.post('/adduser', userController.addUser);


module.exports = router