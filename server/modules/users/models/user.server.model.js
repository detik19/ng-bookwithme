'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let validateUsername = function (username) {
    let usernameRegex = /^(?=[\w.-]+$)(?!.*[._-]{2})(?!\.)(?!.*\.$).{3,34}$/;
    return (
      this.provider !== 'local' ||
      (username && usernameRegex.test(username) && config.illegalUsernames.indexOf(username) < 0)
    );
};

const userSchema = new Schema({
    username: {
        type: String,
        unique: 'Username already exists',
        required: 'Please fill in a username',
        validate: [validateUsername, 'Please enter a valid username: 3+ characters long, non restricted word,'+
         'characters "_-.", no consecutive dots, does not begin or end with dots, letters a-z and numbers 0-9.'],
        trim: true,
        min:[4, 'to short, minimum is 4 characters'],
        max:[32, 'too long, max is 32 characters']
        
    },
    email :{
        type: String,
        index: {
            unique: true,
            sparse: true
        },
        lowercase: true,
        trim: true,
        required:'email is Required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    rentals: [
        {
            type: Schema.ObjectId,
            ref: 'Rental'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
