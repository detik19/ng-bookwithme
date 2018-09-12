'use strict';

const express = require('express');

module.exports.init = function (db) {
    const app = express();
    return app;
}