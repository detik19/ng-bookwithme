const express = require ('express');
const mongoose = require ('mongoose');
const config = require('./config/env/development');
var app = require('./config/lib/app');


var server = app.start();
