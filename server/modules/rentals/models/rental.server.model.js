const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentalSchema = new Schema({
    title: { 
        type: string, 
        required: true,
        max: [128, 'too long']
    },

});