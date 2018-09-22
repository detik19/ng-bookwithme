
'use strict';

const path          = require('path');
const mongoose      = require('mongoose');
const User          = mongoose.model('User');
const errorHandler  = require(path.resolve('./server/modules/core/controllers/error.server.controller'));

exports.signup =  (req, res) => {
    delete req.body.roles;

    let user = new User(req.body);

    user.save((err, user) => {
        if(err){
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        }
        else {
            res.json(user);
;        }
    });
}