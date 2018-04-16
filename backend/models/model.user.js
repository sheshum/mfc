
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullName: { type: String, default: 'default'},
    username: String,
    password: String
});

userSchema.pre('save', function ( next ) {
    const user = this;

    if( !user.isModified('password') ) return next();

    bcryptjs.genSalt(10, function ( err, salt ) {
        bcryptjs.hash(user.password, salt, function ( err, hash ) {
            user.password = hash;

            next();
        });
    });


});


userSchema.methods.comparePasswords = function ( password, callback ) {
    bcryptjs.compare( password, this.password , function ( error, result ) {
        if( error ) return callback( error );

        callback( null, result );
    });
};

module.exports = mongoose.model('User', userSchema);