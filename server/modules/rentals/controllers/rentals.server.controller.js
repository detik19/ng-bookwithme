'use strict';

const path = require('path');
const mongoose = require('mongoose');
const Rental = mongoose.model('Rental');
const errorHandler = require(path.resolve('./server/modules/core/controllers/error.server.controller'));

/**
 * Create an article
 */
exports.create = function (req, res) {
    console.log(req.body);

    var rental = new Rental(req.body);
    rental.save(
     (err) => {
      if (err) {
        return res.status(422).send({
          message: errorHandler.getErrorMessage(err)
        });
      } else {
        res.json(rental);
      }
    });
};

exports.list = (req, res) => {
    Rental.find().exec(
        (err, rentals) => {
            if (err) {
                return res.status(422).send({
                  message: errorHandler.getErrorMessage(err)
                });
              } else {
                res.json(rentals);
              }
        }
    );
}