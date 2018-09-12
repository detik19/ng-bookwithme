'use strict';

const express = require('./express');
const mongooseService = require('./mongoose')
const config = require('../config');

module.exports.init = function init(callback) {
    console.log('1');

    mongooseService.connect(
        (db) => {
            let app = express.init(db);
            console.log('2');

            if (callback){
                callback(app, db, config);
            } 
        }
    );
}
module.exports.start = function start(callback) {
    console.log('start');
    var _this = this;
    _this.init(
        (app, db, config) => {
            app.listen(3001, function() {
            console.log('im running');
        });

        if(callback) (app, db, config);
    });


}