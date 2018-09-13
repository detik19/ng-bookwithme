const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { 
        type: String, 
        required: true,
        max: [128, 'too long']
    },

});