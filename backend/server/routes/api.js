const express = require('express');
const router = express.Router();

const authService = require('./route.auth');
const userRouter = require('./route.user');



router.post('/signup', ( req, res ) => authService.signupRoute( req, res ));
router.post('/login', ( req, res ) => authService.loginRoute( req, res ));

//router.use(authService.checkIfAuthenticated);

//router.use('/users', userRouter);

module.exports = router;