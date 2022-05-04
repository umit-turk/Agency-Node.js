const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const pageRoute = require('./routes/pageRoute');

const app = express();

//connect db
mongoose.connect('mongodb://localhost/agency-test-db');
//template engine
app.set('view engine','ejs');

//Middlewears
app.use(express.static('public'));

//Routes
app.use('/', pageRoute);



const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})

