const express = require('express')

const router = express.Router();

const { getAllUsers, addNewUser } = require('../controller/user.controller.js')


router
    .route('/')
    .get(getAllUsers)
    .post(addNewUser)


module.exports = router;