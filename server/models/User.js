const mongoose = require('mongoose');
const bookSchema = require('./Book.js').schema;
var bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    Books: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }]
    
})

userSchema.pre('save', function(next){
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
        if(err){
            return next(err)
        }else{
            user.password = hash;
            next();
        }
    });
});

userSchema.statics.authenticate = function(email, password, callback){
    User.findOne({email: email})
    .exec(function(err, user){
        if(err){
            return callback(error)
        }else if(!user){
            var err = new Error('no user!')
            err.status = 401;
            return callback(err);
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(isMatch === true){
                return callback(null, user)
            }else{
                return callback();
            }
        })
    })
};

const User =  mongoose.model('User', userSchema);
module.exports = User;
 