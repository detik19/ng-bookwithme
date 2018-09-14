'use strict';

const express           = require('./express');
const mongooseService   = require('./mongoose')
const config            = require('../config');
const seed              = require('./mongo-seed');


function seedDB() {
    if (config.seedDB && config.seedDB.seed) {
      console.log(chalk.bold.red('Warning:  Database seeding is turned on'));
      seed.start();
    }
  }

module.exports.init = function init(callback) {

    mongooseService.connect(
        (db) => {
            mongooseService.loadModels(seedDB);

            let app = express.init(db);

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