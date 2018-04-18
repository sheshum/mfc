const User = require('../../models/model.user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const secret = 'shhhhh';
const MONGO_DUPLICATE_CODE = require('../config').MONGO_DUPLICATE_CODE;

module.exports.signupRoute = function( req, res ) {
   
    const user = new User( req.body.user );

    user.save(function( error, user ) {
        if( error ) {

            if( error.code === MONGO_DUPLICATE_CODE ) {
                res.status(500).json({
                    errmsg: 'That username is taken!'
                });
            } else {

                res.status(500).json({
                    errmsg: 'Error saving user.'
                });

            }


        } else {
            res.json( user );
        }

    });
};

module.exports.loginRoute = function ( req, res ) {
    console.log('Login request: ', req.body)
    const username = req.body.user.username;
    const password = req.body.user.password;

    User.findOne({
        username: username
    }, function ( error, user ) {

        if( error ) {
            res.status(401).json({
                errmsg: 'Error fetching user'
            });
        }

        if( !user ) {
            res.status(401).json({
                errmsg: 'Invalid username!'
            })
            return;
        }

        user.comparePasswords( password, function ( error , result ) {

            if( error ) {
                res.status(401).json({
                    errmsg: 'Invalid password!'
                });
            }

            if ( result ) {

                 const jwtToken = jwt.sign({
                    username: username
                }, secret, {
                    expiresIn: 7200
                });

                res.json({
                    token: jwtToken,
                    expiresIn: 7200,
                    user
                });

            } else {
                res.status(401).json({
                    errmsg: 'Invalid credentials!'
                });
            }

        })

    });

};

const checkIfAuthenticated = expressJwt({
    secret: secret,
    getToken: function ( req ) {
        return req.cookies['id_token'];
    }
});

module.exports.checkIfAuthenticated = checkIfAuthenticated;