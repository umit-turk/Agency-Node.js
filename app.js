const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const app = express();

//connect db

//template engine
app.set('view engine','ejs');

//Middlewears
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`);
})

