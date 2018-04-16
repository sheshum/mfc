const express = require('express');
const router = express.Router();

const userRouter = require('./route.user');


router.use('/users', userRouter);

module.exports = router;