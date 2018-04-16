const express = require('express');
const userRouter = express.Router();

const User = require('../../models/model.user');

userRouter.get('/', ( req, res ) => {
    User.find({}, function( err, response ) {
        if( err ) {
            res.status(500).json({
                errmsg: 'error'
            })
        } else {
            res.json(response);
        }
    })
        
});


userRouter.post('/', ( req, res ) => {
    let user = new User(req.body);
    user.save(function( err, user ) {
        if( err ){
            res.status(500).json({
                errmsg: "error"
            })
        } else {
            res.json(user);
        }
    })
});

module.exports = userRouter;