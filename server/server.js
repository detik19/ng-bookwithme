const express = require ('express');
const mongoose = require ('mongoose');
const config = require('./config/env/development');
var app = require('./config/lib/app');


// app.get('/rentals',
//     (req, res)=>{
//         res.json({'success': true});
//     }
// );

var server = app.start();
// mongoose.connect(config.DB_URI, { useNewUrlParser: true })

// const app = express();

// app.get('/rentals',
//     (req, res)=>{
//         res.json({'success': true});
//     }
// );
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, function() {
//     console.log('im running');
// });